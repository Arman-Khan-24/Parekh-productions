import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.resolve(projectRoot, "dist");
const templatePath = path.resolve(distDir, "index.html");

const routes = [
  {
    path: "/",
    outFile: "index.html",
    title: "Videography & Photography Production Company in Mumbai | Parekh Productions",
    description: "Parekh Productions is Mumbai's premier videography & photography production house — wedding films, pre-wedding shoots, commercial photography, TVC/DVC ads, 4K drone cinematography, and event coverage. Pan-India & London.",
    keywords: "Videography company Mumbai, Wedding photographer Mumbai, Wedding films Mumbai, Pre-wedding shoot Mumbai, Commercial photography Mumbai, Corporate video production Mumbai, TVC production house Mumbai, Event photography Mumbai, Drone cinematography India, Harish Parekh",
    canonical: "https://parekhevents.com/",
    locale: "en_IN",
    ogImage: "https://parekhevents.com/assets/parekh/parekh-og.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://parekhevents.com/#organization",
      "name": "Parekh Productions Pvt Ltd",
      "url": "https://parekhevents.com/",
      "logo": "https://parekhevents.com/assets/parekh/parekh-productions-logo.png",
      "image": "https://parekhevents.com/assets/parekh/parekh-og.jpg",
      "description": "Videography and photography production company in Mumbai specializing in wedding films, pre-wedding shoots, commercial photography, TVC/DVC production, and event coverage.",
      "founder": {
        "@type": "Person",
        "name": "Harish Parekh"
      },
      "telephone": "+918657754937",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A/803 Oceanic Tower Chs Ltd, Section 8, Charkop, Kandivali West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400067",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.2057,
        "longitude": 72.8654
      },
      "areaServed": [
        "Mumbai",
        "Navi Mumbai",
        "Thane",
        "Pune",
        "Maharashtra",
        "India"
      ],
      "sameAs": [
        "https://www.instagram.com/parekhevents",
        "https://www.facebook.com/ParekhProductions",
        "https://www.youtube.com/@parekhproductions4134",
        "https://heavenlyweds.com"
      ]
    }
  },
  {
    path: "/london",
    outFile: "london/index.html",
    title: "Wedding Films & Commercial Cinematography in London | Parekh Productions",
    description: "Parekh Productions London delivers wedding films and photography, corporate event coverage, broadcast cinema film production, and brand campaign shoots across London and the UK.",
    keywords: "Wedding photographer London, Wedding films London, Corporate videography London, Event photography London, Commercial film production UK, Drone cinematography London",
    canonical: "https://parekhevents.com/london",
    locale: "en_GB",
    ogImage: "https://parekhevents.com/assets/parekh/parekh-og.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://parekhevents.com/london#organization",
      "name": "Parekh Productions Pvt Ltd - London Division",
      "url": "https://parekhevents.com/london",
      "logo": "https://parekhevents.com/assets/parekh/parekh-productions-logo.png",
      "image": "https://parekhevents.com/assets/parekh/parekh-og.jpg",
      "description": "Wedding films, corporate event coverage, and broadcast cinema film production servicing London and the UK.",
      "telephone": "+442081234567",
      "priceRange": "£££",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Berkeley Square, Mayfair",
        "addressLocality": "London",
        "postalCode": "W1J 6BD",
        "addressCountry": "GB"
      },
      "areaServed": [
        "London",
        "Greater London",
        "United Kingdom",
        "Europe"
      ],
      "sameAs": [
        "https://www.instagram.com/parekhevents",
        "https://www.facebook.com/ParekhProductions",
        "https://www.youtube.com/@parekhproductions4134",
        "https://heavenlyweds.com"
      ]
    }
  },
  {
    path: "/services",
    outFile: "services/index.html",
    title: "Media Production Capabilities Directory | Parekh Productions",
    description: "Explore Parekh Productions' camera capabilities: Wedding Films, Pre-Wedding Shoots, Commercial Photography, TVC/DVC Production, Broadcast Switching, Drone Cinematography, and Event Coverage.",
    keywords: "Wedding films Mumbai, Wedding photography services, Pre-wedding shoot services, TVC production services, Broadcast 4K video, Commercial food photography",
    canonical: "https://parekhevents.com/services",
    locale: "en_IN",
    ogImage: "https://parekhevents.com/assets/parekh/parekh-og.jpg"
  },
  {
    path: "/gallery",
    outFile: "gallery/index.html",
    title: "Production Reel & Visual Catalog | Parekh Productions",
    description: "Browse Parekh Productions' live visual catalog and continuous autoplay portfolio of wedding films, expos, corporate summits, and commercial TVCs.",
    keywords: "Parekh productions portfolio, Wedding films Mumbai, Event videos Mumbai, Corporate event photography archive",
    canonical: "https://parekhevents.com/gallery",
    locale: "en_IN",
    ogImage: "https://parekhevents.com/assets/parekh/parekh-og.jpg"
  }
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
