import { useState, useEffect, useRef } from "react";

export function FannedCardsShowcase() {
  const [fanProgress, setFanProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // Reduced-motion users get the final fanned layout with zero scroll-linked motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFanProgress(1);
      return;
    }

    const repaint = () => {
      rafRef.current = null;
      const progress = Math.min(Math.max((window.scrollY - 50) / 450, 0), 1);
      setFanProgress((prev) => (prev === progress ? prev : progress));
    };

    // Scroll runs through requestAnimationFrame: max one state flush per frame,
    // so a fast wheel spin cannot queue a re-render storm.
    const handleScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(repaint);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative w-full py-6 sm:py-10 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-10">
        
        {/* Ambient Backlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-neutral-200/50 via-neutral-100/40 to-neutral-200/30 blur-3xl rounded-full pointer-events-none -z-10" />

        {/* 3-Card Fanned Container with 3D perspective */}
        <div className="group/showcase relative flex items-center justify-center h-[340px] xs:h-[390px] sm:h-[480px] md:h-[530px] [perspective:1200px]">
          
          {/* Left Card: Auto Expo Reveal Film Coverage */}
          <div
            style={{
              transform: `translate3d(-${30 + fanProgress * 28}%, ${6 - fanProgress * 6}px, 0) rotate(-${8 - fanProgress * 3}deg) scale3d(0.92, 0.92, 1)`,
              willChange: "transform",
            }}
            className="absolute z-10 w-[170px] xs:w-[210px] sm:w-[290px] md:w-[350px] aspect-[4/5] rounded-[22px] sm:rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.14)] border border-neutral-200/80 bg-zinc-800 transition-all duration-500 ease-out cursor-pointer hover:z-30 hover:!-translate-x-[48%] hover:!-translate-y-4 hover:!rotate-[-11deg] hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] group-hover/showcase:translate-x-[-38%]"
          >
            <img
              src="/assets/parekh/client_media/stage-lighting.jpg"
              alt="Auto Expo Launch Reveal Cinematography"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            
            {/* Badge */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 rounded-xl sm:rounded-2xl bg-[#ff4d4f] px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              Launch Reel
            </div>
            
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-white">
              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-neutral-300 block">Reveal Cinematography</span>
              <p className="text-xs sm:text-sm font-bold">Auto Expo Pavilion</p>
            </div>
          </div>

          {/* Center Card: High-Energy Auto Expo Commercial Video Loop */}
          <div
            style={{
              transform: `translate3d(0, -${fanProgress * 12}px, 0) scale3d(1, 1, 1)`,
              willChange: "transform",
            }}
            className="relative z-20 w-[190px] xs:w-[230px] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-[22px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.22)] border-2 border-white bg-zinc-900 transition-all duration-500 ease-out cursor-pointer hover:z-30 hover:!scale-[1.07] hover:!-translate-y-5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          >
            <video
              src="/assets/parekh/autoexpo-max-quality.mp4"
              poster="/assets/parekh/client_media/stage-lighting.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />

            {/* Floating Live Reel indicator on Center Card */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center gap-1.5">
              <span className="flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#22c55e] animate-pulse" />
                Live Broadcast Reel
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-neutral-300 block">Harish Parekh Direction</span>
              <p className="text-sm sm:text-base font-bold">National Expo Coverage</p>
            </div>
          </div>

          {/* Right Card: High-Octane RCB Himalaya Press Meet */}
          <div
            style={{
              transform: `translate3d(${30 + fanProgress * 28}%, ${10 - fanProgress * 6}px, 0) rotate(${8 - fanProgress * 3}deg) scale3d(0.92, 0.92, 1)`,
              willChange: "transform",
            }}
            className="absolute z-10 w-[170px] xs:w-[210px] sm:w-[290px] md:w-[350px] aspect-[4/5] rounded-[22px] sm:rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.14)] border border-neutral-200/80 bg-zinc-800 transition-all duration-500 ease-out cursor-pointer hover:z-30 hover:!translate-x-[48%] hover:!-translate-y-4 hover:!rotate-[11deg] hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] group-hover/showcase:translate-x-[38%]"
          >
            <img
              src="/assets/parekh/client_media/rcb-himalaya-press.jpg"
              alt="RCB Himalaya Press Conference"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            {/* Floating pill badge */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex items-center gap-1.5">
              <div className="rounded-xl sm:rounded-2xl bg-[#ff4d4f] px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Press &amp; Media
              </div>
            </div>

            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-white pr-24">
              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-neutral-300 block">Corporate Summit</span>
              <p className="text-xs sm:text-sm font-bold">RCB Himalaya Launch</p>
            </div>
          </div>

        </div>

        {/* Bottom attribute pills */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {["Wedding Films Mumbai", "Commercial Photography", "Cinematic Motion", "Broadcast Precision"].map((attr) => (
            <span
              key={attr}
              className="rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-800 border border-neutral-200/70 transition-all hover:bg-neutral-200/80"
            >
              {attr}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
