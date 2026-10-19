"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "./Countdown";
import { Sparkles, Shield, ArrowDown, Compass } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Festival Hero Cover"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Comic Halftones & Textures */}
      <div className="halftone-dots absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="comic-speed-lines absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Atmospheric Cosmic Gradients */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,36,41,0.28)_0%,rgba(6,7,10,0.85)_65%,rgba(6,7,10,1)_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 1: Doctor Strange Dimensional Eldritch Portal (Original Vector) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Outer Rune Ring */}
        <div className="absolute h-[620px] w-[620px] sm:h-[750px] sm:w-[750px] lg:h-[920px] lg:w-[920px] rounded-full border border-amber-500/25 animate-portal-slow">
          <svg className="h-full w-full opacity-40 text-amber-400" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2, 4" />
            <polygon points="50,2 98,50 50,98 2,50" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1, 3" />
            <polygon points="16,16 84,16 84,84 16,84" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3, 3" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>

        {/* Inner Sparks & Ember Fiery Ring */}
        <div className="absolute h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] lg:h-[680px] lg:w-[680px] rounded-full border-2 border-dashed border-orange-500/50 shadow-[0_0_100px_rgba(249,115,22,0.45),inset_0_0_60px_rgba(234,88,12,0.3)] animate-portal-reverse" />

        {/* Central Quantum Horizon Glow */}
        <div className="absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] rounded-full bg-gradient-to-tr from-amber-600/20 via-marvel/25 to-purple-600/20 blur-3xl" />

        {/* 6 Infinity Stones Orbital Resonance Nodes */}
        <div className="absolute h-[500px] w-[500px] sm:h-[640px] sm:w-[640px] rounded-full animate-portal-slow">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-blue-400 shadow-[0_0_14px_#60a5fa]" title="Space Stone" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-red-500 shadow-[0_0_14px_#ef4444]" title="Reality Stone" />
          <span className="absolute top-1/2 left-0 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-purple-500 shadow-[0_0_14px_#c084fc]" title="Power Stone" />
          <span className="absolute top-1/2 right-0 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-yellow-400 shadow-[0_0_14px_#facc15]" title="Mind Stone" />
          <span className="absolute top-1/6 right-1/6 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" title="Time Stone" />
          <span className="absolute bottom-1/6 left-1/6 h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_12px_#fb923c]" title="Soul Stone" />
        </div>
      </div>

      {/* Main Comic Cover Composition */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6 text-center">
        {/* Top Comic Book Header Bar / Issue Stamp */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="issue-badge">
            <span className="font-bold">VOL. XXVI</span>
            <span>·</span>
            <span>ISSUE #26</span>
          </div>

          <div className="flex items-center gap-1.5 border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs uppercase tracking-widest text-white/80">
              OFFICIAL FESTIVAL PROPOSAL
            </span>
          </div>

          <span className="comic-stamp">VIT PUNE × MCU</span>
        </div>

        {/* Presenter Headline */}
        <p className="font-display text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm mb-2">
          VIT Pune Student Council presents
        </p>

        {/* Main Title Lockup */}
        <div className="relative my-3 max-w-full px-2">
          {/* Authentic Comic Red Block */}
          <div className="relative inline-block border-3 sm:border-4 border-white bg-marvel px-5 py-2 sm:px-8 sm:py-3 shadow-[6px_6px_0_0_#000,0_0_60px_rgba(230,36,41,0.5)] transform -rotate-1 max-w-full">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-normal text-white uppercase break-normal">
              VISHWAKARANDAK
            </h1>
          </div>

          {/* Infinity Sub-Badge */}
          <div className="absolute -bottom-3.5 right-2 sm:right-6 border-2 border-black bg-gold px-2.5 py-0.5 sm:px-3 sm:py-1 shadow-[3px_3px_0_0_#000] transform rotate-2">
            <p className="font-display text-xs sm:text-sm md:text-base tracking-widest text-black font-extrabold">
              APEX OF INFINITY
            </p>
          </div>
        </div>

        {/* Thematic Subtitle & Tagline */}
        <div className="mt-6 max-w-xl sm:max-w-2xl px-2">
          <p className="font-display text-xl sm:text-2xl md:text-3xl tracking-wide text-white/95">
            Where Students Turn into <span className="text-gold underline decoration-marvel decoration-2 sm:decoration-4">Superheroes</span>
          </p>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-white/75 leading-relaxed">
            Seven departmental dynasties. One shattered timeline. The ultimate collegiate arena of
            technology, athletic dominance, and cultural spectacle at Vishwakarma Institute of Technology, Pune.
          </p>
        </div>

        {/* Countdown Component */}
        <div className="mt-8 w-full max-w-md">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Multiverse Collision In:
          </p>
          <Countdown />
        </div>

        {/* Festival Verified Meta Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm uppercase tracking-[0.25em] text-white/60">
          <span className="flex items-center gap-1">
            <Compass className="h-3.5 w-3.5 text-gold" />
            1 November 2026
          </span>
          <span>·</span>
          <span>VIT Pune Campus</span>
          <span>·</span>
          <span className="text-marvel font-bold">Inter-House Tournament</span>
        </div>

        {/* Interactive Dual CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#story-spiderman"
            className="comic-panel group flex items-center gap-2 bg-white px-7 py-3.5 font-display text-xl sm:text-2xl tracking-widest text-black transition hover:bg-gold"
          >
            <span>ENTER THE MULTIVERSE</span>
            <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Link>

          <Link
            href="#official-events"
            className="comic-panel-gold group flex items-center gap-2 bg-zinc-950/90 px-7 py-3.5 font-display text-xl sm:text-2xl tracking-widest text-white transition hover:bg-marvel"
          >
            <Shield className="h-5 w-5 text-gold group-hover:text-white" />
            <span>DISCOVER 60+ EVENTS</span>
          </Link>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-14 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/50">
            Scroll to Chapter 01 · Spider-Man Web Swing
          </span>
          <div className="h-6 w-3.5 rounded-full border border-white/40 p-0.5 flex justify-center">
            <span className="h-1.5 w-1 rounded-full bg-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
