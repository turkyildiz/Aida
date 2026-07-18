/**
 * Central site content/config for Aida Logistics.
 * Contact details sourced from aidalogistics.com; USDOT/MC verified
 * against FMCSA SAFER (snapshot as of 2026-07-16).
 */
export const site = {
  name: "Aida Logistics",
  legalName: "Aida Logistics LLC.",
  tagline: "Certified interstate freight, engineered for reliability",
  description:
    "Aida Logistics is an ISO 9001 and GDP certified, bonded interstate trucking company moving FTL, temperature-controlled, and high-compliance freight across the United States.",
  url: "https://aidalogistics.com",
  phone: "(708) 980-3183",
  phoneHref: "tel:+17089803183",
  email: "info@aidalogistics.com",
  address: {
    street: "2415 Birch St",
    city: "Des Plaines",
    region: "IL",
    zip: "60018",
    country: "United States",
  },
  founded: "Interstate carrier",
  usdot: "USDOT 4187601",
  mc: "MC-1613295",
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
