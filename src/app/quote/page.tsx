import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { QuoteForm } from "@/components/marketing/QuoteForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request an interstate FTL, temperature-controlled, or bonded freight quote from Aida Logistics.",
};

const expectations = [
  "Lane and equipment reviewed by a dispatcher, not an algorithm",
  "GDP loads scoped with temperature range and monitoring plan",
  "Bonded / in-bond moves checked for documentation requirements",
  "A firm rate and pickup plan — or an honest no",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        kicker="Get a Quote"
        title="Scope your lane. We'll come back with a plan."
        lead="Share the essentials below — the more compliance context you give us, the faster the rate."
      />

      <section className="section-pad py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card self-start p-8">
            <p className="kicker">What happens next</p>
            <ul className="mt-6 space-y-4">
              {expectations.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim">
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
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-[var(--line)] bg-surface p-5 text-sm text-ink-dim">
              Hot load?{" "}
              <a href={site.phoneHref} className="font-bold text-accent">
                Call {site.phone}
              </a>{" "}
              — dispatch answers 24/7.
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
