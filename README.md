# Ascendra

Missouri nonprofit. Free AI maps, tools, and walkthroughs so business owners can author their own legacy. First pack is the Value Readiness Memo.

Visual language is Ascendra’s own: light paper, navy `#03204E` + gold `#C89014` from the 2025 seal.

## Working copy

Local: `/Users/matt/Desktop/For Future/Ascendra/Grok Space`  
Remote: https://github.com/semegranai/ascendra

## Local

```bash
cd "/Users/matt/Desktop/For Future/Ascendra/Grok Space"
python3 -m http.server 4173
```

Then: [http://127.0.0.1:4173/](http://127.0.0.1:4173/)

## Pages

| Path | What |
| --- | --- |
| `index.html` | Homepage (StoryBrand) |
| `tools.html` | The memo, plus later packs |
| `events.html` | Meetups when they earn a date |
| `about.html` | Nonprofit + board |
| `donate.html` | Support the work |
| `legal.html` | Placeholder disclaimer |
| `design-system.html` | Tokens and type |

Wireframe experiments still live under `wireframes/` (ports 4174 / 4175 if you spin those up).

## Hosting

Static HTML. Push to Vercel when the domain is ready. Email and Stripe are not wired yet — forms confirm locally only.
