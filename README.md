# Aida Logistics — marketing site

Dark, premium marketing site for **Aida Logistics** — an ISO 9001 / GDP certified, bonded
interstate trucking company.

- **Stack**: Next.js (App Router) · Tailwind CSS v4 · Supabase (lead capture) · Vercel (hosting)
- **Pages**: `/` home · `/services` · `/compliance` · `/about` · `/contact` · `/quote`
- **Forms**: contact → `leads` table, quote → `quote_requests` table (Supabase, RLS insert-only)

## Local dev

```bash
npm install
npm run dev
```

Create `.env.local` for form storage:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Before launch

Real company details must replace the placeholders in `src/content/site.ts`:
phone, email, address, USDOT #, MC #, production domain.

## Database

Run `supabase/migrations/0001_leads.sql` in the Supabase SQL editor to create
`leads` and `quote_requests` with insert-only RLS policies.
