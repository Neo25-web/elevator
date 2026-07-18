# Classic Elevators — Launch Steps (Domain → Live Website)

> Step-by-step guide to take the site live after the domain is registered.
> Anyone with access to this repo (Neo25-web/elevator) can follow this — no prior context needed.
> See [BUSINESS-CONTEXT.md](BUSINESS-CONTEXT.md) for business details and [MARKETING-PLAN.md](MARKETING-PLAN.md) for the full marketing plan.
> Last updated: 2026-07-18

## Current Status

- [x] Website code complete (Next.js, this repo) — real contact info, products, control panels
- [ ] Domain `classicelevators.com.pk` — registration in progress at HosterPK (Rs. 3,899 / 2 yrs)
- [ ] Real projects list + photos from owner — **pending**; site currently has placeholder projects
- [ ] Deployed to Netlify
- [ ] Google Business Profile claimed

---

## Step 1 — Deploy website to Netlify (same day as domain)

1. Create an account at [netlify.com](https://netlify.com) — sign up with GitHub for easy repo access. Prefer a business-owned account/email, not a personal one.
2. Click **Add new site → Import an existing project → GitHub** → select `Neo25-web/elevator`.
3. Build settings are already in the repo (`netlify.toml`) — just click Deploy.
4. Site goes live at a temporary `*.netlify.app` URL first. Verify all pages work: Home, Products (both categories), product detail pages, Technology, Projects, Contact (WhatsApp form should open WhatsApp with a pre-filled message to 0300 6108294).

## Step 2 — Connect the domain

1. In Netlify: **Site settings → Domain management → Add custom domain** → enter `classicelevators.com.pk`.
2. Easiest route: use **Netlify DNS** — Netlify shows 4 nameservers (like `dns1.p0X.nsone.net`). In the HosterPK client area, open the domain's nameserver settings and replace HosterPK's nameservers with Netlify's.
   - Alternative: keep DNS at HosterPK and add the A/CNAME records Netlify shows instead.
3. Netlify auto-provisions the free HTTPS certificate once DNS resolves.
4. DNS propagation can take a few hours (up to 24–48h). Test at `https://classicelevators.com.pk` after.
5. If `classicelevators.pk` was also purchased, add it as a domain alias in Netlify — it will redirect to the main domain.

## Step 3 — Business email

1. Sign up for [Zoho Mail free plan](https://www.zoho.com/mail/) (5 users free) with the domain `classicelevators.com.pk`.
2. Create `info@classicelevators.com.pk`.
3. Zoho gives MX/TXT (SPF, DKIM) records — add them in the same DNS panel used in Step 2 (Netlify DNS or HosterPK).
4. Use this email for all business signups going forward (Netlify, Google Business, Facebook, etc.).

## Step 4 — Claim Google Business Profile (highest-impact marketing step)

The profile "Classic Elevators" (Manufacturer in Daska, Pasrur Rd, Islampura, 0300 6108294) exists but is **unclaimed** — Google shows "Own this business?".

1. Go to [business.google.com](https://business.google.com), search for the business, click **Claim this business**.
2. Complete Google's verification (phone call, SMS, or video verification).
3. After claiming, fill everything:
   - Website: `https://classicelevators.com.pk`
   - Categories: Elevator manufacturer + Elevator service + Elevator supplier
   - 15–20 real photos (installations, cabins, control panels, factory)
   - Services list and business description mentioning Daska, Sialkot, Lahore, Gujrat, Wazirabad, Jhelum, Islamabad, Shakargarh, Pasrur

## Step 5 — Start collecting reviews (parallel, ongoing)

1. After claiming, get the review short-link from the GBP dashboard.
2. WhatsApp it personally to past clients (20 years of clients = big list). Short Urdu message + link.
3. Target 5 reviews/week until 30+. Only genuine reviews — never purchased ones.

---

## Before/at launch — content still needed from the owner

| Item | Where it goes |
|---|---|
| Real projects list (name, city, what was installed) | `projects` array in `lib/site.js` — currently fake placeholders |
| Installation/factory photos | Replace placeholder SVGs (see `// real: *.jpg` comments in `lib/site.js`) |
| WhatsApp number confirmation | Form sends to 0300 6108294 — confirm this has WhatsApp |
| Facebook/YouTube links | Footer + `sameAs` in `app/layout.js` JSON-LD |

Ideally the real projects go in **before Step 2** so the site launches with genuine content.

## Quick reference

- Repo: `Neo25-web/elevator` (branch: `main`)
- Local build check: `npm run build`
- Registrar: HosterPK (client area: hosterpk.com/clientarea)
- Hosting: Netlify (free tier)
- Planned email: Zoho Mail (free tier)
