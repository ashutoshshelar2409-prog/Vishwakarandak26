export default function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-2 inline-block bg-marvel px-2 py-0.5 font-display text-sm tracking-[0.3em] text-white">
        {kicker}
      </p>
      <h2 className="font-display text-5xl leading-[0.9] tracking-wide md:text-7xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-white/60 md:text-lg">{subtitle}</p>}
    </div>
  );
}
