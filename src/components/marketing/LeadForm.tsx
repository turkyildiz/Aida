"use client";

import { useState, useTransition } from "react";
import { submitContactLead, type LeadActionResult } from "@/app/actions/leads";
import { site } from "@/content/site";

const inputClass =
  "w-full rounded-lg border border-[var(--line-strong)] bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";

export function LeadForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<LeadActionResult | null>(null);

  if (result?.ok) {
    return (
      <div className="card p-8">
        <p className="kicker">Message received</p>
        <h3 className="mt-2 text-2xl font-bold">We&apos;re on it</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">
          Thanks — your message was saved. Our team will follow up shortly. For urgent loads, call{" "}
          <a href={site.phoneHref} className="font-semibold text-accent">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="btn-ghost mt-6 rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      className="card grid gap-4 p-8"
      action={(formData) => {
        startTransition(async () => {
          setResult(await submitContactLead(formData));
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-dim">
          Name
          <input name="name" required placeholder="Jane Rivera" className={inputClass} />
        </label>
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-dim">
          Company
          <input name="company" placeholder="Acme Pharma" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-dim">
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </label>
        <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-dim">
          Phone
          <input name="phone" type="tel" placeholder="(312) 555-0100" className={inputClass} />
        </label>
      </div>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-dim">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your freight — lanes, volume, compliance needs."
          className={inputClass}
        />
      </label>

      {result && !result.ok ? (
        <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {result.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-accent mt-2 rounded-full px-6 py-3 text-sm font-bold disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
