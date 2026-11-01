// Keyword landing page — rendered for the 5 deep SEO slugs (SSR-prerendered).
// Pulls every string from pages.js pageContent[key] so copy and meta stay in lockstep.

import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Camera, Film, MapPin, Sparkles } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { QuoteModal } from "../components/QuoteModal";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteContent } from "../data/siteContent";
import { pageContent } from "../data/pages";

const SIBLING_LINKS = [
  { key: "corporateEvents", label: "Event Photography & Videography" },
  { key: "filmProduction", label: "Commercial Film Production" },
  { key: "photography", label: "Corporate Photography" },
  { key: "videography", label: "Corporate Video Production" },
  { key: "services", label: "Services Directory" },
  { key: "gallery", label: "Gallery" },
];

export function SEOPage({ page, onNavigate }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const handleQuote = () => setQuoteOpen(true);
  const siblings = SIBLING_LINKS.filter((s) => s.key !== page.key);

  const serviceIcon = (i) => (i === 1 ? Camera : i === 2 ? Film : Sparkles);

  return (
    <div className="min-h-screen w-full bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar currentLocation="mumbai" onContactClick={handleQuote} onGalleryClick={() => onNavigate("/gallery")} onNavigate={onNavigate} />

      {/* Back link */}
      <div className="pt-20 sm:pt-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/");
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-black bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-full transition-colors cursor-pointer no-underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </a>
      </div>

      {/* Hero */}
      <header className="px-6 sm:px-12 max-w-7xl mx-auto pt-8 pb-12 sm:pb-16">
        <p className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-red-600 mb-4">
          {page.hero.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[1.05] max-w-4xl">
          {page.h1}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
          {page.hero.body}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={handleQuote}
            className="btn-satisfying-cta px-8 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest cursor-pointer text-center"
          >
            {page.hero.primaryCta} &rarr;
          </button>
          {page.hero.secondaryHref && (
            <a
              href={page.hero.secondaryHref}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(page.hero.secondaryHref.startsWith("/") ? page.hero.secondaryHref : "/");
              }}
              className="px-6 py-3.5 rounded-full bg-white/10 text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-100 transition-colors cursor-pointer text-center flex items-center justify-center gap-2 border border-neutral-200 no-underline"
            >
              {page.hero.secondaryCta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {page.hero.stats && (
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-neutral-100 pt-6 max-w-xl">
            {page.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900">{s.value}</div>
                <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Services pillars */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteContent.services.map((service, i) => {
            const Icon = serviceIcon(i);
            return (
              <div key={service.id} className="p-6 sm:p-8 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-mono font-bold text-neutral-400">{service.number}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-neutral-900 tracking-tight">{service.title}</h2>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{service.shortDesc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Internal link mesh */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl border border-neutral-200 bg-white">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-4">
            Explore the Production House:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {siblings.map((s) => (
              <a
                key={s.key}
                href={pageContent[s.key].path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(pageContent[s.key].path);
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-xs font-bold uppercase tracking-wider text-neutral-800 px-4 py-2 transition-colors no-underline cursor-pointer"
              >
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-16">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">Selected Frames</h2>
          <a
            href="/gallery"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("/gallery");
            }}
            className="text-xs font-bold uppercase tracking-wider text-red-600 hover:underline no-underline cursor-pointer"
          >
            Open Full Gallery
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteContent.galleryPreview
            .filter((g) => g.type === "image")
            .slice(0, 4)
            .map((g) => (
              <div key={g.id} className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100 group">
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-bold leading-snug">{g.title}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Locations + Contact CTA */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
              <MapPin className="h-3.5 w-3.5 text-red-500" />
              <span>{siteContent.brand.locations}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
              Booking {siteContent.contact.phoneNumbers[0]} &middot; Mumbai HQ
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              {siteContent.contact.address} — reach the production desk on WhatsApp inside 30 minutes.
            </p>
          </div>
          <button
            onClick={handleQuote}
            className="btn-satisfying-cta shrink-0 px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest cursor-pointer text-center"
          >
            Get Instant Quote &rarr;
          </button>
        </div>
      </section>

      <Footer onQuoteClick={handleQuote} onGalleryClick={() => onNavigate("/gallery")} />
      <WhatsAppButton />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
