import Link from "next/link";
import { CtaBand } from "@/components/marketing/CtaBand";
import { site } from "@/content/site";

const services = [
  {
    title: "Full Truckload",
    body: "Dry van, reefer, and flatbed FTL across all 48 contiguous states — dispatched through an ISO 9001 quality system, not a load board lottery.",
    href: "/services",
    icon: (
      <path d="M3 17V7a1 1 0 0 1 1-1h9v11M13 9h4l3 3v5h-2M3 17h2m4 0h6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Pharma & Temp-Controlled",
    body: "GDP-certified reefer capacity with validated temperature control, continuous monitoring, and documented chain of custody for healthcare freight.",
    href: "/services",
    icon: (
      <path d="M12 3v10m0 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-10h3m-3 4h3" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Bonded & In-Bond Freight",
    body: "A bonded carrier for freight under customs control — in-bond moves, high-value cargo, and surety-backed handling end to end.",
    href: "/services",
    icon: (
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Zm-2.5 9 2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Expedited & Dedicated",
    body: "Team drivers for time-critical windows and dedicated recurring lanes when your supply chain can't absorb variability.",
    href: "/services",
    icon: (
      <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const lanes = [
  "Chicago → Dallas",
  "Newark → Atlanta",
  "Laredo → Chicago",
  "Indianapolis → Denver",
  "Memphis → Charlotte",
  "Columbus → Houston",
  "St. Louis → Phoenix",
  "Louisville → Newark",
];

const processSteps = [
  {
    step: "01",
    title: "Scope the load",
    body: "Lane, commodity, temperature range, compliance needs — we quote against a documented spec, not a guess.",
  },
  {
    step: "02",
    title: "Certified dispatch",
    body: "Equipment and drivers assigned under ISO 9001 work instructions; GDP loads get validated units and monitoring.",
  },
  {
    step: "03",
    title: "Tracked in transit",
    body: "Live check calls and exception alerts. If anything drifts — temperature, ETA, docs — you hear it from us first.",
  },
  {
    step: "04",
    title: "Clean delivery & POD",
    body: "Documented handoff, signed POD, and audit-ready records retained for every shipment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section-pad relative overflow-hidden border-b border-[var(--line)]">
        <div className="aurora pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-max relative grid gap-14 py-24 sm:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {site.certifications.map((c) => (
                <span
                  key={c.key}
                  className="rounded-full border border-[var(--line-strong)] bg-surface px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent-bright"
                >
                  {c.short}
                </span>
              ))}
              <span className="relative ml-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-ink-dim">
                <span className="relative inline-flex h-2 w-2">
                  <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Dispatching now
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Freight that
              <br />
              can&apos;t fail rides
              <br />
              <span className="bg-gradient-to-r from-accent-bright via-accent to-accent-deep bg-clip-text text-transparent">
                with Aida.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
              {site.name} is an interstate trucking company built for regulated, high-stakes
              freight — ISO 9001 quality systems, GDP-certified pharma handling, and bonded
              coverage on every qualifying move.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/quote" className="btn-accent rounded-full px-8 py-3.5 text-sm font-bold">
                Get a Quote
              </Link>
              <Link
                href="/compliance"
                className="btn-ghost rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                See our certifications
              </Link>
            </div>
          </div>

          {/* Cert panel */}
          <div className="card relative overflow-hidden p-8">
            <p className="kicker">Why shippers choose Aida</p>
            <ul className="mt-6 space-y-6">
              {site.certifications.map((c) => (
                <li key={c.key} className="border-b border-[var(--line)] pb-6 last:border-0 last:pb-0">
                  <h3 className="flex items-center gap-2.5 text-base font-bold">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
                      <path d="m9 12 2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{c.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad border-b border-[var(--line)] bg-bg-raised py-14">
        <div className="container-max grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            ["48", "States covered"],
            ["3", "Active certifications"],
            ["24/7", "Dispatch & tracking"],
            ["100%", "Audit-ready records"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-4xl font-bold tracking-tight text-accent-bright">{value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-ink-dim">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANES MARQUEE */}
      <div className="overflow-hidden border-b border-[var(--line)] py-4" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-ink-faint">
          {[...lanes, ...lanes].map((lane, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{lane}</span>
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section-pad py-24">
        <div className="container-max">
          <p className="kicker">Services</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              Capacity for freight that carries consequences
            </h2>
            <Link
              href="/services"
              className="btn-ghost rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              All services
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card reveal group p-8">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
                <h3 className="mt-5 text-xl font-bold tracking-tight group-hover:text-accent-bright">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad border-t border-[var(--line)] bg-bg-raised py-24">
        <div className="container-max">
          <p className="kicker">How we run a load</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Process is the product
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.step} className="card reveal p-7">
                <div className="font-mono text-sm font-bold text-accent">{p.step}</div>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-dim">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
