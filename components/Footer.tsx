import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-white/15 bg-black py-16 text-white overflow-hidden">
      <div className="halftone-dots absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-start">
          {/* Column 1: Council Emblem & Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gold/60 bg-black p-1 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                <Image
                  src="/images/council-logo.png"
                  alt="Student Council VIT Pune"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-white block">
                  VISHWAKARANDAK &apos;26
                </span>
                <span className="text-[11px] font-display uppercase tracking-[0.25em] text-gold block">
                  APEX OF INFINITY · VIT PUNE
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              The annual inter-departmental sports, technical, and cultural festival of
              Vishwakarma Institute of Technology, Pune. Seven houses unite for the ultimate trophy.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="border border-white/20 bg-zinc-950 px-2.5 py-1 text-white/80">
                Bibwewadi, Pune 411037
              </span>
              <span className="border border-white/20 bg-zinc-950 px-2.5 py-1 text-gold">
                Maharashtra, India
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg tracking-widest text-gold uppercase mb-4 border-b border-white/10 pb-1">
              CHAPTER NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-marvel text-xs">►</span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Council Attributions & Socials */}
          <div className="md:col-span-4">
            <h4 className="font-display text-lg tracking-widest text-gold uppercase mb-4 border-b border-white/10 pb-1">
              COUNCIL DISPATCH
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Design proposal directed for the Student Council Website Team, Vishwakarma Institute of
              Technology, Pune.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://www.studentcouncilvitpune.in"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-panel inline-block bg-zinc-900 px-3 py-1 text-xs text-white hover:bg-gold hover:text-black transition-colors"
              >
                Official Council Portal ↗
              </a>
              <a
                href="https://www.instagram.com/vit_pune_official"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-panel inline-block bg-zinc-900 px-3 py-1 text-xs text-white hover:bg-marvel hover:text-white transition-colors"
              >
                VIT Official Instagram ↗
              </a>
            </div>

            <p className="mt-6 text-[11px] text-white/40">
              Council Motto: <span className="text-white/70">LEARN · EMPOWER · ACT · DEVELOP</span>
            </p>
          </div>
        </div>

        {/* Mandatory Legal & MCU IP Disclaimer */}
        <div className="mt-14 border-t border-white/15 pt-6 text-center text-xs text-white/50 space-y-2">
          <p className="max-w-3xl mx-auto leading-relaxed">
            Vishwakarandak 2026 is a student-run festival of VIT Pune. This is an unofficial concept
            inspired by the Marvel Cinematic Universe. Marvel and related characters are property of
            their respective owners.
          </p>
          <p className="text-[11px] text-white/40">
            © 2026 Student Council VIT Pune. All rights reserved. Built as a design proposal.
          </p>
        </div>
      </div>
    </footer>
  );
}
