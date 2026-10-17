"use client";

import { useEffect, useState } from "react";
import { EVENT_DATE } from "@/lib/data";

function diff() {
  const ms = Math.max(0, new Date(EVENT_DATE).getTime() - Date.now());
  return {
    Days: Math.floor(ms / 86_400_000),
    Hours: Math.floor(ms / 3_600_000) % 24,
    Mins: Math.floor(ms / 60_000) % 60,
    Secs: Math.floor(ms / 1000) % 60,
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const update = () => setTime(diff());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const entries = Object.entries(time ?? { Days: 0, Hours: 0, Mins: 0, Secs: 0 });

  return (
    <div className="flex gap-3 md:gap-4" aria-label="Countdown to Vishwakarandak">
      {entries.map(([label, value]) => (
        <div
          key={label}
          className="panel flex w-16 flex-col items-center bg-black/70 py-2 md:w-20"
        >
          <span className="font-display text-3xl tabular-nums md:text-4xl">
            {time ? String(value).padStart(2, "0") : "--"}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">{label}</span>
        </div>
      ))}
    </div>
  );
}
