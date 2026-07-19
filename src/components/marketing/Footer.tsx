import Link from "next/link";
import { site } from "@/content/site";
import { BrandMark } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-max section-pad grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="h-9 w-9" />
            <span className="text-sm font-bold tracking-wide">
              AIDA <span className="font-medium text-white/60">LOGISTICS</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {site.certifications.map((c) => (
              <span
                key={c.key}
                className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70"
              >
                {c.short}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {[{ href: "/", label: "Home" }, ...site.nav, { href: "/quote", label: "Get a Quote" }].map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
            Dispatch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            <li>
              <a href={site.phoneHref} className="font-semibold text-white hover:text-accent-bright">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.street}, {site.address.city}, {site.address.region} {site.address.zip}
            </li>
            <li className="pt-2 text-xs text-white/40">
              {site.usdot} · {site.mc}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max section-pad flex flex-col justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.legalName} All rights reserved.
          </span>
          <span>ISO 9001 · GDP Certified · Bonded · Interstate USA</span>
        </div>
      </div>
    </footer>
  );
}
