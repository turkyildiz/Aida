export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="section-pad relative overflow-hidden border-b border-[var(--line)] py-20 sm:py-24">
      <div className="aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-max relative">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
