import { pillars } from "@/lib/data";
import { Cpu, Trophy, Sparkles, Palette, ShieldAlert } from "lucide-react";

const iconMap = {
  Cpu: Cpu,
  Trophy: Trophy,
  Sparkles: Sparkles,
  Palette: Palette,
};

export default function ChapterAssembly() {
  return (
    <section
      id="assembly"
      aria-label="Chapter 03: The Assembly"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="halftone-dots absolute inset-0 opacity-25 pointer-events-none" />

      {/* Chapter Marker Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-marvel px-2.5 py-1 font-display text-lg tracking-widest text-white font-bold">
            CHAPTER 03
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/80">
            THE ASSEMBLY OF DISCIPLINES
          </span>
        </div>
        <div className="text-right">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            VERIFIED PILLARS // VIT PUNE
          </span>
        </div>
      </div>

      {/* Section Introduction */}
      <div className="relative z-10 mt-10 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-marvel font-bold mb-2 block">
          ONE FESTIVAL · INFINITE CHANNELS
        </span>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] text-white">
          Many Identities. <br />
          <span className="text-stroke-white">One Unstoppable</span> Assembly.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          Vishwakarandak channels the energy of over 4,000 engineers across four verified pillars of
          excellence. Here, MCU lore remains a thematic catalyst—the real heroes are the students on stage,
          in the labs, and across the turf.
        </p>
      </div>

      {/* Comic Panels Grid for 4 Pillars */}
      <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, idx) => {
          const IconComponent = iconMap[p.icon as keyof typeof iconMap] || Sparkles;
          return (
            <article
              key={p.title}
              className="group relative flex flex-col justify-between border-2 border-white/80 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: `6px 6px 0 0 ${p.accent}`,
              }}
            >
              {/* Halftone & Background Detail */}
              <div className="halftone-dots absolute inset-0 opacity-30 pointer-events-none" />

              <div>
                {/* Sector Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-display text-sm tracking-widest text-white/50">
                    PILLAR 0{idx + 1}
                  </span>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white"
                    style={{ backgroundColor: `${p.accent}22`, color: p.accent }}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-display uppercase tracking-widest text-gold block">
                    {p.code}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-white mt-1 group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Rulebook Note */}
              <div className="mt-8 border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-widest text-white/40 block">
                  SCORING IMPACT:
                </span>
                <p className="text-xs font-semibold text-white/90 mt-0.5">
                  1st: 100 Pts · 2nd: 60 Pts · 3rd: 30 Pts
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Assembly Banner Banner Note */}
      <div className="relative z-10 mt-12 border-2 border-dashed border-white/20 bg-zinc-900/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-marvel font-display text-2xl text-white font-bold">
            !
          </div>
          <div>
            <h4 className="font-display text-2xl tracking-wide text-white">
              THE RULEBOOK OF HONOR & INTEGRITY
            </h4>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl mt-1">
              All competitions adhere to strict Student Council guidelines. Inter-departmental conduct,
              fair play, and zero-ragging protocols govern every single clash.
            </p>
          </div>
        </div>

        <a
          href="#events"
          className="shrink-0 comic-panel bg-gold px-6 py-2.5 font-display text-lg tracking-widest text-black hover:bg-white transition-colors"
        >
          VIEW PROTOCOLS →
        </a>
      </div>
    </section>
  );
}
