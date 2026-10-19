import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Shield, Sparkles, Trophy } from "lucide-react";

export default function ChapterFinale() {
  return (
    <section
      id="final-issue"
      aria-label="Chapter 09: The Final Issue"
      className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="halftone-dots absolute inset-0 opacity-25 pointer-events-none" />
      <div className="comic-speed-lines absolute inset-0 opacity-15 pointer-events-none" />

      {/* Main Final Issue Comic Spread Container */}
      <div className="comic-panel relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-8 sm:p-14 lg:p-20 text-center border-4 border-white shadow-[12px_12px_0_0_var(--marvel)]">
        {/* Halftone & Vignette Background */}
        <div className="halftone-red absolute inset-0 opacity-30 pointer-events-none" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,36,41,0.25)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Comic Book End Plate */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
          <span className="issue-badge">
            CHAPTER 09 · FINAL PANEL
          </span>
          <span className="comic-stamp">
            THE APEX AWAITS
          </span>
        </div>

        {/* Council Emblem Lockup */}
        <div className="relative z-10 mx-auto mt-8 h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-gold bg-black/90 p-1 shadow-[0_0_30px_rgba(250,204,21,0.4)]">
          <Image
            src="/images/council-logo.png"
            alt="Student Council VIT Pune Official Seal"
            width={96}
            height={96}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Finale Headline */}
        <div className="relative z-10 mt-8 max-w-4xl mx-auto">
          <p className="font-display text-base sm:text-xl uppercase tracking-[0.4em] text-white/70">
            THE STAGE IS SET · THE TIMELINE AWAITS
          </p>

          <h2 className="mt-3 font-display text-5xl sm:text-7xl lg:text-9xl leading-[0.85] text-white">
            WHATEVER IT TAKES. <br />
            <span className="text-marvel">1 · 11 · 2026</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            From the quiet drafting halls to the thunderous roar of the amphitheatre, Vishwakarandak
            2026 is where ordinary students script extraordinary lore.
          </p>
        </div>

        {/* Comic "To Be Continued" Stamp Box */}
        <div className="relative z-10 mt-10 inline-block border-2 border-white bg-marvel px-6 py-2 shadow-[4px_4px_0_0_#000] transform -rotate-1">
          <p className="font-display text-xl sm:text-2xl tracking-widest text-white">
            ★ TO BE CONTINUED ON THE TURF & STAGE ★
          </p>
        </div>

        {/* Bottom Dual Action Links */}
        <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#events"
            className="comic-panel-gold flex items-center gap-2 bg-white px-8 py-3.5 font-display text-xl sm:text-2xl tracking-widest text-black hover:bg-gold transition-colors"
          >
            <Shield className="h-5 w-5 text-marvel" />
            <span>EXPLORE EVENT ROSTER</span>
          </Link>

          <Link
            href="/scoreboard"
            className="comic-panel flex items-center gap-2 bg-zinc-950 px-8 py-3.5 font-display text-xl sm:text-2xl tracking-widest text-white hover:bg-marvel transition-colors"
          >
            <Trophy className="h-5 w-5 text-gold" />
            <span>INTER-HOUSE SCOREBOARD</span>
          </Link>
        </div>

        {/* Official Attribution */}
        <div className="relative z-10 mt-12 border-t border-white/15 pt-6 text-xs text-white/50 tracking-wider">
          <p>
            CONCEIVED & DIRECTED FOR THE STUDENTS OF VISHWAKARMA INSTITUTE OF TECHNOLOGY, PUNE
          </p>
        </div>
      </div>
    </section>
  );
}
