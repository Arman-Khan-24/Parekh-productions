// language: JSX, file: Reveal.jsx, target: React 18 SPA + SSR prerender
// Scroll-reveal wrapper: IntersectionObserver, one-shot enter transition.
// SSR-safe (renders unstyled server-side; hiding only happens after mount),
// LCP-safe (above-fold content at mount is never hidden), and inert for
// prefers-reduced-motion users.

import { useEffect, useRef, useState } from "react";

export function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(true);
      return;
    }

    // Already (mostly) in viewport at mount: never hide — protects the prerendered
    // LCP above the fold from a post-hydration flash.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    setHidden(true);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          setHidden(false);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  let cls = className;
  if (hidden) cls = `${cls} reveal-hidden`.trim();
  else if (visible) cls = `${cls} reveal-in`.trim();

  return (
    <Tag
      ref={ref}
      className={cls}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
