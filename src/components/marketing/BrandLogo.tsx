/* eslint-disable @next/next/no-img-element */
export function BrandLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src="/brand/aida-logo.png"
      alt="Aida Logistics"
      className={className}
      width={170}
      height={42}
    />
  );
}

/** Square flower mark only (favicons, small placements) */
export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/brand/aida-icon.png"
      alt=""
      aria-hidden="true"
      className={className}
      width={270}
      height={270}
    />
  );
}
