"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Gamepad, Music, Palette } from "lucide-react";

export default function StorySpiderman() {
  const [webShotCount, setWebShotCount] = useState(1);
  const [activeSpeech, setActiveSpeech] = useState(
    "Your friendly neighborhood engineer! Ready to swing into the creative & gaming multiverse?"
  );

  const speeches = [
    "Your friendly neighborhood engineer! Ready to swing into the creative & gaming multiverse?",
    "THWIP! Did someone say Valorant 5v5 (EC 23) and BGMI Squads (EC 18)? My spider-sense is tingling!",
    "THWIP! Footloose group dance (EC 11) and V-Rock (EC 16) are hitting the amphitheatre stage!",
    "THWIP! Don't forget: entry fee goes through VIERP portal with your event code!",
  ];

  const handleShootWeb = () => {
    setWebShotCount((prev) => (prev % 3) + 1);
    setActiveSpeech(speeches[(webShotCount) % speeches.length]);
  };

  return (
    <section
      id="story-spiderman"
      aria-label="Story Chapter: Spider-Man Web Swing"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="halftone-red absolute inset-0 opacity-15 pointer-events-none" />

      {/* Chapter Marker */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-[#ff2a4b] px-3 py-1 font-display text-lg tracking-widest text-white font-bold shadow-[2px_2px_0_0_#000]">
            ACT I // NARRATIVE SCENE
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/90">
            WEB OF THE MULTIVERSE
          </span>
        </div>
        <span className="comic-sfx text-sm text-gold">
          * THWIP! *
        </span>
      </div>

      {/* Main Narrative Comic Panel Spread */}
      <div className="relative z-10 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        {/* Left Column: Interactive Web-Swinger Graphic Canvas */}
        <div className="lg:col-span-6 relative">
          <div className="comic-panel relative overflow-hidden bg-gradient-to-b from-[#13060b] via-[#090b14] to-black p-6 sm:p-8 min-h-[440px] flex flex-col justify-between border-4 border-white">
            <div className="comic-speed-lines absolute inset-0 opacity-20 pointer-events-none" />

            {/* Dynamic Web Strands (SVG Vector Geometry) */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none transition-all duration-500"
              viewBox="0 0 400 400"
              preserveAspectRatio="none"
            >
              {/* Central Web Anchor Lines */}
              <line x1="0" y1="0" x2="200" y2="180" stroke="#ffffff" strokeWidth="2" strokeDasharray="4, 4" opacity="0.6" />
              <line x1="400" y1="0" x2="200" y2="180" stroke="#ffffff" strokeWidth="2" strokeDasharray="4, 4" opacity="0.6" />
              {webShotCount >= 2 && (
                <line x1="0" y1="400" x2="200" y2="180" stroke="#00f0ff" strokeWidth="2.5" strokeDasharray="2, 4" opacity="0.8" />
              )}
              {webShotCount >= 3 && (
                <line x1="400" y1="400" x2="200" y2="180" stroke="#ffd700" strokeWidth="2.5" strokeDasharray="3, 3" opacity="0.9" />
              )}
              {/* Web Circles */}
              <circle cx="200" cy="180" r="40" fill="none" stroke="#ff2a4b" strokeWidth="1.5" opacity="0.7" />
              <circle cx="200" cy="180" r="90" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="6, 6" opacity="0.4" />
            </svg>

            {/* Top Comic Speech Bubble */}
            <div className="relative z-10 self-start max-w-sm rounded-lg border-2 border-black bg-white p-4 text-black shadow-[4px_4px_0_0_#ff2a4b]">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display text-xs tracking-wider text-[#ff2a4b] font-bold">
                  SPIDER-MAN // QUEENS TO PUNE
                </span>
                <span className="comic-sfx text-[10px] text-black">THWIP!</span>
              </div>
              <p className="text-sm font-medium leading-snug">
                &ldquo;{activeSpeech}&rdquo;
              </p>
            </div>

            {/* Central Swinging Silhouette Graphic */}
            <div className="relative z-10 my-6 flex items-center justify-center">
              <div className="animate-web-swing flex flex-col items-center">
                {/* Spider Emblem Vector Graphic */}
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-tr from-[#dc2626] to-[#0284c7] shadow-[0_0_40px_rgba(239,68,68,0.7)] p-2">
                  <svg className="h-16 w-16 text-white drop-shadow-[0_2px_4px_#000]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
                  </svg>
                  <span className="absolute -bottom-2 border border-black bg-white px-2 py-0.5 text-[9px] font-display font-bold uppercase tracking-wider text-black">
                    WEB SWINGER
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Web Trigger Control */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-4">
              <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
                WEB CAPACITY: {webShotCount}/3 ARMED
              </span>

              <button
                type="button"
                onClick={handleShootWeb}
                className="comic-panel-gold bg-gold px-4 py-2 font-display text-sm tracking-widest text-black hover:bg-white transition-all transform active:scale-95"
              >
                SHOOT WEB [THWIP!]
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Creative & Gaming Arena Lore */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="comic-sfx text-sm text-[#ff2a4b]">* WHOOSH! *</span>
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              DISCIPLINE FOCUS: PERFORMING & GAMING
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.88] text-white">
            Anyone Can Wear <br />
            <span className="text-stroke-marvel">The Mask.</span> <br />
            Legends Rule The Stage.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            Swing across the central auditorium and LAN battlegrounds of VIT Pune. Whether you are
            dropping 30 bombs in <strong className="text-gold">Valorant (EC 23)</strong>, surviving the blue zone in{" "}
            <strong className="text-gold">BGMI Squads (EC 18)</strong>, or commanding the acoustic thunder of{" "}
            <strong className="text-marvel">V-Rock (EC 16)</strong>, this is where your agility converts into Karandak house points.
          </p>

          {/* Quick Arena Badges */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            <Link
              href="#official-events"
              className="border border-white/30 bg-zinc-950 p-3 hover:border-gold transition-colors text-center group"
            >
              <Gamepad className="mx-auto h-6 w-6 text-[#00f0ff] mb-1 group-hover:scale-110 transition-transform" />
              <p className="font-display text-lg text-white">LAN ARENA</p>
              <p className="text-[10px] text-white/60 uppercase">Valorant · BGMI · FIFA</p>
            </Link>

            <Link
              href="#official-events"
              className="border border-white/30 bg-zinc-950 p-3 hover:border-[#ff2a4b] transition-colors text-center group"
            >
              <Music className="mx-auto h-6 w-6 text-[#ff2a4b] mb-1 group-hover:scale-110 transition-transform" />
              <p className="font-display text-lg text-white">AUDI BEATS</p>
              <p className="text-[10px] text-white/60 uppercase">V-Rock · Footloose</p>
            </Link>

            <Link
              href="#official-events"
              className="border border-white/30 bg-zinc-950 p-3 hover:border-gold transition-colors text-center group"
            >
              <Palette className="mx-auto h-6 w-6 text-gold mb-1 group-hover:scale-110 transition-transform" />
              <p className="font-display text-lg text-white">ARTIZONE</p>
              <p className="text-[10px] text-white/60 uppercase">Resin · Tie Dye · CID</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
