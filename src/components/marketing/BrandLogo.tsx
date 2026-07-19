/* eslint-disable @next/next/no-img-element */
export function BrandLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src="/brand/aida-logo-full.svg"
      alt="Aida Logistics"
      className={className}
      width={215}
      height={76}
    />
  );
}

/** Square flower mark only (favicons, small placements) */
export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/brand/aida-mark.svg"
      alt=""
      aria-hidden="true"
      className={className}
      width={80}
      height={80}
    />
  );
}
