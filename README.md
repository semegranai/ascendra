# Ascendra

Missouri nonprofit. Tools for business owners who want to author their legacy and execute on their own terms.

This repo is the 2026 rebuild: a public toolkit site (email → skill packs, optional support) plus an Events page for meetups when they earn a date. Visual language is Ascendra’s own: light paper, navy + gold from the 2025 seal and masterclass deck.

## Working copy

Local: `/Users/matt/Desktop/For Future/Ascendra/Grok Space`  
Remote: https://github.com/semegranai/ascendra

2025 source material (copy, agenda, curriculum) stays on disk under `Desktop/For Future/Ascendra/` and is **not** in this repo.

## Local

```bash
cd "/Users/matt/Desktop/For Future/Ascendra/Grok Space"
python3 -m http.server 4173
```

Then: [http://127.0.0.1:4173/](http://127.0.0.1:4173/)

## Pages

| Path | What |
| --- | --- |
| `index.html` | Homepage |
| `events.html` | Meetups / events (empty calendar, list capture) |
| `about.html` | Nonprofit + board |
| `donate.html` | Support the work |
| `legal.html` | Placeholder disclaimer |
| `design-system.html` | Tokens, type, components, both modes |

## Docs

| Doc | What |
| --- | --- |
| [docs/product-brief.md](docs/product-brief.md) | What this is |
| [docs/homepage-plan.md](docs/homepage-plan.md) | Homepage spec |
| [docs/TODO.md](docs/TODO.md) | Remaining work (email, Stripe, skill files, Vercel) |

## Hosting

Static HTML. Push to Vercel when the domain is ready. Email (Kit) and Stripe are not wired yet — forms confirm locally only.
