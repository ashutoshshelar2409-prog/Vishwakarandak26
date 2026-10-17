import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HorizontalScroll from "@/components/HorizontalScroll";
import { TimelineCard } from "@/components/Cards";
import { timeline } from "@/lib/data";

export const metadata: Metadata = { title: "Timeline · Vishwakarandak'26" };

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        kicker="Event Timeline"
        title="The Saga So Far"
        subtitle="Journey through the Karandak milestones. Scroll down and the timeline moves sideways, phase by phase."
      />
      <HorizontalScroll className="bg-[linear-gradient(180deg,#07070a,#14070a,#07070a)]">
        <div className="flex w-[70vw] shrink-0 flex-col justify-center md:w-[30vw]">
          <p className="font-display text-7xl leading-[0.85] text-white/25 md:text-9xl">
            Phase
            <span className="block text-marvel">One →</span>
          </p>
        </div>
        {timeline.map((t, i) => (
          <TimelineCard key={t.title} item={t} index={i} />
        ))}
        <div className="flex w-[70vw] shrink-0 items-center md:w-[40vw]">
          <p className="font-display text-7xl leading-[0.85] md:text-9xl">
            To be
            <span className="block text-marvel">continued…</span>
          </p>
        </div>
      </HorizontalScroll>
      <div className="h-[30vh]" />
    </>
  );
}
