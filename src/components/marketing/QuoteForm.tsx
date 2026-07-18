"use client";

import { useState, useTransition } from "react";
import { submitQuoteRequest, type LeadActionResult } from "@/app/actions/leads";
import { site } from "@/content/site";

const inputClass =
  "w-full rounded-lg border border-[var(--line-strong)] bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";
const labelClass = "grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-dim";

export function QuoteForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<LeadActionResult | null>(null);

  if (result?.ok) {
    return (
      <div className="card p-8">
        <p className="kicker">Request received</p>
        <h3 className="mt-2 text-2xl font-bold">Quote in progress</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-dim">
          Thanks — your lane details were saved. Dispatch will come back with a rate and plan
          shortly. Time-critical? Call{" "}
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
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      className="card grid gap-4 p-8"
      action={(formData) => {
        startTransition(async () => {
          setResult(await submitQuoteRequest(formData));
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Origin
          <input name="origin" required placeholder="City, ST or ZIP" className={inputClass} />
        </label>
        <label className={labelClass}>
          Destination
          <input name="destination" required placeholder="City, ST or ZIP" className={inputClass} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className={labelClass}>
          Service
          <select name="mode" className={inputClass} defaultValue="">
            <option value="">Select</option>
            <option>FTL</option>
            <option>Temperature-controlled (GDP)</option>
            <option>Bonded / in-bond</option>
            <option>Expedited</option>
            <option>Dedicated / recurring</option>
          </select>
        </label>
        <label className={labelClass}>
          Equipment
          <select name="equipment" className={inputClass} defaultValue="">
            <option value="">Select</option>
            <option>Dry Van</option>
            <option>Reefer</option>
            <option>Flatbed</option>
            <option>Step Deck</option>
            <option>Power Only</option>
          </select>
        </label>
        <label className={labelClass}>
          Ready date
          <input name="readyDate" type="date" className={inputClass} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Weight / units
          <input name="weight" placeholder="e.g. 42,000 lbs · 26 pallets" className={inputClass} />
        </label>
        <label className={labelClass}>
          Commodity
          <input
            name="cargo"
            placeholder="Commodity, temp range, hazmat?"
            className={inputClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        Notes
        <textarea
          name="message"
          rows={3}
          placeholder="Appointments, liftgate, temperature monitoring, in-bond docs…"
          className={inputClass}
        />
      </label>

      <div className="mt-2 border-t border-[var(--line)] pt-4">
        <p className="kicker">Your contact</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input name="name" required placeholder="Jane Rivera" className={inputClass} />
        </label>
        <label className={labelClass}>
          Company
          <input name="company" placeholder="Acme Pharma" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          Phone
          <input name="phone" type="tel" placeholder="(312) 555-0100" className={inputClass} />
        </label>
      </div>

      {result && !result.ok ? (
        <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {result.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-accent mt-2 rounded-full px-6 py-3 text-sm font-bold disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Request quote"}
      </button>
    </form>
  );
}
