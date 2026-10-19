"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, Zap, Crosshair, ShieldCheck, Flame, Radio, Target, CheckCircle2 } from "lucide-react";

interface TechTarget {
  id: string;
  code: string;
  name: string;
  fee: string;
  category: string;
  lore: string;
}

const techTargets: TechTarget[] = [
  {
    id: "hackathon",
    code: "Tech 08",
    name: "24h Hackathon",
    fee: "₹180 per team",
    category: "Full-Stack & AI Systems",
    lore: "Stark computing protocols deployed. Build neural nets and web architectures in 24 hours.",
  },
  {
    id: "rc-rampage",
    code: "Tech 01",
    name: "RC Rampage",
    fee: "₹60 individual",
    category: "Autonomous Hardware & RC",
    lore: "High-octane obstacle circuit racing. Precision suspension, high-torque motors, and agility.",
  },
  {
    id: "escape-room",
    code: "Tech 11",
    name: "Cryo Escape Room",
    fee: "₹120 per team",
    category: "Cryptographic Problem Solving",
    lore: "Locked in a high-security multiversal vault. Solve algorithmic riddles to restore timeline.",
  },
  {
    id: "robo-soccer",
    code: "Tech 12",
    name: "Robo Soccer",
    fee: "₹80 per team",
    category: "Combat Robotics",
    lore: "Custom wheeled bots battle on the indoor arena. Dribble, strike, and defend with remote telemetry.",
  },
];

type FlightMode = "subsonic" | "supersonic" | "overdrive";

export default function StoryIronMan() {
  const [selectedTarget, setSelectedTarget] = useState<TechTarget>(techTargets[0]);
  const [flightMode, setFlightMode] = useState<FlightMode>("supersonic");
  const [firingLaser, setFiringLaser] = useState(false);
  const [blastCount, setBlastCount] = useState(0);
  const [protocol, setProtocol] = useState<string>("CAMPUS_SCAN");

  const flightStats = {
    subsonic: { speed: "Mach 0.8", velocity: "980 km/h", altitude: "450 m", core: "91.2%", sound: "* SUBSONIC CRUISE *" },
    supersonic: { speed: "Mach 2.2", velocity: "2,700 km/h", altitude: "1,200 m", core: "98.4%", sound: "* BOOM! SOUND BARRIER BROKEN *" },
    overdrive: { speed: "Mach 4.5", velocity: "5,500 km/h", altitude: "3,800 m", core: "100.0%", sound: "* HYPERSONIC OVERDRIVE BLAST *" },
  };

  const handleFireRepulsor = (target?: TechTarget) => {
    if (target) setSelectedTarget(target);
    setFiringLaser(true);
    setBlastCount((c) => c + 1);
    setTimeout(() => {
      setFiringLaser(false);
    }, 700);
  };

  return (
    <section
      id="story-ironman"
      aria-label="Story Chapter: Iron Man Supersonic Flight & Stark Tech Labs"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="halftone-cyan absolute inset-0 opacity-15 pointer-events-none" />

      {/* Chapter Marker */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-[#00f0ff] px-3 py-1 font-display text-lg tracking-widest text-black font-bold shadow-[2px_2px_0_0_#fff]">
            ACT II // STARK AVIONICS
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-widest text-white/90">
            IRON MAN // TECHNICAL SECTOR SCANNER
          </span>
        </div>
        <span className="comic-sfx-cyan text-sm">
          {flightStats[flightMode].sound}
        </span>
      </div>

      {/* Main Grid: Telemetry Story vs Interactive Combat HUD */}
      <div className="relative z-10 mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
        {/* Left Column: Stark Industries Story & Target Lock */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Radio className="h-4 w-4 text-[#00f0ff] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#00f0ff] font-bold">
              F.R.I.D.A.Y. AVIONICS // BIBWEWADI AIRSPACE
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.88] text-white">
            Supersonic Flight. <br />
            <span className="text-stroke-cyan">Stark Tech</span> Labs.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            Streaking over the Mechanical & Computer Engineering corridors at{" "}
            <strong className="text-[#00f0ff]">{flightStats[flightMode].speed}</strong>, Tony Stark&apos;s
            telemetry locks onto the most demanding innovation challenges in Maharashtra.
            Solve cryptographic locks in <strong className="text-[#00f0ff]">Escape Room (Tech 11)</strong>, command
            custom robots in <strong className="text-gold">Robo Soccer (Tech 12)</strong>, or claim the comprehensive{" "}
            <strong className="text-[#ff2a4b]">Technical Event Pass (₹180)</strong>.
          </p>

          {/* Interactive Flight Mode Switcher */}
          <div className="mt-6 border-2 border-[#00f0ff]/40 bg-[#00f0ff]/5 p-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#00f0ff] block mb-2 font-bold">
              SELECT THRUSTER VELOCITY MODE:
            </span>
            <div className="flex flex-wrap gap-2">
              {(["subsonic", "supersonic", "overdrive"] as FlightMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setFlightMode(mode)}
                  className={`px-4 py-2 font-display text-xs tracking-widest border transition-all ${
                    flightMode === mode
                      ? "bg-[#00f0ff] text-black border-white shadow-[0_0_15px_#00f0ff] font-bold"
                      : "bg-black/60 text-white/80 border-[#00f0ff]/30 hover:border-[#00f0ff]"
                  }`}
                >
                  {mode.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Real-time Telemetry Readout Bar */}
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#00f0ff]/20 pt-3 font-mono text-xs">
              <div>
                <span className="text-white/50 block text-[10px]">VELOCITY:</span>
                <span className="text-[#00f0ff] font-bold">{flightStats[flightMode].velocity}</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">ALTITUDE:</span>
                <span className="text-gold font-bold">{flightStats[flightMode].altitude}</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">ARC OUTPUT:</span>
                <span className="text-emerald-400 font-bold">{flightStats[flightMode].core}</span>
              </div>
            </div>
          </div>

          {/* Active Target Decryption Card */}
          <div className="mt-6 border-2 border-white/40 bg-zinc-950 p-4 shadow-[6px_6px_0_0_#00f0ff]">
            <div className="flex items-center justify-between border-b border-white/20 pb-2">
              <span className="font-display text-lg text-white flex items-center gap-2">
                <Target className="h-5 w-5 text-[#00f0ff]" />
                {selectedTarget.code}: {selectedTarget.name}
              </span>
              <span className="bg-marvel px-2 py-0.5 text-xs font-mono font-bold text-white">
                {selectedTarget.fee}
              </span>
            </div>
            <p className="mt-2 text-xs text-white/70">
              {selectedTarget.lore}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => handleFireRepulsor()}
              className="comic-panel-cyan bg-[#00f0ff] px-7 py-3.5 font-display text-lg tracking-widest text-black hover:bg-white transition-all transform active:scale-95 flex items-center gap-2 font-bold"
            >
              <Zap className="h-5 w-5 text-black" />
              <span>FIRE REPULSOR BLAST ({blastCount})</span>
            </button>

            <Link
              href="#official-events"
              className="comic-panel bg-black px-6 py-3.5 font-display text-lg tracking-widest text-white hover:bg-gold hover:text-black transition-colors"
            >
              ALL 12 TECH EVENTS →
            </Link>
          </div>
        </div>

        {/* Right Column: High-Tech Interactive Combat HUD & Drones */}
        <div className="lg:col-span-6 relative">
          <div className="comic-panel relative overflow-hidden bg-gradient-to-br from-[#0c1424] via-[#080d19] to-black p-6 sm:p-8 min-h-[500px] flex flex-col justify-between border-4 border-white shadow-[10px_10px_0_0_#00f0ff]">
            {/* Speed Lines & Tactical Grid Overlay */}
            <div className="comic-speed-lines absolute inset-0 opacity-25 pointer-events-none" />
            <div
              className={`absolute inset-0 bg-[#00f0ff]/5 transition-opacity ${
                firingLaser ? "opacity-100 bg-[#00f0ff]/20" : "opacity-30"
              } pointer-events-none`}
            />

            {/* Top HUD Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#00f0ff]/40 pb-3 font-mono text-xs">
              <span className="text-[#00f0ff] flex items-center gap-1.5 font-bold">
                <ShieldCheck className="h-4 w-4" /> MARK LXXXV TACTICAL HUD
              </span>
              <span className="text-gold font-bold">
                {firingLaser ? "⚡ REPULSOR DISCHARGING!" : "SYSTEMS PRIMED"}
              </span>
            </div>

            {/* Center: Interactive Target Drones Selection Matrix */}
            <div className="relative z-10 my-4">
              <span className="font-mono text-[10px] text-white/50 block mb-2 uppercase tracking-wider">
                CLICK A DRONE TO LOCK & FIRE REPULSORS:
              </span>

              <div className="grid grid-cols-2 gap-3">
                {techTargets.map((tgt) => {
                  const isSelected = selectedTarget.id === tgt.id;
                  return (
                    <button
                      key={tgt.id}
                      type="button"
                      onClick={() => handleFireRepulsor(tgt)}
                      className={`relative p-3 border-2 text-left transition-all ${
                        isSelected
                          ? "border-[#00f0ff] bg-[#00f0ff]/15 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-[1.02]"
                          : "border-white/20 bg-black/60 hover:border-[#00f0ff]/60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold text-gold">
                          {tgt.code}
                        </span>
                        {isSelected && (
                          <Crosshair className="h-4 w-4 text-[#00f0ff] animate-pulse" />
                        )}
                      </div>
                      <h4 className="font-display text-base text-white mt-1 leading-tight">
                        {tgt.name}
                      </h4>
                      <span className="font-mono text-[10px] text-[#00f0ff] block mt-0.5">
                        {tgt.fee}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Animated Laser Blast Line (Fires across on click) */}
            {firingLaser && (
              <div
                className="relative z-20 my-2 h-2.5 w-full bg-gradient-to-r from-white via-[#00f0ff] to-white rounded-full animate-laser shadow-[0_0_30px_#00f0ff]"
                aria-hidden="true"
              />
            )}

            {/* Bottom: Animated Mark LXXXV Armor & Thruster Core */}
            <div className="relative z-10 border-t border-[#00f0ff]/30 pt-4 flex items-center justify-between">
              {/* Iron Man Helmet & Reactor Icon */}
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 rounded-full border-2 border-white bg-black p-1 flex items-center justify-center shadow-[0_0_25px_#00f0ff]">
                  {/* Arc Reactor Core SVG */}
                  <svg className="h-9 w-9 text-[#00f0ff]" viewBox="0 0 100 100" fill="none">
                    <polygon points="50,15 90,85 10,85" stroke="currentColor" strokeWidth="6" />
                    <circle cx="50" cy="55" r="14" fill="#ffffff" />
                  </svg>
                  {/* Glowing Eyes / Core */}
                  <div className="absolute inset-0 rounded-full border border-[#00f0ff] animate-ping opacity-75" />
                </div>

                <div>
                  <span className="font-display text-sm text-white block">
                    ARC REACTOR // {flightStats[flightMode].core}
                  </span>
                  <span className="font-mono text-[10px] text-[#00f0ff] block">
                    {firingLaser ? "BLAST IN PROGRESS" : "STATUS: STEADY PULSE"}
                  </span>
                </div>
              </div>

              {/* Pulsing Jet Thruster Flame */}
              <div className="flex flex-col items-center">
                <div className="h-7 w-3.5 bg-gradient-to-b from-[#00f0ff] via-blue-500 to-transparent rounded-full animate-thruster shadow-[0_0_20px_#00f0ff]" />
                <span className="text-[9px] font-mono text-white/50 mt-1 uppercase">
                  {flightMode}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
