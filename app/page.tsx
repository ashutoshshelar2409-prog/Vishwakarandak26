import Link from "next/link";
import Hero from "@/components/Hero";
import HorizontalScroll from "@/components/HorizontalScroll";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { GalleryCard, HouseCard, TimelineCard } from "@/components/Cards";
import { gallery, houses, timeline } from "@/lib/data";

const pillars = [
  { title: "Technical", text: "Code, build and out-think rival houses." },
  { title: "Sports", text: "Battles on the field where legends are forged." },
  { title: "Cultural", text: "Stage-stealing performances worthy of a post-credits scene." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Marquee strip */}
      <div className="relative z-10 -rotate-2 overflow-hidden border-y-2 border-white bg-marvel py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl tracking-widest">
          {[...houses, ...houses].map((h, i) => (
            <span key={i}>
              {h.name} <span className="text-black">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:px-8">
        <Reveal>
          <SectionHeading kicker="About" title="Think your department has the power? Prove it!" />
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Vishwakarandak &apos;26 is back. It is VIT Pune&apos;s annual sports and cultural fest, packed with
            technical showdowns, sporting battles, cultural spectacles and an epic leaderboard chase to the
            top. Pick your house, suit up, it&apos;s game time.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="panel h-full bg-zinc-950 p-6">
                <p className="font-display text-6xl text-marvel">0{i + 1}</p>
                <h3 className="mt-2 font-display text-4xl">{p.title}</h3>
                <p className="mt-2 text-white/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-16 text-center font-display text-5xl tracking-wide md:text-7xl">
            🔥 <span className="text-marvel">Assemble</span> for Victory!
          </p>
        </Reveal>
      </section>

      {/* Houses: vertical → horizontal */}
      <HorizontalScroll
        id="houses"
        className="bg-[linear-gradient(180deg,#07070a,#120607_50%,#07070a)]"
        header={
          <SectionHeading
            kicker="The Seven Houses"
            title="The Great Houses of Vishwakarandak'26"
            subtitle="Keep scrolling, the multiverse moves sideways."
          />
        }
      >
        {houses.map((h, i) => (
          <HouseCard key={h.slug} house={h} index={i} />
        ))}
        <div className="flex w-[60vw] shrink-0 items-center md:w-[40vw]">
          <p className="font-display text-6xl leading-[0.9] text-white/30 md:text-8xl">
            Seven houses.
            <span className="block text-marvel">One trophy.</span>
          </p>
        </div>
      </HorizontalScroll>

      {/* Timeline: vertical → horizontal */}
      <HorizontalScroll
        id="timeline"
        header={
          <SectionHeading
            kicker="Timeline"
            title="The Road to Endgame"
            subtitle="Journey through the Karandak milestones."
          />
        }
      >
        {timeline.map((t, i) => (
          <TimelineCard key={t.title} item={t} index={i} />
        ))}
        <div className="flex w-[70vw] shrink-0 flex-col justify-center gap-4 md:w-[36vw]">
          <p className="font-display text-6xl leading-[0.9] md:text-7xl">
            The story <span className="text-marvel">continues…</span>
          </p>
          <Link
            href="/timeline"
            className="panel self-start bg-white px-6 py-2 font-display text-xl tracking-widest text-black"
          >
            Full Timeline →
          </Link>
        </div>
      </HorizontalScroll>

      {/* Gallery: vertical → horizontal */}
      <HorizontalScroll
        id="gallery"
        className="bg-zinc-950"
        header={
          <SectionHeading
            kicker="Event Gallery"
            title="Relive the Heroic Moments"
            subtitle="Highlights from past Karandaks (photos to be added)."
          />
        }
      >
        {gallery.map((g, i) => (
          <GalleryCard key={g} title={g} index={i} />
        ))}
      </HorizontalScroll>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-32 text-center">
        <div className="halftone absolute inset-0" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(230,36,41,0.35),transparent_60%)]" aria-hidden />
        <Reveal>
          <h2 className="relative font-display text-6xl leading-[0.85] md:text-9xl">
            Whatever it takes.
            <span className="block text-marvel">1 · 11 · 2026</span>
          </h2>
        </Reveal>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/events" className="panel bg-marvel px-8 py-3 font-display text-2xl tracking-widest">
            Rulebooks
          </Link>
          <Link href="/scoreboard" className="panel bg-white px-8 py-3 font-display text-2xl tracking-widest text-black">
            Scoreboard
          </Link>
        </div>
      </section>
    </>
  );
}
