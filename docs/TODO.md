# Ascendra — remaining work

Homepage plan is written. This is everything else, in the order it should happen. Check boxes in git as we go.

---

## Now — after homepage plan is approved

- [ ] Matt + Carson: approve or redline [`homepage-plan.md`](homepage-plan.md) (headline, three pack names, donation wording, advisor teaser).
- [ ] Confirm the live domain(s) renewed this week. Point them at the new site when it exists.
- [ ] Confirm entity type with Destiny (501(c)6 vs 501(c)3 vs something else). This gates the word “donate” and any tax language.
- [ ] Pick the email tool (Kit / Buttondown / MailerLite — cheapest that can tag and send a file link).
- [ ] Pick the donate tool (Stripe Payment Link is enough at ~$260 in the bank).

## Site build

- [ ] Style guide from the homepage visual direction (colors, type, components, transcript panel). Living doc, not a brand agency project.
- [ ] Scaffold the site in this repo (`/Users/matt/Desktop/For Future/Ascendra/Grok Space`) and deploy a blank Vercel preview.
- [ ] Build the **homepage only** from the plan (nav → footer).
- [ ] Wire the email form (one list, tags: `source-homepage`, `pack-readiness`, `pack-capitals`, `pack-ops`, `waitlist-advisor`).
- [ ] Wire Donate (amounts $10 / $25 / $50 / other). Copy = “support the work” until legal status is confirmed.
- [ ] `/legal` placeholder: educational-use disclaimer until Destiny’s draft lands.
- [ ] `/about` — short: nonprofit purpose, board (Carson, Matt, Destiny), what changed after 2025, what we will not do (pitch-fest, fake accreditation).
- [ ] `/tools` — index of skill packs. Can wait if homepage cards already link to download.
- [ ] Favicon / wordmark. Do not stall launch on a logo exploration.
- [ ] Mobile pass + basic SEO (title, meta, OG image with the tagline).
- [ ] Analytics that is not creepy (Plausible or similar).

## Skill packs (the actual give)

Do not paste EPI PDFs into the repo. Original Ascendra distillations only.

- [ ] **Pack 1 — Value Readiness Memo** (ship with the homepage). Claude/Grok skill + 1-page “how to run this” + example memo using a fictional owner (not a real client).
- [ ] **Pack 2 — Four Capitals Score.** Skill + scoring rubric in plain language + “what ‘low structural capital’ means in a shop.”
- [ ] **Pack 3 — Owner-Optional Ops.** Weekly scorecard, first 10 SOPs prompt, “get inbound off my cell” workflow.
- [ ] Delivery: files in `/toolkits/` in this repo, sent as links after email confirm. No login wall.
- [ ] A 3-minute runbook email (the only automated email besides the send).

## Advisor-in-a-pocket (Carson) — later, not fake-live

- [ ] One-page product note: what “live assess a value” means in v1 (interview + memo + score) vs what accreditation would require (liability, standard, who stamps).
- [ ] Prototype the agent against Pack 1’s skill. If it is just a better skill, keep it as a skill. Do not invent a Slack install to look like boringmarketing.
- [ ] Accreditation / “stamp of approval” is a board + Destiny conversation before any homepage claim.

## Marketing plan (machine, not another event)

- [ ] Write a one-page marketing plan: audience, offer, capture, weekly cadence. No ads until the toolkit is real.
- [ ] Source list: owners Matt/Carson already know (personal ask first), local operator groups, existing 2025 attendee/RSVP emails if we have permission to use them.
- [ ] 5–7 email-able notes (not a drip-from-hell): each is a useful fragment from the packs, not a “you missed the event.”
- [ ] One public artifact besides the site: a sample Value Readiness Memo (fictional business) that can be posted as proof.
- [ ] Decide channels we will actually touch (likely: personal LinkedIn/email). Do not create five empty social accounts.
- [ ] If we ever revive an event: it is an email to this list, not a new company.

## Legal / ops / money

- [ ] Destiny: site disclaimer, donation language, “not advice,” IP on skill packs.
- [ ] Confirm we are allowed to distill EPI-taught concepts into original tools (we taught from those materials; we do not host their PDFs).
- [ ] Simple money log: domain, Super Grok, Vercel, email tool. Entity has ~$260. Do not add a stack that needs a sponsor.
- [ ] Auto-pay on the domain so this does not die on a renewal.

## Content we are explicitly not doing yet

- Events page, ticket checkout, speaker bios as the product.
- Member portal, Slack community, forum.
- PE/buyer lists, sponsorship packages, 501(c)6 paid membership tiers.
- A fake “certification” badge.

---

## Done when

A stranger can land on the homepage, understand it in 15 seconds, leave an email, get a skill that runs, and optionally put $10 in the jar — and the board is not on the hook to throw another Saturday in Kansas City to make the nonprofit feel alive.
