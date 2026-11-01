import { siteContent } from "./siteContent.js";

const sharedStats = [
  { value: "2021", label: "Founded in Mumbai" },
  { value: "6", label: "Production hubs" },
  { value: "12+", label: "Core capabilities" },
];

export const pageContent = {
  home: {
    key: "home",
    path: "/",
    title: "Videography & Photography Production Company in Mumbai | Parekh Productions",
    description:
      "Premier videography and photography production company in Mumbai. Specialists in wedding films, pre-wedding shoots, commercial photography, TVC/DVC ads, drone cinematography and event coverage across India.",
    h1: "Videography & Photography Production Company in Mumbai",
    hero: siteContent.hero,
  },
  corporateEvents: {
    key: "corporateEvents",
    path: "/corporate-events-mumbai",
    title: "Event Photography & Videography Company in Mumbai | Parekh Productions",
    description:
      "Corporate event photography and videography in Mumbai. Keynote films, expo floor coverage, aftermovies, same-day press selects and executive portraits for summits, conferences and exhibitions.",
    h1: "Event Photography & Videography in Mumbai",
    hero: {
      eyebrow: "Corporate Events · Coverage · Films",
      title: "Event Photography & Videography in Mumbai.",
      body:
        "From product launches and dealer meets to national expos, our crews capture every keynote, handshake, and reveal — with same-day selects ready for your press kits.",
      primaryCta: "Get Quote",
      secondaryCta: "Explore Case Studies",
      secondaryHref: "#work",
      stats: sharedStats,
    },
  },
  eventProduction: {
    key: "eventProduction",
    path: "/event-production-mumbai",
    title: "Commercial Film & Video Production Company in Mumbai | Parekh Productions",
    description:
      "Commercial film production in Mumbai. TVC/DVC brand films, launch reveal cinematography, multi-camera live switching, licensed 4K drones and OTT/web series pipelines.",
    h1: "Commercial Film & Video Production in Mumbai",
    hero: {
      eyebrow: "TVC/DVC · Drone Cinematography · Broadcast",
      title: "Commercial Film & Video Production in Mumbai.",
      body:
        "Multi-camera cinema setups (RED/ARRI), licensed DGCA drone pilots, launch-reveal cinematography, and broadcast-ready brand films engineered for maximum engagement.",
      primaryCta: "Get Quote",
      secondaryCta: "View Reveal Films",
      secondaryHref: "#work",
      stats: sharedStats,
    },
  },
  photography: {
    key: "photography",
    path: "/corporate-photography-mumbai",
    title: "Event & Corporate Photography in Mumbai | Parekh Productions",
    description:
      "Professional corporate event photography, commercial product shoots, and executive summit coverage in Mumbai with high-velocity same-day delivery.",
    h1: "Event & Corporate Photography in Mumbai",
    hero: {
      eyebrow: "Commercial · Expos · Corporate Photography",
      title: "Event & Corporate Photography in Mumbai.",
      body:
        "High-definition advertising photography, expo floor coverage, same-day executive selects, and commercial brand stills that amplify your presence.",
      primaryCta: "Book Crew",
      secondaryCta: "Open Photo Archive",
      secondaryHref: "/gallery",
      stats: sharedStats,
    },
  },
  videography: {
    key: "videography",
    path: "/corporate-video-production-mumbai",
    title: "Corporate Video Production Company in Mumbai | Parekh Productions",
    description:
      "Corporate video production and event videography in Mumbai. TVCs, wedding films, brand anthem films, live switching, aftermovies, and licensed 4K drone cinematography.",
    h1: "Corporate Video Production Services in Mumbai",
    hero: {
      eyebrow: "Cinema 4K/8K · DVCs · Drone Cinematography",
      title: "Corporate Video Production Services in Mumbai.",
      body:
        "Multi-camera cinema setups (RED/ARRI), studio lighting, cinematic highlight edits, and broadcast-ready brand films engineered for maximum engagement.",
      primaryCta: "Request Reel",
      secondaryCta: "Watch Showreel",
      secondaryHref: "/gallery",
      stats: sharedStats,
    },
  },
  services: {
    key: "services",
    path: "/services",
    title: "Media Production Company in Mumbai | Parekh Productions",
    description:
      "Wedding films and photography, commercial shoots, TVC/DVC films, event coverage, drone cinematography, and post-production across Mumbai, Navi Mumbai, Thane, Pune, and Pan-India.",
    h1: "Media Production Services in Mumbai",
    hero: {
      eyebrow: "Weddings · Commercials · Coverage · Films",
      title: "Media Production Services in Mumbai.",
      body:
        "From luxury wedding films and national ad campaigns to expo coverage and drone reels, our camera crews shape the brief from first idea to final frame.",
      primaryCta: "Book Consultation",
      secondaryCta: "See Capabilities",
      secondaryHref: "#services",
      stats: sharedStats,
    },
  },
  gallery: {
    key: "gallery",
    path: "/gallery",
    title: "Wedding & Commercial Photography Gallery | Parekh Productions",
    description:
      "View selected wedding films, commercial campaigns, corporate event coverage, brand reveals and cinematic photography produced by Parekh Productions across Mumbai and India.",
    h1: "Wedding & Commercial Production Gallery",
    hero: {
      eyebrow: "Selected work · Frames · Films",
      title: "The Frame, Kept Alive.",
      body:
        "A visual selection of celebrations, campaigns, stages and stories captured by our wedding and commercial production crews.",
      primaryCta: "Get Quote",
      secondaryCta: "View Archive",
      secondaryHref: "/gallery",
      stats: sharedStats,
    },
  },
  contact: {
    key: "contact",
    path: "/contact",
    title: "Contact Parekh Productions | Mumbai Videography & Photography House",
    description:
      "Contact Parekh Productions for wedding films, commercial photography, TVC/DVC production, event coverage and drone cinematography in Mumbai (Kandivali West) and Pan-India.",
    h1: "Contact Parekh Productions",
    hero: {
      eyebrow: "Kandivali, Western Mumbai · Pan-India · London / UK",
      title: "Have A Shoot In Mind? Let's Talk.",
      body:
        "Tell us what you are planning and our senior production desk will connect directly within 30 minutes to review your requirements.",
      primaryCta: "Instant WhatsApp",
      secondaryCta: "Contact Details",
      secondaryHref: "#contact",
      stats: sharedStats,
    },
  },
};

export const staticRoutes = Object.values(pageContent).map(({ key, path }) => ({ key, path }));
