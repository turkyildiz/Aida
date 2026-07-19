import Link from "next/link";
import { site } from "@/content/site";

export function CtaBand() {
  return (
    <section className="section-pad py-20">
      <div className="container-max relative overflow-hidden rounded-2xl bg-navy p-10 text-center text-white sm:p-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 300px at 20% 0%, rgba(255, 8, 68, 0.18), transparent 70%), radial-gradient(700px 380px at 85% 100%, rgba(255, 8, 68, 0.1), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Put certified capacity on your next lane
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            ISO 9001 process discipline, GDP-grade handling, and bonded coverage — one carrier,
            every state.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/quote" className="btn-accent rounded-full px-8 py-3.5 text-sm font-bold">
              Get a Quote
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
