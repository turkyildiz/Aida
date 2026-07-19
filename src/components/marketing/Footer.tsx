import Link from "next/link";
import { site } from "@/content/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-bg-raised">
      <div className="container-max section-pad grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
            <BrandLogo className="h-8 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-dim">
            {site.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {site.certifications.map((c) => (
              <span
                key={c.key}
                className="rounded-full border border-[var(--line-strong)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-dim"
              >
                {c.short}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="kicker">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {[{ href: "/", label: "Home" }, ...site.nav, { href: "/quote", label: "Get a Quote" }].map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-dim transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div>
          <h3 className="kicker">Dispatch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-dim">
            <li>
              <a href={site.phoneHref} className="font-semibold text-ink hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.street}, {site.address.city}, {site.address.region} {site.address.zip}
            </li>
            <li className="pt-2 text-xs text-ink-faint">
              {site.usdot} · {site.mc}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container-max section-pad flex flex-col justify-between gap-2 py-5 text-xs text-ink-faint sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.legalName} All rights reserved.
          </span>
          <span>ISO 9001 · GDP Certified · Bonded · Interstate USA</span>
        </div>
      </div>
    </footer>
  );
}
