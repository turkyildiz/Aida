import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "FTL, GDP-certified temperature-controlled, bonded, expedited, and dedicated interstate trucking services from Aida Logistics.",
};

const services = [
  {
    title: "Full Truckload (FTL)",
    tag: "Core",
    body: "Dry van, reefer, and flatbed truckload across the contiguous U.S. Every load is dispatched through documented ISO 9001 work instructions — carrier vetting, equipment checks, and escalation paths are standardized, not improvised.",
    points: ["53' dry van, reefer, flatbed", "48-state interstate authority", "Live tracking & check calls"],
  },
  {
    title: "Pharmaceutical & Temperature-Controlled",
    tag: "GDP Certified",
    body: "Good Distribution Practice certification means validated equipment, calibrated monitoring, trained drivers, and complete chain-of-custody documentation — the requirements healthcare and life-science shippers audit for.",
    points: ["Validated temp-controlled units", "Continuous monitoring & alerts", "Quality agreements & audit support"],
  },
  {
    title: "Bonded & In-Bond Freight",
    tag: "Bonded",
    body: "As a bonded carrier we move freight still under customs control — in-bond transits, high-value commodities, and shipments where surety coverage and airtight documentation are non-negotiable.",
    points: ["In-bond (IT / T&E) moves", "Surety-backed liability", "Customs documentation discipline"],
  },
  {
    title: "Expedited & Time-Critical",
    tag: "Speed",
    body: "Team drivers and priority dispatch for windows that can't slip — line-down parts, launch freight, and dated product. Scoped honestly: if a window isn't achievable, we say so before you book.",
    points: ["Team-driver coverage", "Direct, no-relay routing", "Proactive ETA management"],
  },
  {
    title: "Dedicated & Recurring Lanes",
    tag: "Contract",
    body: "Committed capacity on repeat lanes — fixed equipment, consistent drivers, and rates that hold. Ideal for shippers replacing spot-market chaos with a partner that shows up every week.",
    points: ["Committed weekly capacity", "Consistent drivers & equipment", "Quarterly performance reviews"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Interstate trucking, specialized for regulated freight"
        lead="From standard FTL to GDP pharma lanes and bonded moves — one certified carrier, one accountable team."
      />
      <section className="section-pad py-20">
        <div className="container-max grid gap-6">
          {services.map((s) => (
            <article key={s.title} className="card reveal grid gap-6 p-8 md:grid-cols-[1fr_260px] md:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold tracking-tight">{s.title}</h2>
                  <span className="rounded-full border border-[var(--line-strong)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-deep">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-dim sm:text-base">
                  {s.body}
                </p>
              </div>
              <ul className="space-y-2.5 self-center">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2.2"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
