import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { houses, scores } from "@/lib/data";

export const metadata: Metadata = { title: "Scoreboard · Vishwakarandak'26" };

export default function ScoreboardPage() {
  const rows = scores
    .map((s) => ({
      ...s,
      meta: houses.find((h) => h.slug === s.house)!,
      total: s.technical + s.sports + s.cultural,
    }))
    .sort((a, b) => b.total - a.total);
  const max = rows[0].total;

  return (
    <>
      <PageHeader
        kicker="Scoreboards & Results"
        title="Battle Standings"
        subtitle="The latest scores and results from every competition across the multiverse."
      />
      <section className="mx-auto max-w-6xl px-4 pb-28 md:px-8">
        <p className="mb-4 inline-block border border-yellow-400/60 bg-yellow-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-yellow-300">
          Sample data · mockup
        </p>

        {/* Podium */}
        <div className="mb-12 grid grid-cols-3 items-end gap-3 md:gap-6">
          {[rows[1], rows[0], rows[2]].map((r, i) => {
            const place = [2, 1, 3][i];
            return (
              <Reveal key={r.house} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <p className="font-display text-xl leading-none md:text-3xl">{r.meta.name}</p>
                  <p className="text-sm text-white/60">{r.total} pts</p>
                  <div
                    className="mt-3 flex w-full items-start justify-center border-2 border-white/80 pt-3 font-display text-5xl md:text-7xl"
                    style={{
                      height: [200, 150, 110][place - 1],
                      background: `linear-gradient(180deg, ${r.meta.color}, #0b0b0f)`,
                      boxShadow: `6px 6px 0 0 ${r.meta.glow}`,
                    }}
                  >
                    {place}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="panel overflow-x-auto bg-zinc-950">
          <table className="w-full min-w-[640px] text-left">
            <thead className="border-b border-white/20 font-display text-lg tracking-widest text-white/60">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">House</th>
                <th className="px-4 py-3 text-right">Technical</th>
                <th className="px-4 py-3 text-right">Sports</th>
                <th className="px-4 py-3 text-right">Cultural</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.house} className="border-b border-white/10 transition hover:bg-white/5">
                  <td className="px-4 py-4 font-display text-2xl text-marvel">{i + 1}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 font-display text-lg"
                        style={{ borderColor: r.meta.glow, color: r.meta.glow }}
                      >
                        {r.meta.emblem}
                      </span>
                      <span className="font-medium">{r.meta.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right tabular-nums text-white/75">{r.technical}</td>
                  <td className="px-4 py-4 text-right tabular-nums text-white/75">{r.sports}</td>
                  <td className="px-4 py-4 text-right tabular-nums text-white/75">{r.cultural}</td>
                  <td className="w-56 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 flex-1 bg-white/10">
                        <div className="h-full" style={{ width: `${(r.total / max) * 100}%`, background: r.meta.glow }} />
                      </div>
                      <span className="w-10 text-right font-display text-xl tabular-nums">{r.total}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
