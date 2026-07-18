import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aida Logistics is a certified interstate trucking company built around quality systems, pharma-grade handling, and bonded freight capability.",
};

const values = [
  {
    title: "Certified, not claimed",
    body: "ISO 9001, GDP, and bonded status are third-party obligations we maintain and re-audit — not marketing language. If a standard matters to your freight, we can show the paperwork.",
  },
  {
    title: "Own the outcome",
    body: "One dispatcher owns your load start to finish. No ticket queues, no handoffs into the void — a person with a name is accountable for every shipment.",
  },
  {
    title: "Say the hard thing early",
    body: "If a window is at risk or a lane doesn't fit our equipment, we tell you before you book. Long-term shippers are earned with honesty, not optimism.",
  },
  {
    title: "Built to be audited",
    body: "Every load leaves a clean record — PODs, temperature logs, custody documents. When your QA or customs team asks, the answer is a file, not a shrug.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A trucking company engineered like a quality system"
        lead={`${site.name} moves interstate freight for shippers whose cargo carries regulatory, financial, or clinical consequences — and runs every mile inside a certified process.`}
      />

      <section className="section-pad py-20">
        <div className="container-max grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-sm leading-relaxed text-ink-dim sm:text-base">
            <p>
              Aida Logistics was built on a simple observation: most freight problems aren&apos;t
              truck problems — they&apos;re process problems. Missed appointments, temperature
              excursions, lost paperwork, and silent delays all trace back to operations that were
              never designed, only accumulated.
            </p>
            <p>
              So we designed ours. Dispatch, driver management, maintenance, and claims all run
              inside an ISO 9001 quality-management system. Our GDP certification extends that
              discipline to pharmaceutical and healthcare freight, and our bonded status lets us
              carry customs-controlled and high-value cargo that ordinary carriers can&apos;t touch.
            </p>
            <p>
              The result is a carrier that regulated shippers can audit, contract, and rely on —
              across all 48 contiguous states, 24/7.
            </p>
          </div>

          <div className="card grid gap-5 self-start p-8">
            <p className="kicker">At a glance</p>
            {[
              ["Coverage", "48 contiguous states"],
              ["Certifications", "ISO 9001 · GDP · Bonded"],
              ["Freight focus", "FTL, pharma, bonded, expedited"],
              ["Operations", "24/7 dispatch & tracking"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4 last:border-0 last:pb-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-dim">{k}</span>
                <span className="text-sm font-bold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--line)] bg-bg-raised py-20">
        <div className="container-max">
          <p className="kicker">How we operate</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Operating principles</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card reveal p-8">
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
