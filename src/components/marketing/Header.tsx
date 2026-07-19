"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-xl">
      <div className="container-max section-pad flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
          <BrandLogo className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-ink-dim transition-colors hover:text-ink"
          >
            {site.phone}
          </a>
          <Link
            href="/quote"
            className="btn-accent rounded-full px-5 py-2.5 text-sm font-bold"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn-ghost rounded-lg p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-[var(--line)] bg-bg-raised md:hidden"
          aria-label="Mobile"
        >
          <div className="section-pad flex flex-col gap-1 py-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-dim hover:bg-surface hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="btn-accent mt-2 rounded-full px-5 py-2.5 text-center text-sm font-bold"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
