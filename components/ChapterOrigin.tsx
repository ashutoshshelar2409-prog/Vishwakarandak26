import Link from "next/link";
import { ArrowRight, Infinity as InfinityIcon, Sparkles } from "lucide-react";

export default function ChapterOrigin() {
  return (
    <section
      id="origin"
      aria-label="Chapter 01: The Origin"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Halftone texture */}
      <div className="halftone-dots absolute inset-0 opacity-30 pointer-events-none" />

      {/* Chapter Marker Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-marvel px-2.5 py-1 font-display text-lg tracking-widest text-white font-bold">
            CHAPTER 01
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/80">
            THE ORIGIN PROTOCOL
          </span>
        </div>
        <div className="text-right">
          <span className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            FILE ARCHIVE // 2026.11
          </span>
        </div>
      </div>

      {/* Main Asymmetric Split Panel Layout */}
      <div className="relative z-10 mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
        {/* Left Column: Dramatic Visual Composition (Tier 3 Original Infinity Geometry) */}
        <div className="lg:col-span-5 relative">
          <div className="comic-panel relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 text-center sm:p-10">
            {/* Halftone Overlay */}
            <div className="halftone-red absolute inset-0 opacity-40 pointer-events-none" />
            <div className="comic-speed-lines absolute inset-0 opacity-20 pointer-events-none" />

            {/* Infinity Symbol Vector Graphic */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 flex items-center justify-center">
                {/* Rotating Rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-gold/40 animate-portal-slow" />
                <div className="absolute inset-3 rounded-full border border-marvel/50 animate-portal-reverse" />
                
                {/* Central Glowing Infinity Knot */}
                <InfinityIcon className="h-28 w-28 text-white drop-shadow-[0_0_25px_rgba(230,36,41,0.8)]" />

                {/* Corner Badge */}
                <div className="absolute -bottom-2 -right-2 border border-black bg-gold px-2 py-0.5 text-[10px] font-display uppercase tracking-widest text-black font-bold">
                  APEX VECTOR
                </div>
              </div>
            </div>

            {/* Editorial Caption Box */}
            <div className="border-t border-white/15 pt-4 text-left">
              <span className="text-[11px] uppercase tracking-[0.25em] text-marvel font-bold">
                CORE MANIFESTO
              </span>
              <p className="mt-1 text-sm text-white/70 italic">
                &ldquo;Before the houses assemble, the timeline must converge. Every discipline at VIT Pune represents an alternate world of raw potential.&rdquo;
              </p>
            </div>
          </div>

          {/* Floated Comic Annotation */}
          <div className="absolute -bottom-5 -left-4 hidden sm:block border-2 border-white bg-marvel px-4 py-1.5 shadow-[4px_4px_0_0_#000] transform -rotate-3">
            <span className="font-display text-sm tracking-widest text-white">
              7 HOUSES · 1 UNIVERSE
            </span>
          </div>
        </div>

        {/* Right Column: Large Editorial Type & Thematic Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold" />
            THE MULTIVERSAL AWAKENING
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-wide text-white">
            When Worlds Collide, <br />
            <span className="text-stroke-white">Legends Take</span> The Lead.
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg text-white/80 leading-relaxed">
            <p>
              Vishwakarandak is not just an annual festival—it is the flagship battleground of{" "}
              <strong className="text-white font-semibold">Vishwakarma Institute of Technology, Pune</strong>.
              For decades, student departments have marched under distinct flags, competing in high-stakes
              hackathons, athletic duels, theatrical stages, and musical showdowns.
            </p>
            <p>
              In <strong className="text-gold">2026</strong>, that rivalry enters the multiversal realm:{" "}
              <strong className="text-marvel">APEX OF INFINITY</strong>. Inspired by the mythos of interconnected
              realms and unstoppable team-ups, every student engineer sheds the routine of lectures to step
              forward as a contender in the ultimate collegiate crucible.
            </p>
          </div>

          {/* Quick Statistic Metric Panels */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="border border-white/20 bg-zinc-950/80 p-4 text-left">
              <span className="font-display text-4xl sm:text-5xl text-marvel">07</span>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Houses Competing</p>
            </div>
            <div className="border border-white/20 bg-zinc-950/80 p-4 text-left">
              <span className="font-display text-4xl sm:text-5xl text-gold">40+</span>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Collegiate Events</p>
            </div>
            <div className="col-span-2 sm:col-span-1 border border-white/20 bg-zinc-950/80 p-4 text-left">
              <span className="font-display text-4xl sm:text-5xl text-portal-cyan">4,000+</span>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Engineers Assembled</p>
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-8">
            <Link
              href="#multiverse"
              className="inline-flex items-center gap-2 font-display text-xl tracking-widest text-white hover:text-gold transition-colors group"
            >
              <span>INSPECT THE SEVEN REALMS</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 text-marvel" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
