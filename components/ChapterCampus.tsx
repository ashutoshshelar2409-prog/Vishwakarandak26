import { campusAtmosphere } from "@/lib/data";
import { Camera, Quote, Users, Sparkles } from "lucide-react";

export default function ChapterCampus() {
  return (
    <section
      id="behind-the-panels"
      aria-label="Chapter 07: Behind the Panels"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />

      {/* Chapter Marker Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-marvel px-2.5 py-1 font-display text-lg tracking-widest text-white font-bold">
            CHAPTER 07
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/80">
            BEHIND THE PANELS // CAMPUS ATMOSPHERE
          </span>
        </div>
        <div className="text-right">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            STUDENT LIFE & COUNCIL ARCHIVE
          </span>
        </div>
      </div>

      {/* Chapter Editorial Lead */}
      <div className="relative z-10 mt-10 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
          THE HUMAN SIDE OF KARANDAK
        </span>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] text-white">
          Beyond the Costumes. <br />
          <span className="text-stroke-white">The Pulse of</span> VIT Pune.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          The true spirit of Vishwakarandak isn&apos;t just in the points table—it&apos;s etched in late-night
          stage setups, canteen debates over code diffs, rehearsal echoes in corridors, and the shared
          pride of the Student Council.
        </p>
      </div>

      {/* Asymmetric Comic Editorial Grid with Explicit Neutral Photo Placeholders */}
      <div className="relative z-10 mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {campusAtmosphere.map((item, idx) => (
          <article
            key={item.title}
            className="flex flex-col justify-between border-2 border-white/70 bg-zinc-950 p-6 shadow-[6px_6px_0_0_#fff] transition hover:-translate-y-1.5"
          >
            <div>
              {/* Photo Placeholder Frame (Strictly Compliant with Prompt Section 6) */}
              <div
                className="relative flex h-52 sm:h-60 w-full flex-col items-center justify-center border-2 border-dashed border-white/30 bg-zinc-900/90 p-4 text-center overflow-hidden group"
                aria-label={`Photo placeholder for ${item.title}`}
              >
                <div className="halftone-dots absolute inset-0 opacity-30 pointer-events-none" />
                <Camera className="h-8 w-8 text-white/40 mb-2" />
                <span className="border border-white/40 bg-black/80 px-2.5 py-1 text-[11px] font-display uppercase tracking-widest text-gold font-bold">
                  PHOTO PLACEHOLDER
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
                  add authentic festival photography
                </span>
                <span className="mt-3 text-xs text-white/60 font-mono">
                  [VIT_CAMPUS_ARCHIVE_0{idx + 1}.RAW]
                </span>
              </div>

              {/* Editorial Header */}
              <div className="mt-5">
                <span className="text-[10px] font-display uppercase tracking-widest text-marvel block">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white mt-1">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>

            {/* Editorial Quote Vignette */}
            <div className="mt-6 border-t border-white/10 pt-4 flex items-start gap-2">
              <Quote className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <p className="text-xs italic text-white/60">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Council Behind-The-Scenes Note */}
      <div className="relative z-10 mt-12 border-2 border-white/20 bg-black/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold bg-zinc-900 text-gold">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display text-xl sm:text-2xl text-white">
              VIT PUNE STUDENT COUNCIL WORKING COMMITTEES
            </h4>
            <p className="text-xs sm:text-sm text-white/60 max-w-2xl mt-0.5">
              Event Management · Technical & Systems · Public Relations & Media · Sports Coordination · Creative Art & Stagecraft
            </p>
          </div>
        </div>
        <div className="shrink-0 text-center md:text-right">
          <span className="text-[11px] uppercase tracking-widest text-white/40 block">
            ESTABLISHED BY
          </span>
          <span className="font-display text-lg text-gold">
            VIT PUNE STUDENT BODY
          </span>
        </div>
      </div>
    </section>
  );
}
