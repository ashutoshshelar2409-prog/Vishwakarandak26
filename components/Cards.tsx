import type { House, TimelineItem } from "@/lib/data";

export function HouseCard({ house, index }: { house: House; index: number }) {
  return (
    <article
      data-reveal
      className="group relative flex h-[62vh] min-h-[420px] w-[78vw] shrink-0 snap-center flex-col justify-between overflow-hidden border-2 border-white/80 p-6 transition-transform duration-300 hover:-rotate-1 hover:scale-[1.02] sm:w-[340px] md:w-[360px]"
      style={{
        background: `linear-gradient(170deg, ${house.color} 0%, #0b0b0f 75%)`,
        boxShadow: `8px 8px 0 0 ${house.glow}`,
      }}
    >
      <div className="halftone absolute inset-0 opacity-60" aria-hidden />
      <span
        className="absolute -right-6 -top-10 font-display text-[16rem] leading-none text-white/10 transition-transform duration-500 group-hover:scale-110"
        aria-hidden
      >
        {house.emblem}
      </span>
      <div className="relative">
        <p className="font-display text-sm tracking-[0.3em] text-white/60">
          House {String(index + 1).padStart(2, "0")}
        </p>
        <div
          className="mt-4 flex h-20 w-20 items-center justify-center rounded-full border-4 font-display text-5xl"
          style={{ borderColor: house.glow, color: house.glow, boxShadow: `0 0 30px ${house.glow}66` }}
        >
          {house.emblem}
        </div>
      </div>
      <div className="relative">
        <h3 className="font-display text-5xl leading-[0.9] tracking-wide">{house.name}</h3>
        <p className="mt-2 text-white/75">{house.tagline}</p>
        <div className="mt-5 h-1 w-16 transition-all duration-500 group-hover:w-full" style={{ background: house.glow }} />
      </div>
    </article>
  );
}

export function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <article data-reveal className="relative flex w-[78vw] shrink-0 snap-center flex-col sm:w-[380px] md:w-[440px]">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center bg-marvel font-display text-2xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-0.5 flex-1 bg-gradient-to-r from-marvel to-transparent" />
      </div>
      <div className="panel mt-6 bg-zinc-950 p-6">
        <p className="font-display text-sm tracking-[0.3em] text-marvel">{item.phase}</p>
        <p className="mt-1 text-sm uppercase tracking-widest text-white/50">{item.date}</p>
        <h3 className="mt-3 font-display text-5xl leading-[0.9]">{item.title}</h3>
        <p className="mt-3 text-white/70">{item.description}</p>
      </div>
    </article>
  );
}

const galleryHues = ["#e62429", "#2563eb", "#7c3aed", "#ea580c", "#ca8a04", "#0891b2"];

export function GalleryCard({ title, index }: { title: string; index: number }) {
  const hue = galleryHues[index % galleryHues.length];
  return (
    <figure
      data-reveal
      className="group relative h-[50vh] min-h-[320px] w-[70vw] shrink-0 snap-center overflow-hidden border-2 border-white/80 sm:w-[300px] md:w-[340px]"
      style={{ transform: `rotate(${index % 2 ? 1.5 : -1.5}deg)` }}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        style={{ background: `radial-gradient(circle at 30% 20%, ${hue}, #050505 70%)` }}
      />
      <div className="halftone absolute inset-0" aria-hidden />
      <span className="absolute left-4 top-4 bg-black/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-white/70">
        Photo placeholder
      </span>
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-5">
        <p className="font-display text-4xl leading-none">{title}</p>
        <p className="mt-1 text-xs uppercase tracking-widest text-white/50">Karandak&apos;25 archive</p>
      </figcaption>
    </figure>
  );
}

export function RulebookCard({
  title,
  description,
  accent,
  icon,
}: {
  title: string;
  description: string;
  accent: string;
  icon: string;
}) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden border-2 border-white/80 bg-zinc-950 p-7 transition hover:-translate-y-2"
      style={{ boxShadow: `8px 8px 0 0 ${accent}` }}
    >
      <div className="halftone absolute inset-0 opacity-50" aria-hidden />
      <div
        className="relative flex h-16 w-16 items-center justify-center text-3xl"
        style={{ background: accent }}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="relative mt-6 font-display text-5xl leading-none">{title}</h3>
      <p className="relative mt-3 flex-1 text-white/70">{description}</p>
      <button
        disabled
        title="Rulebook PDF coming soon"
        className="relative mt-6 self-start border-2 border-white px-5 py-2 font-display text-lg tracking-widest opacity-90 disabled:cursor-not-allowed"
      >
        View Rulebook · Soon
      </button>
    </article>
  );
}
