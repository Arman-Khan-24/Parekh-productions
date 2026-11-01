export function HeroVideo({ locationMode = "mumbai" }) {
  const isUK = locationMode === "london" || locationMode === "uk";

  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-center justify-center">

      {/* Edge-to-Edge Full-Screen Background Video Loop (Always Muted, Smooth Playback) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/parekh/client_media/stage-lighting.jpg"
        className="absolute inset-0 h-full w-full object-cover scale-[1.01]"
      >
        <source src="/assets/parekh/finbridge-2026-max-quality.mp4" type="video/mp4" />
        <source src="/assets/parekh/hero-showreel.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/40 pointer-events-none" />

      {/* Centered Monumental Typography */}
      <div className="relative z-10 w-full px-6 sm:px-12 text-center flex flex-col items-center justify-center">
        <p className="mt-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-red-400 font-bold mb-4">
          {isUK ? "LONDON DIVISION · UK & EUROPE" : "MUMBAI · PAN-INDIA · FILM DIVISION"}
        </p>
      <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[106px] font-black tracking-tight uppercase text-white drop-shadow-2xl leading-[1.02] max-w-5xl">
          WE SHOOT THE STORY
        </h1>
        <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.28em] text-neutral-300 font-bold">
          {isUK
            ? "WEDDING FILMS · COMMERCIALS · BRAND COVERAGE · LONDON & UK"
            : "WEDDING FILMS · COMMERCIALS · EVENT COVERAGE · MUMBAI"}
        </p>
      </div>

    </section>
  );
}
