"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Zap, ShieldAlert, CheckCircle2, RotateCcw } from "lucide-react";

interface StoneData {
  id: string;
  name: string;
  color: string;
  glowClass: string;
  domain: string;
  eventHighlight: string;
  location: string;
  coords: { cx: number; cy: number; r: number };
}

const infinityStones: StoneData[] = [
  {
    id: "time",
    name: "Time Stone",
    color: "#10b981",
    glowClass: "stone-glow-time",
    domain: "Timeline, Fixtures & Schedules",
    eventHighlight: "VIERP Registration Deadlines & Bracket Draws",
    location: "Thumb Socket",
    coords: { cx: 78, cy: 198, r: 13 },
  },
  {
    id: "power",
    name: "Power Stone",
    color: "#a855f7",
    glowClass: "stone-glow-power",
    domain: "Athletic Power & Strength",
    eventHighlight: "Arm Wrestling (EC 01), Tug of War (S 37), Kabaddi (S 24)",
    location: "Index Knuckle",
    coords: { cx: 126, cy: 122, r: 12 },
  },
  {
    id: "space",
    name: "Space Stone",
    color: "#3b82f6",
    glowClass: "stone-glow-space",
    domain: "Field Dominance & Space Control",
    eventHighlight: "Cricket Boys (S 12), Football (S 20), Basketball (S 08)",
    location: "Middle Knuckle",
    coords: { cx: 168, cy: 104, r: 13 },
  },
  {
    id: "reality",
    name: "Reality Stone",
    color: "#ef4444",
    glowClass: "stone-glow-reality",
    domain: "Visual Art & Material Creation",
    eventHighlight: "Hand Painting (EC 05), Resin Art (EC 07), Tie Dye (EC 08)",
    location: "Ring Knuckle",
    coords: { cx: 210, cy: 124, r: 12 },
  },
  {
    id: "soul",
    name: "Soul Stone",
    color: "#f97316",
    glowClass: "stone-glow-soul",
    domain: "Stage Passion & Fraternity",
    eventHighlight: "Naatki Street Play (EC 12), V-Rock (EC 16), Mr & Miss VIT (EC 13)",
    location: "Pinky Knuckle",
    coords: { cx: 248, cy: 160, r: 11 },
  },
  {
    id: "mind",
    name: "Mind Stone",
    color: "#ffd700",
    glowClass: "stone-glow-mind",
    domain: "Algorithmic Genius & Stark Computing",
    eventHighlight: "24h Hackathon (Tech 08), Escape Room (Tech 11), Code Titans (Tech 06)",
    location: "Back of Hand Bezel (Center)",
    coords: { cx: 184, cy: 212, r: 20 },
  },
];

export default function StoryThanos() {
  const [snapped, setSnapped] = useState(false);
  const [snapCount, setSnapCount] = useState(0);
  const [activeStone, setActiveStone] = useState<StoneData>(infinityStones[5]); // Default to Mind Stone

  const handleSnap = () => {
    setSnapped(true);
    setSnapCount((c) => c + 1);
    setTimeout(() => {
      setSnapped(false);
    }, 3200);
  };

  return (
    <section
      id="story-thanos"
      aria-label="Story Chapter: Thanos Cosmic Snap & Infinity Gauntlet"
      className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Cosmic Energy */}
      <div className="halftone-dots absolute inset-0 opacity-20 pointer-events-none" />
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          snapped
            ? "bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.35)_0%,rgba(168,85,247,0.4)_40%,transparent_80%)] opacity-100"
            : "opacity-0"
        }`}
      />

      {/* Chapter Marker */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-[#a855f7] px-3 py-1 font-display text-lg tracking-widest text-white font-bold shadow-[2px_2px_0_0_#fff]">
            ACT III // INFINITY WAR
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/90">
            THANOS // THE GOLDEN GAUNTLET
          </span>
        </div>
        <span className="comic-sfx text-sm text-[#ffd700]">
          * CLANK! GAUNTLET SOCKETED *
        </span>
      </div>

      {/* Main Container */}
      <div className="relative z-10 mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Left Column: Story Lore & Active Stone Inspector */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#ffd700] font-bold mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#ffd700]" />
            NIDAVELLIR-FORGED URU METALLURGY
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.88] text-white">
            Six Cosmic Stones. <br />
            <span className="text-stroke-gold">One Golden Gauntlet.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            The Infinity Gauntlet channels the primal energies of Vishwakarandak &apos;26.
            Each stone is physically embedded into the knuckle armor and dorsal plate.
            Click any stone directly on the Gauntlet to inspect its festival discipline, or trigger the snap.
          </p>

          {/* Active Selected Stone Dossier Panel */}
          <div className="mt-6 border-2 border-white/40 bg-zinc-950 p-5 shadow-[6px_6px_0_0_var(--gold)]">
            <div className="flex items-center justify-between border-b border-white/20 pb-2">
              <div className="flex items-center gap-2.5">
                <div
                  className="h-4 w-4 rounded-full border border-white"
                  style={{ backgroundColor: activeStone.color, boxShadow: `0 0 14px ${activeStone.color}` }}
                />
                <span className="font-display text-lg tracking-wider text-white uppercase">
                  {activeStone.name}
                </span>
              </div>
              <span className="font-mono text-[11px] text-gold font-bold uppercase">
                {activeStone.location}
              </span>
            </div>

            <div className="mt-3 space-y-1.5 text-xs sm:text-sm">
              <p className="text-white/70">
                <strong className="text-white">Domain:</strong> {activeStone.domain}
              </p>
              <p className="text-white/70">
                <strong className="text-gold">Key Events:</strong> {activeStone.eventHighlight}
              </p>
            </div>
          </div>

          {/* Action Trigger Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleSnap}
              className={`comic-panel-gold px-8 py-4 font-display text-xl tracking-widest text-black transition-all transform active:scale-95 flex items-center gap-3 ${
                snapped ? "bg-white shadow-[0_0_50px_#ffd700]" : "bg-gold hover:bg-white"
              }`}
            >
              <Zap className="h-6 w-6 text-black" />
              <span>{snapped ? "SNAP EXECUTED! *" : "TRIGGER THE SNAP *SNAP!*"}</span>
            </button>

            <Link
              href="#official-events"
              className="comic-panel bg-zinc-950 px-6 py-4 font-display text-lg tracking-widest text-white hover:bg-marvel transition-colors"
            >
              EXPLORE ALL 60+ EVENTS →
            </Link>
          </div>

          <p className="mt-3 font-mono text-xs text-white/50">
            Total Multiversal Snaps Triggered: <span className="text-gold font-bold">{snapCount}</span>
          </p>
        </div>

        {/* Right Column: The Hand-Crafted SVG Infinity Gauntlet */}
        <div className="lg:col-span-6 relative flex flex-col items-center">
          <div
            className={`comic-panel relative overflow-hidden bg-gradient-to-b from-[#1b1406] via-[#100c05] to-black p-6 sm:p-8 border-4 border-white transition-all duration-500 w-full max-w-lg ${
              snapped
                ? "shadow-[0_0_100px_rgba(255,215,0,0.9)] scale-[1.03] border-gold"
                : "shadow-[10px_10px_0_0_#ffd700]"
            }`}
          >
            <div className="comic-speed-lines absolute inset-0 opacity-20 pointer-events-none" />

            {/* Top Plate Label */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-3">
              <span className="font-display text-sm tracking-widest text-gold uppercase">
                URU INFUSED GAUNTLET // 6 STONES SOCKETED
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> 100% ARMED
              </span>
            </div>

            {/* SVG Gauntlet Illustration with Physically Embedded Stones */}
            <div className="relative z-10 my-4 flex items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[320/420]">
                {/* Shockwave Rings on Snap */}
                {snapped && (
                  <div
                    className="absolute inset-0 rounded-full border-4 border-gold animate-shockwave pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                <svg
                  viewBox="0 0 320 420"
                  className="w-full h-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Metallic Gold Gradients */}
                    <linearGradient id="goldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffd700" />
                      <stop offset="45%" stopColor="#b38728" />
                      <stop offset="70%" stopColor="#fbf5b7" />
                      <stop offset="100%" stopColor="#aa771c" />
                    </linearGradient>

                    <linearGradient id="goldDark" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8a6114" />
                      <stop offset="100%" stopColor="#4a3106" />
                    </linearGradient>

                    <radialGradient id="mindStoneGrad" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#ffd700" />
                      <stop offset="85%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#92400e" />
                    </radialGradient>

                    <radialGradient id="powerStoneGrad" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#c084fc" />
                      <stop offset="85%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#581c87" />
                    </radialGradient>

                    <radialGradient id="spaceStoneGrad" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#60a5fa" />
                      <stop offset="85%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </radialGradient>

                    <radialGradient id="realityStoneGrad" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#f87171" />
                      <stop offset="85%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#7f1d1d" />
                    </radialGradient>

                    <radialGradient id="soulStoneGrad" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#fb923c" />
                      <stop offset="85%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#7c2d12" />
                    </radialGradient>

                    <radialGradient id="timeStoneGrad" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#34d399" />
                      <stop offset="85%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </radialGradient>
                  </defs>

                  {/* Vambrace / Forearm Base */}
                  <path
                    d="M 90 350 L 70 410 L 250 410 L 230 350 Z"
                    fill="url(#goldDark)"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  {/* Vambrace Mid Plate with Runes */}
                  <path
                    d="M 96 330 L 86 360 L 234 360 L 224 330 Z"
                    fill="url(#goldPlate)"
                    stroke="#1c1404"
                    strokeWidth="3"
                  />
                  <line x1="120" y1="345" x2="200" y2="345" stroke="#4a3106" strokeWidth="2" strokeDasharray="4 3" />

                  {/* Wrist Carapace Plate */}
                  <path
                    d="M 80 270 L 240 270 L 248 335 L 72 335 Z"
                    fill="url(#goldPlate)"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <circle cx="160" cy="302" r="10" fill="#4a3106" stroke="#ffd700" strokeWidth="2" />

                  {/* Dorsal Hand Armor (Back of Hand) */}
                  <path
                    d="M 95 170 L 225 170 L 252 270 L 68 270 Z"
                    fill="url(#goldPlate)"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  {/* Dorsal Chevron Engraving */}
                  <path
                    d="M 115 250 L 160 215 L 205 250"
                    fill="none"
                    stroke="#4a3106"
                    strokeWidth="3"
                  />

                  {/* FINGERS */}
                  {/* Thumb (Left angled outward) */}
                  <g className="cursor-pointer" onClick={() => setActiveStone(infinityStones[0])}>
                    <path
                      d="M 72 230 L 40 180 L 65 155 L 98 190 Z"
                      fill="url(#goldPlate)"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 40 180 L 32 145 L 56 130 L 65 155 Z"
                      fill="url(#goldDark)"
                      stroke="#1c1404"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Index Finger (Left-Center) */}
                  <g className="cursor-pointer" onClick={() => setActiveStone(infinityStones[1])}>
                    <path
                      d="M 110 168 L 114 90 L 138 88 L 140 168 Z"
                      fill="url(#goldPlate)"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    {/* Index Tip */}
                    <path
                      d="M 114 90 L 118 45 L 136 43 L 138 88 Z"
                      fill="url(#goldDark)"
                      stroke="#1c1404"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Middle Finger (Tallest, Center) */}
                  <g className="cursor-pointer" onClick={() => setActiveStone(infinityStones[2])}>
                    <path
                      d="M 152 168 L 154 75 L 182 73 L 184 168 Z"
                      fill="url(#goldPlate)"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    {/* Middle Tip */}
                    <path
                      d="M 154 75 L 156 30 L 180 28 L 182 73 Z"
                      fill="url(#goldDark)"
                      stroke="#1c1404"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Ring Finger (Right-Center) */}
                  <g className="cursor-pointer" onClick={() => setActiveStone(infinityStones[3])}>
                    <path
                      d="M 196 168 L 198 90 L 222 92 L 224 168 Z"
                      fill="url(#goldPlate)"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    {/* Ring Tip */}
                    <path
                      d="M 198 90 L 200 48 L 220 50 L 222 92 Z"
                      fill="url(#goldDark)"
                      stroke="#1c1404"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Pinky Finger (Right, Shorter) */}
                  <g className="cursor-pointer" onClick={() => setActiveStone(infinityStones[4])}>
                    <path
                      d="M 234 175 L 236 125 L 258 132 L 254 185 Z"
                      fill="url(#goldPlate)"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    {/* Pinky Tip */}
                    <path
                      d="M 236 125 L 238 85 L 256 90 L 258 132 Z"
                      fill="url(#goldDark)"
                      stroke="#1c1404"
                      strokeWidth="2"
                    />
                  </g>

                  {/* KNUCKLE HOUSING BAR & SOCKET BEZELS */}
                  <path
                    d="M 98 140 Q 180 115 260 165 L 252 178 Q 180 128 92 152 Z"
                    fill="#3b2505"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />

                  {/* 1. TIME STONE (THUMB SOCKET) */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveStone(infinityStones[0])}
                  >
                    {/* Bezel */}
                    <circle cx="78" cy="198" r="16" fill="#1c1404" stroke="#ffd700" strokeWidth="2" />
                    {/* Stone */}
                    <circle
                      cx="78"
                      cy="198"
                      r="13"
                      fill="url(#timeStoneGrad)"
                      className="stone-glow-time"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* 2. POWER STONE (INDEX KNUCKLE) */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveStone(infinityStones[1])}
                  >
                    <circle cx="126" cy="122" r="15" fill="#1c1404" stroke="#ffd700" strokeWidth="2" />
                    <circle
                      cx="126"
                      cy="122"
                      r="12"
                      fill="url(#powerStoneGrad)"
                      className="stone-glow-power"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* 3. SPACE STONE (MIDDLE KNUCKLE) */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveStone(infinityStones[2])}
                  >
                    <circle cx="168" cy="104" r="16" fill="#1c1404" stroke="#ffd700" strokeWidth="2" />
                    <circle
                      cx="168"
                      cy="104"
                      r="13"
                      fill="url(#spaceStoneGrad)"
                      className="stone-glow-space"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* 4. REALITY STONE (RING KNUCKLE) */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveStone(infinityStones[3])}
                  >
                    <circle cx="210" cy="124" r="15" fill="#1c1404" stroke="#ffd700" strokeWidth="2" />
                    <circle
                      cx="210"
                      cy="124"
                      r="12"
                      fill="url(#realityStoneGrad)"
                      className="stone-glow-reality"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* 5. SOUL STONE (PINKY KNUCKLE) */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveStone(infinityStones[4])}
                  >
                    <circle cx="248" cy="160" r="14" fill="#1c1404" stroke="#ffd700" strokeWidth="2" />
                    <circle
                      cx="248"
                      cy="160"
                      r="11"
                      fill="url(#soulStoneGrad)"
                      className="stone-glow-soul"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* 6. MIND STONE (BACK OF HAND - GIANT GOLDEN CENTER BEZEL) */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveStone(infinityStones[5])}
                  >
                    {/* Starburst Ornate Frame */}
                    <polygon
                      points="184,180 195,198 214,200 200,214 204,234 184,224 164,234 168,214 154,200 173,198"
                      fill="#2b1a03"
                      stroke="#ffd700"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="184"
                      cy="212"
                      r="19"
                      fill="url(#mindStoneGrad)"
                      className="stone-glow-mind"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Energy Arcs When Snapped */}
                  {snapped && (
                    <g stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.9">
                      <path d="M 78 198 Q 130 150 168 104" stroke="#00f0ff" />
                      <path d="M 168 104 Q 175 160 184 212" stroke="#ffd700" />
                      <path d="M 184 212 Q 220 180 248 160" stroke="#f97316" />
                      <path d="M 126 122 Q 150 170 184 212" stroke="#a855f7" />
                      <path d="M 210 124 Q 195 170 184 212" stroke="#ef4444" />
                    </g>
                  )}
                </svg>
              </div>
            </div>

            {/* Bottom Interactive Prompt */}
            <div className="relative z-10 text-center border-t border-white/20 pt-3">
              <span className="comic-sfx text-lg text-gold block">
                {snapped ? "* KRAAA-THOOM! THE TIMELINE SHIFTS! *" : "* CLICK ANY STONE TO ACTIVATE DISCIPLINE *"}
              </span>
              <p className="mt-1 text-xs text-white/70 font-mono">
                {activeStone.name} active · {activeStone.domain}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
