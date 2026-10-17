import Reveal from "./Reveal";

export default function PageHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-16">
      <div className="halftone absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(230,36,41,0.3),transparent_60%)]"
        aria-hidden
      />
      <Reveal>
        <p className="relative mb-3 inline-block bg-marvel px-2 py-0.5 font-display text-sm tracking-[0.3em]">
          {kicker}
        </p>
        <h1 className="relative font-display text-7xl leading-[0.85] md:text-[9rem]">{title}</h1>
        <p className="relative mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>
      </Reveal>
    </section>
  );
}
