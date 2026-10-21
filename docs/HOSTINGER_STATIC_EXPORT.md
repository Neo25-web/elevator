# Hosting on Hostinger as a static site (no Node process)

Written 2026-10-14 after the Hostinger "you have outgrown your hosting plan" email
on the shared Business plan (savereels.online, savereel.online, this site and a
test site all live on it).

## Why

Hostinger's "Max Processes" limit (120 on the plan) counts **threads**, and
LiteSpeed keeps up to **3 idle Node instances per Node website**, ~11 threads
each. On 2026-10-13 this site alone held 3 `next-server` instances = 33 of the
99 threads in use, idle since 10-08. Four Node sites × 3 × 11 = 132 > 120, so
the warning will come back whenever two sites get traffic at once.

This site has nothing that needs a server, so it can be published as plain
files: LiteSpeed serves them directly, zero Node processes, and page loads get
faster (no cold start).

## Review (2026-10-14) — what a static export needed

Checked by actually running the export build, not just reading the code.

| Checked | Result |
|---|---|
| API routes, server actions (`"use server"`), `cookies()`/`headers()`, runtime `fetch` | none |
| `app/products/[slug]/page.js` | already has `generateStaticParams`, so every product page is built ahead |
| `app/sitemap.js`, `app/robots.js`, `app/opengraph-image.js` | **build fails without** `export const dynamic = "force-static"` in each — added |
| `app/opengraph-image.js` (`ImageResponse`) | exported as a PNG file named `opengraph-image` with **no extension**, so LiteSpeed may not send it as an image (breaks WhatsApp/Facebook previews) — fixed in `public/.htaccess` |
| Clean URLs | without `trailingSlash`, `/products` and `/projects` exist both as `products.html` and as a folder (`public/products/`), so LiteSpeed redirects to `/products/` and finds no `index.html` → 403/404. `/products/home-lift` → `home-lift.html` also needs a rewrite rule LiteSpeed doesn't have by default. **`trailingSlash: true` is required**, not optional — added |
| 404 page | `out/404.html` is built but LiteSpeed only uses it with `ErrorDocument` — added in `public/.htaccess` |
| Contact page | has a form, but it only opens WhatsApp in the browser — works as static |
| `next/image` with `images.remotePatterns` (Unsplash, YouTube thumbnails) | the default loader needs a server, so `images.unoptimized: true` — added. Images now load full-size from YouTube (720×1280 frames), a bit heavier on phones |
| Placeholder SVGs + README.txt in `public/products`, `public/projects` | unused, would be published — deleted |
| `netlify.toml`, `@netlify/plugin-nextjs` | Netlify leftovers, unused on Hostinger; harmless |

## The change (done in the repo)

`next.config.mjs`:

```js
const nextConfig = {
  output: "export",
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
    remotePatterns: [/* Unsplash, i.ytimg.com */],
  },
};
```

Plus `export const dynamic = "force-static";` in `app/sitemap.js`,
`app/robots.js` and `app/opengraph-image.js`, sitemap/Open Graph URLs ending
in `/`, and `public/.htaccess` (copied into `out/`):

```apache
ErrorDocument 404 /404.html
<Files "opengraph-image">
  ForceType image/png
</Files>
```

`npm run build` writes the whole site to `out/` — every page is
`folder/index.html` (`out/products/home-lift/index.html`). `npm start` no
longer works (Next refuses `next start` with `output: "export"`).

Check locally with a plain static server — **not** `npx serve`, which fakes
clean URLs and hides the folder problems above:

```bash
npm run build && python -m http.server 3001 --directory out
```

Open `/`, `/products/`, `/products/home-lift/`, `/projects/`, `/technology/`,
`/contact/`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`. A URL without
the slash (`/products`) should redirect to the slash version. (Python ignores
`.htaccess`, so the 404 page and the share image type can only be checked on
Hostinger.)

## In hPanel (done 2026-10-21 — this is what worked)

No need to delete the web app. Websites → classicelevators.com.pk →
**Deployments → Redeploy** (Settings and redeploy):

| Field | Value |
|---|---|
| Source files | Upload new files → `elevator.zip` (`git archive --format=zip --prefix=elevator/ -o elevator.zip HEAD`) |
| Framework preset | **Other** (not Next.js — that preset expects a Node server) |
| Root directory | `elevator` |
| Build command | `npm run build` |
| Output directory | `out` |
| Entry file | *(empty — no Node server)* |

Save and redeploy. The build log should show `Exporting (2/2)`,
`Application type: Other`, `Mode: publish` and `Syncing public_html`.

Checked on the live domain after the switch: all pages 200, `/products` →
301 `/products/`, a wrong URL → branded 404 page with status 404,
`/opengraph-image` served as `image/png`, response headers show static files
(`last-modified`, no Next.js headers). The other sites on the plan returned the
same status and size as before.

To roll back: Redeploy → "Use previous files" is not enough (the old zip is
replaced); upload a zip of an older commit with preset **Next.js** and output
`.next`.

Verify no Node process is left for this domain (SSH):

```bash
ps -eo pid,nlwp,etimes,args --sort=-nlwp | grep -i classicelevators
```

Expected: nothing. Before the change it showed three `next-server (v15.5.19)`
lines, 11 threads each.

## If a Node site is ever needed on this server again

The limit is 120 threads for the whole plan. A Node website costs 11 threads
per instance and LiteSpeed keeps up to 3 instances, so 11–33 per site. The
budget after this site goes static and the test site is deleted:

| Site | Threads |
|---|---|
| savereels.online (2–3 instances) | 22–33 |
| savereel.online (1–3 instances) | 11–33 |
| room left for ONE more Node site | ≤ 33 → total ≤ 99 |

Levers, in order of value:

1. **Make it static** if it can be (like this site). Zero threads.
2. **Shrink a low-traffic Node site to ~5 threads per instance.** Of Node's 11
   threads, 4 are the libuv pool (file/DNS/zlib) and 4 are V8's. In the site's
   hPanel environment variables set `UV_THREADPOOL_SIZE=1` and
   `NODE_OPTIONS=--v8-pool-size=1`. A fresh instance on the server showed 7
   threads before its pool spun up, which confirms the count. Do NOT do this
   on savereels.online (it does real file I/O: media cache, logs).
3. **Instances per site** (the "3") is a LiteSpeed setting on Hostinger's side.
   If the Node app settings in hPanel show "instances" or "max connections",
   set 1 for a low-traffic site; if they don't, it cannot be changed by us.
4. **Upgrade** (Cloud plans have a higher process limit) only when a third Node
   site must run at the same time as the two above.

How to read the real count at any time (SSH, hPanel → Advanced → SSH access):

```bash
echo "threads: $(ps -eL --no-headers | wc -l) / 120"; ps -eo pid,nlwp,etimes,args --sort=-nlwp | cut -c1-120 | head -15
```

Divide by 11 to think in Node instances. `(deleted)` after the node binary in
`readlink /proc/<pid>/exe` means the instance predates a Node update and has
been idle for days — safe to `kill <pid>`, LiteSpeed starts a fresh one on the
next request.
