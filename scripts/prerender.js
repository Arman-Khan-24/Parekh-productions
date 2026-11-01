import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";
import { metaByPath } from "../src/data/pages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.resolve(projectRoot, "dist");
const templatePath = path.resolve(distDir, "index.html");

const BASE_URL = "https://parekhevents.com";
const canonical = (p) => `${BASE_URL}${p}`;
const M = (p) => metaByPath[p];

// Shared building blocks for per-route structured data
const orgRef = { "@id": `${BASE_URL}/#organization` };
const buzz = `${BASE_URL}/assets/parekh/parekh-og.jpg`;

const breadcrumbSchema = (path, name) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: canonical(path) },
  ],
});

const webPageSchema = (path, name, description) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${canonical(path)}#page`,
  url: canonical(path),
  name,
  description,
  isPartOf: { "@id": `${BASE_URL}/#website` },
  ...(path === "/gallery"
    ? { "@type": "CollectionPage" }
    : {}),
});

const routes = [
  {
    path: "/",
    outFile: "index.html",
    title: M("/").title,
    description: M("/").description,
    keywords: M("/").keywords,
    canonical: canonical("/"),
    locale: "en_IN",
    ogImage: buzz,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#organization`,
          name: "Parekh Productions Pvt Ltd",
          url: `${BASE_URL}/`,
          logo: `${BASE_URL}/assets/parekh/parekh-productions-logo.png`,
          image: buzz,
          description:
            "Videography and photography production company in Mumbai specializing in wedding films, pre-wedding shoots, commercial photography, TVC/DVC production, and event coverage.",
          founder: { "@type": "Person", name: "Harish Parekh" },
          foundingDate: "2021",
          telephone: "+918657754937",
          email: "parekhhevents@gmail.com",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "A/803 Oceanic Tower Chs Ltd, Section 8, Charkop, Kandivali West",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400067",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 19.2057, longitude: 72.8654 },
          areaServed: ["Mumbai", "Navi Mumbai", "Thane", "Pune", "Maharashtra", "India"],
          sameAs: [
            "https://www.instagram.com/parekhevents",
            "https://www.facebook.com/ParekhProductions",
            "https://www.youtube.com/@parekhproductions4134",
            "https://heavenlyweds.com",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          url: `${BASE_URL}/`,
          name: "Parekh Productions",
          publisher: { "@id": `${BASE_URL}/#organization` },
          inLanguage: "en-IN",
        },
        {
          "@type": "Service",
          serviceType: "Videography & Photography Production",
          provider: orgRef,
          areaServed: { "@type": "AdministrativeArea", name: "Mumbai, Maharashtra, India" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Production Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Films & Photography in Mumbai" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Wedding & Bridal Shoots" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Video Production & TVC/DVC Films" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event & Corporate Photography in Mumbai" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "4K Aerial Drone Cinematography" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Camera Live Broadcast & Switching" } },
            ],
          },
        },
        {
          "@type": "VideoObject",
          name: "Finbridge Expo Mumbai 2026 — Official Highlight Film",
          description:
            "Live multi-camera broadcast and expo floor film at NESCO Mumbai for 8,000+ delegates.",
          thumbnailUrl: `${BASE_URL}/assets/parekh/portfolio/finbridge-stage.jpg`,
          uploadDate: "2026-02-14",
          contentUrl: `${BASE_URL}/assets/parekh/finbridge-2026-max-quality.mp4`,
          isFamilyFriendly: true,
        },
        {
          "@type": "VideoObject",
          name: "Auto Expo Pavilion — Launch Reveal Film",
          description:
            "Synchronized launch-reveal cinematography and FPV drone capture across pavilion floors.",
          thumbnailUrl: `${BASE_URL}/assets/parekh/client_media/stage-lighting.jpg`,
          uploadDate: "2026-01-20",
          contentUrl: `${BASE_URL}/assets/parekh/autoexpo-max-quality.mp4`,
          isFamilyFriendly: true,
        },
      ],
    },
  },
  {
    path: "/london",
    outFile: "london/index.html",
    title: M("/london").title,
    description: M("/london").description,
    keywords: M("/london").keywords,
    canonical: canonical("/london"),
    locale: "en_GB",
    ogImage: buzz,
    schema: {
      "@context": "https://schema.org",
      // Service-area business desk: no fabricated UK street address or phone line
      "@type": "LocalBusiness",
      "@id": `${canonical("/london")}#organization`,
      name: "Parekh Productions Pvt Ltd — London & UK Desk",
      url: canonical("/london"),
      logo: `${BASE_URL}/assets/parekh/parekh-productions-logo.png`,
      image: buzz,
      description:
        "Wedding films, corporate event coverage, and broadcast cinema film production servicing London and the UK, coordinated by the Mumbai production house.",
      priceRange: "£££",
      areaServed: [
        "London",
        "Greater London",
        "United Kingdom",
        "Europe",
      ],
      sameAs: [
        "https://www.instagram.com/parekhevents",
        "https://www.facebook.com/ParekhProductions",
        "https://www.youtube.com/@parekhproductions4134",
        "https://heavenlyweds.com",
      ],
    },
  },
  {
    path: "/services",
    outFile: "services/index.html",
    title: M("/services").title,
    description: M("/services").description,
    keywords: M("/services").keywords,
    canonical: canonical("/services"),
    locale: "en_IN",
    ogImage: buzz,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        webPageSchema("/services", "Media Production Services in Mumbai", M("/services").description),
        breadcrumbSchema("/services", "Services Directory"),
      ],
    },
  },
  {
    path: "/gallery",
    outFile: "gallery/index.html",
    title: M("/gallery").title,
    description: M("/gallery").description,
    keywords: M("/gallery").keywords,
    canonical: canonical("/gallery"),
    locale: "en_IN",
    ogImage: buzz,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        webPageSchema("/gallery", "Wedding & Commercial Photography Gallery", M("/gallery").description),
        breadcrumbSchema("/gallery", "Gallery"),
      ],
    },
  },
  ...["/corporate-events-mumbai", "/commercial-film-production-mumbai", "/corporate-photography-mumbai", "/corporate-video-production-mumbai", "/contact"].map((p) => ({
    path: p,
    outFile: `${p.replace(/^\//, "")}/index.html`,
    title: M(p).title,
    description: M(p).description,
    keywords: M(p).keywords,
    canonical: canonical(p),
    locale: "en_IN",
    ogImage: buzz,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        webPageSchema(p, M(p).title.split("|")[0].trim(), M(p).description),
        breadcrumbSchema(p, M(p).title.split("|")[0].trim()),
      ],
    },
  })),
];

function injectRouteHead(html, route) {
  if (route.title) {
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  }

  if (route.description) {
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );
  }

  if (route.keywords) {
    html = html.replace(
      /<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="keywords" content="${route.keywords}" />`
    );
  }

  if (route.canonical) {
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:url" content="${route.canonical}" />`
    );
  }

  if (route.title) {
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
  }

  if (route.description) {
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );
  }

  if (route.locale) {
    html = html.replace(
      /<meta\s+property=["']og:locale["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:locale" content="${route.locale}" />`
    );
  }

  const hreflangTags = `
    <link rel="alternate" hreflang="en-IN" href="https://parekhevents.com/" />
    <link rel="alternate" hreflang="en-GB" href="https://parekhevents.com/london" />
    <link rel="alternate" hreflang="x-default" href="https://parekhevents.com/" />`;
  
  if (!html.includes('hreflang="en-IN"')) {
    html = html.replace('</head>', `${hreflangTags}\n</head>`);
  }

  if (route.schema) {
    const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n</script>`;
    if (html.includes('type="application/ld+json"')) {
      html = html.replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i, schemaScript);
    } else {
      html = html.replace('</head>', `${schemaScript}\n</head>`);
    }
  }

  html = html.replace(/&amp;amp;/g, '&amp;');
  return html;
}

async function prerender() {
  console.log("🚀 Starting Native Vite SSR Prerender (100% Linux/Vercel Compatible)...");

  // Step 1: Build the SSR bundle in memory/dist-server
  const serverDistDir = path.resolve(projectRoot, "dist-server");
  await build({
    root: projectRoot,
    build: {
      ssr: path.resolve(projectRoot, "src/entry-server.jsx"),
      outDir: serverDistDir,
      emptyOutDir: true,
    },
    configFile: path.resolve(projectRoot, "vite.config.js"),
  });

  // Step 2: Import the compiled server render function
  const serverBundlePath = path.resolve(serverDistDir, "entry-server.js");
  const { render } = await import(`file://${serverBundlePath}`);

  // Step 3: Read built client index.html template
  const rawTemplate = fs.readFileSync(templatePath, "utf8");

  // Step 4: Prerender each route directly to static HTML
  for (const route of routes) {
    console.log(`🌐 Prerendering route: ${route.path} -> dist/${route.outFile}`);
    
    // Render full React component tree to string
    const appHtml = render(route.path);

    // Inject rendered HTML into <div id="root">
    let renderedDoc = rawTemplate.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Inject route-specific meta tags, canonicals, hreflang, and schema
    renderedDoc = injectRouteHead(renderedDoc, route);

    const outPath = path.resolve(distDir, route.outFile);
    const outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(outPath, renderedDoc, "utf8");
    console.log(`✅ Successfully wrote prerendered HTML: ${outPath} (${(renderedDoc.length / 1024).toFixed(1)} KB)`);
  }

  // Clean up temporary server bundle
  try {
    fs.rmSync(serverDistDir, { recursive: true, force: true });
  } catch (cleanErr) {
    // Ignore Windows filesystem file-lock on OneDrive folders
  }
  console.log("🎉 Native prerendering complete! 100% Vercel & SEO compliant.");
}

prerender().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
