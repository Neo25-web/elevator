# Classic Elevators — Business Context

> Single source of truth for who this business is and what this website is for.
> Last updated: 2026-07-18

## The Business

- **Name:** Classic Elevators (also operates as "Classic Elevator Engineering Daska")
- **Type:** Family-run elevator manufacturer and installation/service company
- **Established:** 2005–2006 (~20 years in business)
- **Base:** Pasrur Road, Islampura, Daska (Sialkot district, Punjab, Pakistan)
- **Phone:** 0300 6108294 (shown on Google Business Profile)
- **Second contact:** Jamil Mughal — 0300 7450805 (runs the YouTube channel)
- **Website (this repo):** planned domain `https://classicelevators.com.pk` — not yet registered/live
- **Email (planned):** info@classicelevators.com.pk

## Service Areas

Home base is Daska; the family has worked across:

Daska · Sialkot · Lahore · Gujrat · Wazirabad · Jhelum · Islamabad · Shakargarh · Pasrur

## Products & Services

**Elevators**
- Passenger elevators — hospitals, malls, commercial and residential buildings
- Home lifts — 2-person passenger and 100–500 kg goods/kitchen lifts for houses (page added 2026-09-30)
- Capsule / panoramic lifts — premium glass lifts
- Freight / loader lifts — industrial, many sizes (owner: "kaafi lambi list" — full list pending)

**Control Panels** (added to site 2026-07-18)
- Manual (relay/contactor) control panels — freight and basic installations
- Microprocessor (chip-based) VVVF panels — serial/CAN bus, fault diagnostics

**Client types:** hospitals, malls/commercial buildings, industrial facilities (factories, warehouses)

## Current Online Presence (as of 2026-07-18)

| Asset | Status |
|---|---|
| Google Business Profile | Exists ("Classic Elevators", Manufacturer in Daska, open 24 hours) but **UNCLAIMED** — shows "Own this business?" |
| Google reviews | Only 1 review, 4.0 stars |
| YouTube | "Classic Elevator Engineering Daska" (@JamilMughal805) — 188 subscribers, 374 videos; ranks in Google for the business name |
| Website | None yet — this repo is the first website |
| Facebook / Instagram / TikTok | Unknown / to be confirmed with owner |

## Naming Confusion to Manage

- **classicelevator.com** — Classic Elevator India Ltd, an unrelated Indian company that currently takes the top organic result for "classic elevators". This is why the domain must be `.com.pk`/`.pk` and all branding should say "Pakistan" or "Daska".
- The Google Business Profile ("Classic Elevators") and the YouTube channel ("Classic Elevator Engineering Daska") are **the same family business** — confirmed by the owner's family. Long-term, name/address/phone (NAP) should be made consistent everywhere.

## Website Status (this repo)

Next.js 15 App Router + Tailwind v4, static export ready, deployed via Netlify config.
Pages: Home, Products (grouped: Elevators / Control Panels), product detail pages, Technology, Projects, Contact (WhatsApp-based quote form).

**Real data already in the site:** phone, address, service areas, "since 2005", 20 years stat, product lineup.

**Still placeholder — DO NOT ship as-is:**
- Product and project images are frames from our YouTube Shorts (`ytThumb(videoId)` in `lib/site.js`). Swap in real photos by setting `hero` / a gallery item's `src` to a `/products/*.jpg` path.
- Technology page has some "Placeholder:" descriptions.
- About section image is a stock Unsplash photo.

## Pending From Owner

1. Real project photos (projects list is done — 16 installations from YouTube "Installation At …" titles are live on /projects, using video thumbnails; more sites named in other video titles still need confirming with Jamil)
2. Confirm WhatsApp number (form currently sends to 0300 6108294)
3. Real photos of installations, factory, panels
4. Facebook/Instagram page links (if any) for footer + structured data
5. Confirm exact founding year (2005 vs 2006) if "Since 2005" needs adjusting
6. Register the domain `classicelevators.com.pk` — **in progress** at HosterPK (Rs. 3,899 / 2 yrs) as of 2026-07-18; see [LAUNCH-STEPS.md](LAUNCH-STEPS.md) for what comes after
