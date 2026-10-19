"use client";

import { useState } from "react";
import { houses, House } from "@/lib/data";
import { Shield, Sparkles, Zap, Trophy, Flame } from "lucide-react";

export default function ChapterMultiverse() {
  const [activeSlug, setActiveSlug] = useState<string>("avengers");
  const activeHouse: House = houses.find((h) => h.slug === activeSlug) || houses[3];

  return (
    <section
      id="multiverse-houses"
      aria-label="Chapter 06: The Seven Realms of Karandak"
      className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="halftone-dots-dense absolute inset-0 opacity-20 pointer-events-none" />
      <div className="comic-speed-lines absolute inset-0 opacity-10 pointer-events-none" />

      {/* Chapter Marker Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-marvel px-2.5 py-1 font-display text-lg tracking-widest text-white font-bold">
            CHAPTER 06
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/80">
            THE SEVEN REALMS OF KARANDAK
          </span>
        </div>
        <div className="text-right">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-portal-cyan">
            DIMENSIONAL MATRIX // INTER-HOUSE
          </span>
        </div>
      </div>

      {/* Editorial Title */}
      <div className="relative z-10 mt-10 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
          THE APEX CONVERGENCE
        </span>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.9] text-white">
          Seven Houses. Seven Legacies. <br />
          <span className="text-stroke-marvel">One Karandak</span> Trophy.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          In Vishwakarandak &apos;26, each student department anchors a distinct quadrant of the multiverse.
          Select any realm below to decrypt their combat domain, house ideology, and tactical strengths.
        </p>
      </div>

      {/* House Dimension Selectors (Pill Ticker) */}
      <div
        role="tablist"
        aria-label="House Dimension Selectors"
        className="relative z-10 mt-8 flex flex-wrap gap-2 sm:gap-3"
      >
        {houses.map((h) => {
          const isActive = h.slug === activeSlug;
          return (
            <button
              key={h.slug}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${h.slug}`}
              id={`tab-${h.slug}`}
              type="button"
              onClick={() => setActiveSlug(h.slug)}
              className={`flex items-center gap-2 border-2 px-3 py-1.5 sm:px-4 sm:py-2 font-display text-sm sm:text-base tracking-widest transition-all ${
                isActive
                  ? "border-white bg-white text-black shadow-[4px_4px_0_0_var(--marvel)] scale-105"
                  : "border-white/30 bg-zinc-950/80 text-white/80 hover:border-gold hover:text-white"
              }`}
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full font-bold text-xs"
                style={{
                  backgroundColor: h.color,
                  color: "#ffffff",
                }}
              >
                {h.emblem}
              </span>
              <span>{h.name}</span>
            </button>
          );
        })}
      </div>

      {/* The Multiverse Portal & Active House Showcase (Overlapping Panel Matrix) */}
      <div
        id={`panel-${activeHouse.slug}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeHouse.slug}`}
        className="relative z-10 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch"
      >
        {/* Main Dimension Portal Card (Left 7 Cols) */}
        <div
          className="lg:col-span-7 comic-panel relative flex flex-col justify-between overflow-hidden p-6 sm:p-10 transition-all duration-500"
          style={{
            background: `linear-gradient(150deg, ${activeHouse.color} 0%, #08090d 65%, #050608 100%)`,
            boxShadow: `8px 8px 0 0 ${activeHouse.glow}`,
          }}
        >
          {/* Subtle Halftone & Giant Emblem Background */}
          <div className="halftone-dots absolute inset-0 opacity-40 pointer-events-none" />
          <span
            className="absolute -right-8 -top-12 font-display text-[18rem] leading-none text-white/10 pointer-events-none select-none transition-transform duration-700"
            aria-hidden="true"
          >
            {activeHouse.emblem}
          </span>

          {/* Top Panel Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-4">
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white font-display text-2xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                style={{ backgroundColor: activeHouse.color }}
              >
                {activeHouse.emblem}
              </span>
              <div>
                <span className="font-display text-xs tracking-[0.25em] text-white/70 block">
                  REALM ARCHIVE
                </span>
                <span className="font-display text-xl sm:text-2xl tracking-widest text-white">
                  {activeHouse.comicTitle}
                </span>
              </div>
            </div>

            <div className="border border-white/30 bg-black/60 px-3 py-1">
              <span className="font-display text-xs tracking-widest text-gold uppercase">
                {activeHouse.domain}
              </span>
            </div>
          </div>

          {/* Middle Lore & Quote */}
          <div className="relative z-10 my-8">
            <h3 className="font-display text-5xl sm:text-7xl leading-[0.88] tracking-tight text-white">
              {activeHouse.name}
            </h3>
            <p className="mt-3 font-display text-2xl sm:text-3xl tracking-wide text-gold">
              &ldquo;{activeHouse.tagline}&rdquo;
            </p>

            <div className="mt-6 border-l-4 border-white/80 pl-4 py-1">
              <span className="text-xs uppercase tracking-widest text-white/50 block">
                MCU ARCHETYPE ALIGNMENT
              </span>
              <p className="text-sm sm:text-base text-white/90 font-medium">
                {activeHouse.mcuInspiration}
              </p>
            </div>
          </div>

          {/* Tactical Strengths Tags */}
          <div className="relative z-10 border-t border-white/20 pt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2 block">
              TACTICAL COMBAT SPECIALIZATIONS:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeHouse.strengths.map((str) => (
                <span
                  key={str}
                  className="border border-white/40 bg-black/70 px-3 py-1 text-xs font-display tracking-widest text-white uppercase shadow-[2px_2px_0_0_#000]"
                >
                  ★ {str}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Overlapping Complementary House Previews */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="border-2 border-white/80 bg-zinc-950 p-6 shadow-[6px_6px_0_0_#fff]">
            <div className="flex items-center justify-between border-b border-white/15 pb-2">
              <span className="font-display text-xs tracking-[0.2em] text-marvel uppercase">
                INTER-HOUSE TOURNAMENT CODE
              </span>
              <Flame className="h-4 w-4 text-marvel" />
            </div>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Every point scored in Technical hackathons, Sports tournaments, and Cultural stages feeds
              directly into the collective House tally. No solo champions—only united realms survive
              the Endgame.
            </p>
          </div>

          {/* Multiverse Realm Grid Preview (Small Split Panels) */}
          <div className="grid grid-cols-2 gap-3">
            {houses
              .filter((h) => h.slug !== activeHouse.slug)
              .slice(0, 4)
              .map((h) => (
                <button
                  key={h.slug}
                  type="button"
                  onClick={() => setActiveSlug(h.slug)}
                  className="group relative flex flex-col justify-between border-2 border-white/30 bg-zinc-900/90 p-3 text-left transition hover:border-white hover:scale-[1.02]"
                  style={{
                    boxShadow: `4px 4px 0 0 ${h.glow}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold font-display"
                      style={{ backgroundColor: h.color, color: "#fff" }}
                    >
                      {h.emblem}
                    </span>
                    <span className="text-[10px] uppercase text-white/50 tracking-wider">
                      SHIFT →
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-display text-lg leading-tight text-white group-hover:text-gold transition-colors">
                      {h.name}
                    </p>
                    <p className="text-[11px] text-white/60 truncate mt-0.5">{h.domain}</p>
                  </div>
                </button>
              ))}
          </div>

          {/* Quick Trophy Quote */}
          <div className="border border-gold/40 bg-gradient-to-r from-gold/10 via-marvel/10 to-transparent p-4 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-gold shrink-0" />
            <div>
              <span className="font-display text-sm tracking-widest text-gold uppercase block">
                THE APEX KARANDAK SHIELD
              </span>
              <p className="text-xs text-white/75">
                Hoisted only by the house that conquers all three core disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
