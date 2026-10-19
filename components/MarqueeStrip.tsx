import { houses } from "@/lib/data";

export default function MarqueeStrip() {
  return (
    <div
      aria-label="House ticker"
      className="relative z-20 -rotate-1 overflow-hidden border-y-2 border-white bg-marvel py-2.5 shadow-[0_4px_20px_rgba(230,36,41,0.5)]"
    >
      <div className="comic-speed-lines absolute inset-0 opacity-20 pointer-events-none" />
      <div className="animate-marquee-slow flex w-max gap-8 whitespace-nowrap font-display text-2xl sm:text-3xl tracking-widest text-white select-none">
        {[...houses, ...houses, ...houses].map((h, i) => (
          <span key={`${h.slug}-${i}`} className="inline-flex items-center gap-3">
            <span className="font-bold">{h.name.toUpperCase()}</span>
            <span className="text-black font-extrabold text-xl">★</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-sans">
              [{h.comicTitle}]
            </span>
            <span className="text-gold font-bold text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
