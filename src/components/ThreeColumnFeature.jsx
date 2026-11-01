import { Reveal } from "./Reveal";

export function ThreeColumnFeature() {
  return (
    <section id="services" className="py-8 sm:py-12 px-6 sm:px-12 lg:px-16 w-full max-w-[1400px] mx-auto overflow-hidden">

      {/* 3-Column Grid — minmax(0,…) tracks + min-w-0 cards so the padded center heading can never blow the grid past the viewport */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch w-full">

        {/* Left Squarish/Horizontal Card */}
        <Reveal className="min-w-0 relative aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-900 group">
          <img
            src="/assets/parekh/client_media/commercial-food-1.jpg"
            alt="Parekh Commercial Production"
            className="h-full w-full object-cover zoom-squarish"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white">
            <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">
              [COMMERCIAL & ADS]
            </span>
            <h3 className="text-lg sm:text-xl font-bold leading-tight">
              Brand & Tabletop Commercials
            </h3>
          </div>
        </Reveal>

        {/* Center Card: Pure Crisp White matching page background exactly (Zero Shadow, Zero Border) */}
        <Reveal delay={120} className="min-w-0 relative aspect-[16/10] rounded-3xl bg-white p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.08] break-words">
            WE MAKE <br />
            VIDEOS THAT <br />
            TURN HEADS
          </h2>
          <span className="mt-5 text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 font-bold break-words">
            PAREKH STUDIO · 100% IN-HOUSE CREW
          </span>
        </Reveal>

        {/* Right Squarish/Horizontal Card */}
        <Reveal delay={240} className="min-w-0 relative aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-900 group">
          <img
            src="/assets/parekh/client_media/auditorium.jpg"
            alt="Parekh Venue Cinematography"
            className="h-full w-full object-cover zoom-squarish"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white">
            <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">
              [LIVE BROADCAST & VENUE FILM]
            </span>
            <h3 className="text-lg sm:text-xl font-bold leading-tight">
              Multi-Camera Broadcast Film
            </h3>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
