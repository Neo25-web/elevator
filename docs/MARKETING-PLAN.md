# Classic Elevators — Launch & Marketing Plan

> Companion to [BUSINESS-CONTEXT.md](BUSINESS-CONTEXT.md). Ordered by priority — each phase builds on the previous one.
> Last updated: 2026-07-18

## Goal

Make Classic Elevators the top result for elevator/lift searches in Daska, Sialkot, Gujranwala division and the surrounding cities it serves — and turn 20 years of offline reputation into online inquiries via WhatsApp.

**Primary conversion:** WhatsApp message (the site's quote form already opens WhatsApp).
**Secondary:** phone call from Google Business Profile.

---

## Phase 0 — Before Launch (blockers)

- [ ] Register domain: **classicelevators.com.pk** (PKNIC, ~Rs. 3,000–3,500 / 2 years). Also grab `classicelevators.pk` if available and redirect it. Do NOT use `.com` — classicelevator.com belongs to an unrelated Indian company.
- [ ] Set up email on the domain: `info@classicelevators.com.pk` (Zoho Mail free tier or Google Workspace). Use this for all business signups below — never a personal Gmail.
- [ ] Confirm WhatsApp number and real project list from owner (see Pending list in BUSINESS-CONTEXT.md).
- [ ] Replace placeholder projects and swap in real photos wherever available.
- [ ] Deploy to Netlify, connect domain, verify HTTPS.

## Phase 1 — Foundation (week 1–2, essentially free, highest impact)

### 1. Claim the Google Business Profile
It currently shows "Own this business?" — it is unclaimed. Claim at business.google.com/pk (verification is usually by phone or postcard). Then:
- Add website link, hours, WhatsApp
- Categories: "Elevator manufacturer" + "Elevator service" + "Elevator supplier"
- Upload 15–20 real photos: installations, cabins, control panels, factory, team
- Fill the services list (passenger lifts, capsule lifts, freight/loader lifts, control panels, maintenance)
- Write the business description mentioning Daska, Sialkot and all service cities

### 2. Review generation — the single biggest lever
20 years of clients = a long list of people who can leave reviews. Currently there is **1 review**; competitors are equally weak, so 20–30 genuine reviews will dominate local search.
- Get the GBP review short-link after claiming
- WhatsApp it personally to past clients (a short Urdu message + link)
- Target: 5 reviews/week until 30+. Never buy fake reviews — Google filters them and can suspend the profile.

### 3. NAP consistency
Same Name / Address / Phone everywhere: website footer, GBP, Facebook, YouTube channel description.
Decide the canonical public name (recommend **"Classic Elevators"** with "Classic Elevator Engineering" as a secondary mention) and use it identically on every platform.

### 4. Social profiles
- Facebook Business Page + Instagram (link them), using the domain email
- Add YouTube channel + Facebook links to the site footer and to `sameAs` in the JSON-LD in `app/layout.js`
- WhatsApp **Business** app on 0300 6108294: business profile, catalog with products, greeting/auto-reply message

## Phase 2 — Content Engine (ongoing, 1–2 posts/week)

Video already works in this niche — the family's YouTube channel (374 videos) is what currently ranks for the business name. Systematize it:

1. **Per-installation video** (~1 minute): site before/after, cabin finish, running test. Post to YouTube + TikTok + Facebook Reels + Instagram. TikTok is very strong in Pakistan for trades and generates direct inquiries.
2. **Per-project website entry**: once the real project list arrives, each notable project gets an entry with city name — this is what captures "lift installation Sialkot / Gujrat / Wazirabad" searches.
3. **Simple FAQ/price-guide content** (page or posts): "Ghar ke liye lift ka kharcha", "8-person lift specifications", "manual vs microprocessor panel" — these match what Pakistanis actually search. Mixed Urdu/English is fine and often better.
4. **Google Business Profile posts**: monthly photo/update posts keep the profile active (ranking signal).

## Phase 3 — Paid (only after Phases 1–2 are live)

Do not spend on ads until the profile is claimed, reviews are 15+, and the site shows real projects — otherwise ad clicks won't convert.

1. **Google Search Ads** — Rs. 15–20k/month test budget on high-intent keywords: "lift price in pakistan", "elevator company sialkot", "cargo lift manufacturer", "home lift lahore". Location-target the service cities. Send traffic to the products/contact pages.
2. **Facebook/Instagram ads** — target builders, architects, factory owners in a Sialkot–Gujranwala–Lahore radius; use installation videos as creatives (video ads are cheap in Pakistan).
3. Measure: WhatsApp clicks and calls are the KPIs. If a month of ads produces no inquiries, fix the landing page before spending more.

## Phase 4 — Offline & Referral (parallel, low effort)

- Business cards + factory signboard with website URL and a QR code to WhatsApp
- Sticker/plate inside every installed lift cabin: "Installed & serviced by Classic Elevators — 0300 6108294 — classicelevators.com.pk" (every ride is an ad, and it drives maintenance calls)
- Ask builders/contractors for referrals; consider a simple referral commission
- List on Pakistani B2B directories (free backlinks + citations): Zarea, BusinessList.pk, Yellow Pages of Pakistan, TradeKey

## SEO Notes (already implemented in the site)

- LocalBusiness JSON-LD with Daska address + all 9 service cities (`app/layout.js`)
- City names woven into page metadata (products, projects, contact)
- Sitemap + robots.txt auto-generated
- Per-product static pages (5 products) — each is an SEO landing page

**To do when data arrives:** real project pages per city, real photos with descriptive filenames/alt text, YouTube/Facebook in `sameAs`.

## 90-Day Milestones

| By | Milestone |
|---|---|
| Week 2 | Domain live, GBP claimed, site deployed with real contact info |
| Week 4 | 10+ Google reviews, social pages live, WhatsApp Business catalog set up |
| Week 8 | 20+ reviews, real projects on site, 8+ videos posted across platforms |
| Week 12 | 30+ reviews, ranking top-3 in map pack for "elevator company daska/sialkot", first ad experiment decision |

## Budget Summary (approx.)

| Item | Cost |
|---|---|
| Domain (.com.pk, 2 yrs) | Rs. 3,000–3,500 |
| Email (Zoho free / Google Workspace) | Rs. 0 – 1,800/user/mo |
| Hosting (Netlify) | Rs. 0 |
| GBP, reviews, social, YouTube/TikTok | Rs. 0 (time only) |
| Cabin stickers + cards + QR signboard | Rs. 10–20k one-time |
| Google/Facebook ads (optional, Phase 3) | Rs. 15–30k/month |
