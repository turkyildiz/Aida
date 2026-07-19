import type { Metadata } from "next";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Compliance & Certifications",
  description:
    "ISO 9001 quality management, GDP certification for pharmaceutical distribution, and bonded carrier status — the compliance backbone of Aida Logistics.",
};

const detail = [
  {
    short: "ISO 9001",
    name: "ISO 9001 — Quality Management System",
    body: "Our entire operation — quoting, dispatch, driver management, incident handling, corrective action — runs inside an independently audited quality-management system. That means documented procedures, measurable KPIs, and continuous improvement instead of tribal knowledge.",
    items: [
      "Documented SOPs for dispatch, transit, and delivery",
      "Internal audits and management review cycles",
      "Corrective & preventive action (CAPA) on every exception",
      "Supplier and driver qualification records",
    ],
  },
  {
    short: "GDP",
    name: "GDP — Good Distribution Practice",
    body: "GDP certification qualifies Aida to move pharmaceuticals and healthcare products under the quality standards regulators and pharma QA teams demand: validated equipment, temperature integrity, traceability, and trained personnel across the chain.",
    items: [
      "Validated, calibrated temperature-controlled equipment",
      "Continuous temperature monitoring with excursion alerts",
      "Chain-of-custody and full shipment traceability",
      "GDP-trained drivers and quality agreements with shippers",
    ],
  },
  {
    short: "Bonded",
    name: "Bonded Carrier Status",
    body: "Bonded status lets Aida legally transport freight that hasn't cleared customs and shipments requiring surety protection. For importers and high-value shippers, that removes an entire category of risk and paperwork friction.",
    items: [
      "In-bond transportation (IT / T&E entries)",
      "Surety bond coverage on qualifying freight",
      "Strict seal, custody, and documentation controls",
      "Experience with customs-controlled cargo handling",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        kicker="Compliance"
        title="Certifications that are audited, not advertised"
        lead="Most carriers claim reliability. Aida proves it with third-party certifications that regulated shippers can verify and audit."
      />

      <section className="section-pad py-20">
        <div className="container-max grid gap-6">
          {detail.map((d) => (
            <article key={d.short} className="card reveal p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-xl border border-[var(--line-strong)] bg-surface px-4 py-2 font-mono text-sm font-bold text-accent-deep">
                  {d.short}
                </span>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{d.name}</h2>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-dim sm:text-base">
                {d.body}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {d.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-dim">
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
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="card p-8 text-sm leading-relaxed text-ink-dim">
            <p className="kicker">Verification</p>
            <p className="mt-3">
              Certification documents, audit summaries, and insurance certificates are available to
            shippers on request — email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-accent">
                {site.email}
              </a>{" "}
              and we&apos;ll send the current versions along with our {site.usdot} and {site.mc}{" "}
              details.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
