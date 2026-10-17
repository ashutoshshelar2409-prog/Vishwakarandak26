import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="halftone absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-4xl leading-none tracking-wide">
            Want more heroics from
            <span className="block text-marvel">Vishwakarandak 2026?</span>
          </p>
        </div>
        <div>
          <p className="mb-3 font-display text-xl tracking-widest text-white/60">Explore</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-marvel">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-display text-xl tracking-widest text-white/60">Follow us</p>
          <ul className="flex gap-3">
            {["Instagram", "YouTube", "LinkedIn"].map((s) => (
              <li key={s}>
                <span className="panel inline-block cursor-pointer px-3 py-1.5 text-sm transition hover:-translate-y-0.5">
                  {s}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/50">
            Website developed by the Student Council Website Team, VIT Pune.
          </p>
        </div>
      </div>
      <p className="relative border-t border-white/10 py-4 text-center text-xs text-white/40">
        Fan-made theme for a college fest. Not affiliated with Marvel. Mockup build.
      </p>
    </footer>
  );
}
