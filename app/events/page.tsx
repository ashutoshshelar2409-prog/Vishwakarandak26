import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HorizontalScroll from "@/components/HorizontalScroll";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { GalleryCard, RulebookCard } from "@/components/Cards";
import { gallery, rulebooks } from "@/lib/data";

export const metadata: Metadata = { title: "Rulebooks · Vishwakarandak'26" };

export default function EventsPage() {
  return (
    <>
      <PageHeader
        kicker="Rulebooks"
        title="Hero Protocols"
        subtitle="Access the official guides and regulations for your journey through the multiverse."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-3 md:px-8">
        {rulebooks.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.1}>
            <RulebookCard {...r} />
          </Reveal>
        ))}
      </section>
      <HorizontalScroll
        className="bg-zinc-950"
        header={
          <SectionHeading
            kicker="Event Highlights"
            title="Moments Worth a Sequel"
            subtitle="A collection of memorable moments from past events."
          />
        }
      >
        {gallery.slice(0, 8).map((g, i) => (
          <GalleryCard key={g} title={g} index={i + 2} />
        ))}
      </HorizontalScroll>
    </>
  );
}
