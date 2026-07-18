import type { Metadata } from "next";
import { LeadForm } from "@/components/marketing/LeadForm";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Aida Logistics dispatch by phone, email, or the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to a person who will own your freight"
        lead="Questions, new lanes, compliance documents, or a hot pickup — reach us any way that suits you."
      />

      <section className="section-pad py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card self-start p-8">
            <p className="kicker">Dispatch</p>
            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink-dim">Phone</dt>
                <dd className="mt-1.5">
                  <a href={site.phoneHref} className="text-lg font-bold text-ink hover:text-accent">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink-dim">Email</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${site.email}`} className="font-semibold text-ink hover:text-accent">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink-dim">Location</dt>
                <dd className="mt-1.5 text-ink-dim">
                  {site.address.city}, {site.address.region}
                  <br />
                  {site.address.country}
                </dd>
              </div>
              <div className="border-t border-[var(--line)] pt-5 text-xs text-ink-faint">
                {site.usdot} · {site.mc}
                <br />
                Compliance documents available on request.
              </div>
            </dl>
          </div>

          <LeadForm />
        </div>
      </section>
    </>
  );
}
