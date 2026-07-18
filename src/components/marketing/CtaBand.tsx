import Link from "next/link";
import { site } from "@/content/site";

export function CtaBand() {
  return (
    <section className="section-pad relative overflow-hidden py-20">
      <div className="aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-max card relative overflow-hidden p-10 text-center sm:p-14">
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <p className="kicker">Ready when you are</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Put certified capacity on your next lane
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-dim sm:text-base">
            ISO 9001 process discipline, GDP-grade handling, and bonded coverage — one carrier,
            every state.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/quote" className="btn-accent rounded-full px-8 py-3.5 text-sm font-bold">
              Get a Quote
            </Link>
            <a
              href={site.phoneHref}
              className="btn-ghost rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
