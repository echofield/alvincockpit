# Alvin / NYC Partner Cockpit

Static, zero-build cockpit designed for Cloudflare Pages.

## Deploy
- Upload the contents of this folder as a static site, or connect the folder to a Pages project.
- Build command: none
- Output directory: the folder containing `index.html`

## What is included
- 100 direct NYC leads from `NYC_Fred_Astaire_100_Leads_Aug2026`
- 43 upstream / feeder targets from `Fred_Astaire_NYC_Upstream_Feeder_Graph_Aug2026`
- Search, channel / priority / status filters
- Lead detail drawer with email / phone / site / LinkedIn routes
- Local status, last-touch and note tracking via browser `localStorage`
- CSV export with the current locally saved contact state
- Responsive mobile-first UI matching the supplied warm off-white / dark-green / editorial direction

## Privacy / multi-device note
This version is intentionally static. `localStorage` is per browser and is not shared between Alvin and Martial or across devices.

For a truly private shared cockpit, keep this front end and add one of:
1. Cloudflare Access in front of the Pages site; or
2. a small Cloudflare Worker + D1 backend for authenticated shared contact state / magic-link login.

No external JavaScript, CSS library, database, or build tool is required for this prototype.
