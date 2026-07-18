export function BrandLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Forward-motion chevron mark */}
      <path
        d="M6 34 L20 10 L28 10 L14 34 Z"
        fill="url(#aida-grad)"
      />
      <path
        d="M20 34 L34 10 L42 10 L28 34 Z"
        fill="url(#aida-grad)"
        opacity="0.55"
      />
      <path d="M30 34 L36 24 L42 34 Z" fill="var(--accent)" opacity="0.9" />
      <defs>
        <linearGradient id="aida-grad" x1="6" y1="34" x2="42" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--accent-deep)" />
          <stop offset="1" stopColor="var(--accent-bright)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
