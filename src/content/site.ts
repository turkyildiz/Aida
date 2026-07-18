/**
 * Central site content/config for Aida Logistics.
 *
 * PLACEHOLDERS: phone, email, address, DOT/MC numbers below are placeholders —
 * replace with the real company details before pointing the production domain here.
 */
export const site = {
  name: "Aida Logistics",
  legalName: "Aida Logistics, Inc.",
  tagline: "Certified interstate freight, engineered for reliability",
  description:
    "Aida Logistics is an ISO 9001 and GDP certified, bonded interstate trucking company moving FTL, temperature-controlled, and high-compliance freight across the United States.",
  url: "https://aida-logistics.vercel.app", // swap to production domain at launch
  phone: "(000) 000-0000", // PLACEHOLDER
  phoneHref: "tel:+10000000000", // PLACEHOLDER
  email: "dispatch@aidalogistics.example", // PLACEHOLDER
  address: {
    city: "Chicago metro", // PLACEHOLDER
    region: "IL",
    country: "United States",
  },
  founded: "Interstate carrier",
  usdot: "USDOT # —", // PLACEHOLDER — add real USDOT number
  mc: "MC # —", // PLACEHOLDER — add real MC number
  certifications: [
    {
      key: "iso9001",
      short: "ISO 9001",
      name: "ISO 9001 Certified",
      blurb:
        "Audited quality-management system across dispatch, driver operations, and claims — every load runs through a documented, repeatable process.",
    },
    {
      key: "gdp",
      short: "GDP",
      name: "GDP Certified",
      blurb:
        "Good Distribution Practice certification for pharmaceutical and healthcare freight — validated temperature control, chain-of-custody, and quality agreements.",
    },
    {
      key: "bonded",
      short: "Bonded",
      name: "Bonded Carrier",
      blurb:
        "Bonded for in-bond and high-value moves — freight under customs control travels with full surety coverage and airtight documentation.",
    },
  ],
  nav: [
    { href: "/services", label: "Services" },
    { href: "/compliance", label: "Compliance" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof site;
