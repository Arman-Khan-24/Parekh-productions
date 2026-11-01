import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroVideo } from "./components/HeroVideo";
import { FannedCardsShowcase } from "./components/FannedCardsShowcase";
import { Manifesto } from "./components/Manifesto";
import { ThreeColumnFeature } from "./components/ThreeColumnFeature";
import { Ticker } from "./components/Ticker";
import { ServicesAccordion } from "./components/ServicesAccordion";
import { StudioShowcase } from "./components/StudioShowcase";
import { WheelProjectsShowcase } from "./components/WheelProjectsShowcase";
import { PinterestGallery } from "./components/PinterestGallery";
import { Destinations } from "./components/Destinations";
import { Footer } from "./components/Footer";
import { QuoteModal } from "./components/QuoteModal";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ServicesPage } from "./pages/ServicesPage";
import { SEOPage } from "./pages/SEOPage";
import { pageContent, metaByPath } from "./data/pages";
import { ArrowLeft } from "lucide-react";

// Every real path the router supports, derived from the single meta source (pages.js)
const PATH_KEYS = Object.fromEntries(
  Object.values(pageContent).map((p) => [p.path.replace(/\/$/, ""), p.key])
);
const PATH_ALIASES = { "/uk": "/london" };

// raw (pathname or hash fragment) -> canonical route, or null when unsupported
const normalizeUrlPath = (raw) => {
  const n = (raw || "").replace(/^#/, "").toLowerCase().replace(/\/$/, "");
  if (PATH_KEYS[n]) return n;
  if (PATH_ALIASES[n]) return PATH_ALIASES[n];
  return null;
};

// current browser location -> route; SSR returns null
const routeFromLocation = () => {
  if (typeof window === "undefined") return null;
  return normalizeUrlPath(window.location.pathname) || normalizeUrlPath(window.location.hash);
};

export default function App({ initialPath }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Normalize initial route from window pathname or hash or initialPath prop
  const getInitialRoute = () => {
    const direct = normalizeUrlPath(initialPath);
    if (direct) return direct;

    const fromWindow = routeFromLocation();
    if (fromWindow) return fromWindow;

    if (typeof window === "undefined") return "/";

    // Smart non-intrusive Geo Detection (root routes only):
    // if the visitor is clearly outside IST and has no saved preference,
    // gracefully route them to the London / UK division.
    if (window.location.pathname === "/" || window.location.pathname === "") {
      try {
        const savedPref = localStorage.getItem("parekh_region_pref");
        if (!savedPref) {
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
          const isIndiaTz = timeZone.includes("Calcutta") || timeZone.includes("Kolkata") || timeZone === "Asia/Colombo";
          if (!isIndiaTz && timeZone) {
            return "/london";
          }
        }
      } catch (e) {
        // Ignore localStorage restrictions in privacy mode
      }
    }

    return "/";
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(routeFromLocation() || "/");
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  // Per-route <title> + meta description (single source: src/data/pages.js)
  useEffect(() => {
    const meta = metaByPath[currentRoute] || metaByPath["/"];
    if (typeof document === "undefined" || !meta) return;
    if (meta.title) document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (meta.description && descTag) descTag.setAttribute("content", meta.description);
  }, [currentRoute]);

  const navigateTo = (route) => {
    if (typeof window !== "undefined") {
      try {
        if (route === "/london" || route === "/uk") {
          localStorage.setItem("parekh_region_pref", "london");
        } else if (route === "/") {
          localStorage.setItem("parekh_region_pref", "mumbai");
        }
      } catch (e) {
        // Ignore localStorage error
      }

      try {
        window.history.pushState({}, "", route);
      } catch (e) {
        window.location.href = route;
        return;
      }
      window.scrollTo(0, 0);
    }
    setCurrentRoute(route);
  };

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  // Flagship Landing Page (Mumbai Primary or London UK Division)
  const isUK = currentRoute === "/london";

  // Route: /services (Complete Services Directory)
  if (currentRoute === "/services") {
    return (
      <ServicesPage
        onOpenQuote={handleOpenQuote}
        onNavigate={navigateTo}
      />
    );
  }

  // Route: /gallery (Dedicated Autoplay In-Feed Visual Archive)
  if (currentRoute === "/gallery") {
    return (
      <div className="min-h-screen w-full bg-white text-black selection:bg-black selection:text-white">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-4 sm:px-12 py-3 sm:py-4 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-black bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-full transition-colors cursor-pointer shrink-0 no-underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </a>
          
          <div className="hidden xs:flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="truncate">Production Visual Archive</span>
          </div>

          <button
            onClick={handleOpenQuote}
            className="btn-satisfying-cta text-xs font-bold uppercase tracking-widest text-white bg-black rounded-full px-4 sm:px-6 py-2 cursor-pointer shrink-0"
          >
            Get A Quote
          </button>
        </header>

        <main className="w-full">
          <PinterestGallery onBackHome={() => navigateTo("/")} />
        </main>

        <Footer onQuoteClick={handleOpenQuote} onGalleryClick={() => navigateTo("/gallery")} />
        <WhatsAppButton />
        <QuoteModal open={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      </div>
    );
  }

  // Keyword landing pages — full SEO deep routes (corporate-events-mumbai, contact, etc.)
  const seoKey = PATH_KEYS[currentRoute];
  if (seoKey && seoKey !== "home" && seoKey !== "london") {
    return <SEOPage page={pageContent[seoKey]} onNavigate={navigateTo} />;
  }

  // Route: / or /london (Flagship Cinematic Landing Page with Dynamic Location Mode)
  return (
    <div className="min-h-screen w-full bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar 
        currentLocation={isUK ? "london" : "mumbai"}
        onContactClick={handleOpenQuote} 
        onGalleryClick={() => navigateTo("/gallery")}
        onNavigate={navigateTo}
      />
      <main className="w-full">
        {/* Hero Cinema Stream with Location-Specific Tagline */}
        <HeroVideo locationMode={isUK ? "london" : "mumbai"} />

        {/* 3-Card Fanned Scroll Showcase placed directly between Hero Video and Manifesto */}
        <FannedCardsShowcase />

        {/* Brand Manifesto */}
        <Manifesto />

        {/* 3-Column Editorial Feature with pure white background */}
        <ThreeColumnFeature />

        {/* Smooth 55s Marquee Ticker */}
        <Ticker />

        {/* Services Accordion */}
        <ServicesAccordion onOpenQuote={handleOpenQuote} />

        {/* Production Studio & Gear Vault */}
        <StudioShowcase />

        {/* Interactive Rotating Half-Dial Focus Wheel Projects Section */}
        <WheelProjectsShowcase onViewAllProjects={() => navigateTo("/gallery")} />

        {/* Dynamic Leaflet 2D World Map & Operational Hubs */}
        <Destinations onContactClick={handleOpenQuote} />
      </main>

      {/* Dynamic Location Footer: Displays Mayfair London or Kandivali Mumbai HQ */}
      <Footer 
        locationMode={isUK ? "london" : "mumbai"}
        onQuoteClick={handleOpenQuote} 
        onGalleryClick={() => navigateTo("/gallery")} 
      />
      
      {/* Dedicated Floating Official WhatsApp Button */}
      <WhatsAppButton />

      {/* Interactive Get A Quote Modal */}
      <QuoteModal open={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
