// Single source of truth for ALL route metadata (titles, descriptions, keywords).
// Consumed by: App.jsx (client-side document.title), scripts/prerender.js (static SEO HTML),
// and SEOPage.jsx (keyword landing pages).

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
      "Parekh Productions is Mumbai's premier videography and photography production house — wedding films, pre-wedding shoots, commercial photography, TVC/DVC ads, 4K drone cinematography and event coverage. Pan-India & London.",
    keywords:
      "Videography company Mumbai, Wedding photographer Mumbai, Wedding films Mumbai, Pre-wedding shoot Mumbai, Commercial photography Mumbai, Corporate video production Mumbai, TVC production house Mumbai, Event photography Mumbai, Drone cinematography India, Harish Parekh",
    h1: "Videography & Photography Production Company in Mumbai",
    hero: siteContent.hero,
  },
  london: {
    key: "london",
    path: "/london",
    title: "Wedding Films & Commercial Cinematography in London | Parekh Productions",
    description:
      "Parekh Productions London & UK desk delivers wedding films and photography, corporate event coverage, broadcast cinema film production, and brand campaign shoots across London and the UK.",
    keywords:
      "Wedding photographer London, Wedding films London, Corporate videography London, Event photography London, Commercial film production UK, Drone cinematography London",
    h1: "Wedding Films & Commercial Cinematography in London",
    hero: {
      eyebrow: "London Division · UK & Europe",
      title: "WE SHOOT THE STORY",
      body: "Wedding films and photography, corporate event coverage, broadcast cinema film production and brand campaign shoots across London and the UK — coordinated by the same in-house Mumbai crews.",
      primaryCta: "Discuss Your Brief",
      secondaryCta: "Watch Sizzle Reel",
    },
  },
  corporateEvents: {
    key: "corporateEvents",
    path: "/corporate-events-mumbai",
    title: "Event Photography & Videography Company in Mumbai | Parekh Productions",
    description:
      "Corporate event photography and videography in Mumbai. Keynote films, expo floor coverage, aftermovies, same-day press selects and executive portraits for summits, conferences and exhibitions.",
    keywords:
      "Event photography Mumbai, Event videography Mumbai, Corporate event photographer Mumbai, Expo videography India, Conference film company Mumbai, Keynote videographer Mumbai",
    h1: "Event Photography & Videography in Mumbai",
    hero: {
      eyebrow: "Keynotes · Expos · Award Nights",
      title: "Event Photography & Videography in Mumbai.",
      body:
        "From product launches and dealer meets to national expos, our camera crews capture every keynote, handshake, and reveal — with same-day selects ready for your press kits.",
      primaryCta: "Get Quote",
      secondaryCta: "Explore Case Studies",
      secondaryHref: "/gallery",
      stats: sharedStats,
    },
  },
  filmProduction: {
    key: "filmProduction",
    path: "/commercial-film-production-mumbai",
    title: "Commercial Film & Video Production Company in Mumbai | Parekh Productions",
    description:
      "Commercial film production in Mumbai. TVC/DVC brand films, launch reveal cinematography, multi-camera live switching, licensed 4K drones and OTT/web series pipelines.",
    keywords:
      "Commercial film production Mumbai, Video production company Mumbai, TVC production Mumbai, Brand film production India, Launch reveal cinematography, OTT production house Mumbai",
    h1: "Commercial Film & Video Production in Mumbai",
    hero: {
      eyebrow: "TVC/DVC · Drone Cinematography · Broadcast",
      title: "Commercial Film & Video Production in Mumbai.",
      body:
        "Multi-camera cinema setups (RED/ARRI), licensed DGCA drone pilots, launch-reveal cinematography, and broadcast-ready brand films engineered for maximum engagement.",
      primaryCta: "Get Quote",
      secondaryCta: "View Reveal Films",
      secondaryHref: "/gallery",
      stats: sharedStats,
    },
  },
  photography: {
    key: "photography",
    path: "/corporate-photography-mumbai",
    title: "Event & Corporate Photography in Mumbai | Parekh Productions",
    description:
      "Professional corporate event photography, commercial product shoots, and executive summit coverage in Mumbai with high-velocity same-day delivery.",
    keywords:
      "Corporate photography Mumbai, Event photography Mumbai, Commercial photographer Mumbai, Executive portrait photographer Mumbai, Expo photography India",
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
    keywords:
      "Corporate video production Mumbai, Videographer Mumbai, Event videography Mumbai, Corporate film maker Mumbai, Aftermovie production India",
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
    title: "Media Production Services in Mumbai | Parekh Productions",
    description:
      "Wedding films and photography, commercial shoots, TVC/DVC films, event coverage, drone cinematography, and post-production across Mumbai, Navi Mumbai, Thane, Pune, and Pan-India.",
    keywords:
      "Wedding films Mumbai, Wedding photography services, Pre-wedding shoot services, TVC production services, Broadcast 4K video, Commercial food photography",
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
    keywords:
      "Parekh Productions portfolio, Wedding films Mumbai, Commercial photography Mumbai, Event video highlights, Corporate event photography archive",
    h1: "Wedding & Commercial Production Gallery",
    hero: {
      eyebrow: "Selected work · Frames · Films",
      title: "The Frame, Kept Alive.",
      body:
        "A visual selection of celebrations, campaigns, corporate summits and stories captured by our wedding and commercial production crews.",
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
    keywords:
      "Contact wedding photographer Mumbai, Book videographer Mumbai, Wedding films enquiry, Commercial photography quote Mumbai",
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

// path → { title, description, keywords } — consumed by App.jsx and scripts/prerender.js
export const metaByPath = Object.fromEntries(
  Object.values(pageContent).map((p) => [
    p.path,
    { title: p.title, description: p.description, keywords: p.keywords },
  ])
);
