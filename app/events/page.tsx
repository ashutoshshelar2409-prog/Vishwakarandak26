import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import OfficialEventExplorer from "@/components/OfficialEventExplorer";
import VierpGuide from "@/components/VierpGuide";
import Reveal from "@/components/Reveal";
import { RulebookCard } from "@/components/Cards";
import { rulebooks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Official Event Roster & VIERP Fee Calculator · Vishwakarandak'26 | VIT Pune",
  description: "Official 60+ sports, technical, gaming, and performing arts event roster with verified VIERP codes and payment protocol.",
};

export default function EventsPage() {
  return (
    <div className="pt-8">
      <PageHeader
        kicker="Hero Protocols & Official Roster"
        title="Multiverse Event Arenas"
        subtitle="Search verified VIERP event codes, calculate registration fees, and review official guidelines across 60+ collegiate competitions."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 md:grid-cols-3 md:px-8">
        {rulebooks.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.1}>
            <RulebookCard {...r} />
          </Reveal>
        ))}
      </section>

      {/* Official 60+ Event Explorer & Multi-Event VIERP Fee Calculator */}
      <OfficialEventExplorer />

      {/* Official VIERP 6-Step Payment Guide */}
      <VierpGuide />
    </div>
  );
}
