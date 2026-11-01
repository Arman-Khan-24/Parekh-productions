export function Ticker() {
  const items = [
    "WEDDING PHOTOGRAPHY & FILMS",
    "CINEMATIC EVENT AFTERSHOWS",
    "TV COMMERCIALS & AD FILMS",
    "4K DRONE & AERIAL CINEMATOGRAPHY",
    "COMMERCIAL & FOOD PHOTOGRAPHY",
    "EXPO & SUMMIT COVERAGE",
    "SAME-NIGHT SELECTS & REELS",
    "PRE-WEDDING & BRIDAL SHOOTS",
    "MULTI-CAMERA LIVE SWITCHING",
    "CORPORATE FILMS & OTT",
    "LAUNCH REVEAL CINEMATOGRAPHY",
    "EDITORIAL PORTRAITURE",
  ];

  return (
    <div className="py-10 bg-white border-y border-neutral-100 overflow-hidden select-none w-full">
      <div className="flex w-max items-center animate-ticker whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-neutral-900">
              {item}
            </span>
            <span className="text-neutral-300 mx-4 sm:mx-6 font-mono text-xs select-none">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
