# Homepage Plan — Ascendra

Build this page first. Everything else (Tools, About, Donate, skill-pack files, email, Stripe) is on [`TODO.md`](TODO.md).

Old sales-page copy, event agenda, and EPI curriculum live in `/Users/matt/Desktop/For Future/Ascendra/` (not in this repo). Use them as source material. Do not republish EPI PDFs.

---

## Job of the page

One screen should answer four things:

1. **Who is this for?** Owners who already have a real business and want it to be worth more — whether they keep it, scale it, or sell it.
2. **What do I get today?** A free, downloadable AI skill pack that does a useful job this week.
3. **What do you want from me?** An email. A donation if it helped. That is it.
4. **What is this, long term?** A nonprofit education project. The advisor-in-a-pocket idea is the direction, not a fake product.

If the visitor leaves with a toolkit and we have their email, the page did its job.

---

## Positioning (lock this)

**Keep the line:** *Author your legacy. Execute on your terms.*

**New promise under it:** Practical AI tools for owners who want a business that can run, grow, or transfer — without handing the reins to someone else.

**One-sentence about:** Ascendra is a Missouri nonprofit that gives business owners distilled tools and AI skills so they can see what their company is actually worth, what is trapped in the owner, and what to fix next.

**The boringmarketing move we steal:** do not describe a dashboard. Show the tool doing the work. Their Slack thread is the model; ours is a short owner ↔ agent transcript that ends in a downloadable memo.

**The list-before-the-room move:** the homepage sells the toolkit, not tickets. No date, no $97, no mastermind. Meetups still have a dedicated Events page. If we host something, this list is who we tell.

---

## Page map

```
Nav
Hero
Proof strip          (what you walk away with — 3 bullets)
Demo                 (the agent conversation)
Skill packs          (3 live, 1 coming)
How it works         (email → toolkit, optional donate)
Advisor teaser       (Carson’s north star, labeled as building)
Why this exists      (nonprofit, mission)
FAQ
Close / email capture
Footer
```

Homepage is the v1 surface. Companion routes already exist as thin pages: `/events`, `/about`, `/donate`, `/legal`, `/design-system`.

---

## Nav

**Left:** wordmark `ASCENDRA`

**Center / right links:** Tools · Events · About · Donate

**Right button:** `Get the toolkit` → jumps to email capture in the hero or the closing block.

Mobile: hamburger, same items, button last.

Do not put Mastermind, Login, or Pricing in the nav. Events is a real page (empty calendar until a date earns it).

---

## 1. Hero

**Eyebrow:** `A MISSOURI NONPROFIT · TOOLS FOR OWNERS`

**Headline:** Author your legacy. Execute on your terms.

**Subhead:** Practical AI skill packs for owners who want a business that can run, grow, or transfer — without handing the reins to someone else. Leave an email, run the toolkit this week. Meetups and events still have a home here when they earn a date.

**Primary CTA:** `Get the first toolkit` (email field + button on the same row)

**Secondary CTA:** `Support the work` (text link → Donate)

**Email helper text:** We’ll send the toolkit. Occasional owner tools after that. Unsubscribe anytime. No pitch-fest.

**Hero visual:** not a conference photo. A still of the demo conversation (section 3) or a simple “Value Readiness” card: four capitals as scores, one sentence verdict (`Transferable value: low — the business is still you`). Dark, quiet, specific.

**Do not use:** “Join the Mastermind,” date/location, $97, “spots are limited,” speaker headshots as the first impression.

---

## 2. Proof strip

Three short columns. No icons-for-the-sake-of-icons.

| | | |
| --- | --- | --- |
| **A memo on your business, not a lecture** | **The same questions buyers ask** | **Yours to keep** |
| Run a skill in Claude or Grok. It interviews you and writes a one-page value-readiness memo. | Four intangible capitals, the value gap, and whether the company survives you. Distilled from the exit-planning work we already taught. | Download the skill. Use it with your own AI. No membership required. |

---

## 3. Demo — show the tool working

This is the boringmarketing Slack-thread analog. Fake names, real logic. One conversation, ~8–10 lines, not a feature grid.

**Setup line:** *You paste the skill into Claude or Grok. It already knows the questions. You answer like you would to a good advisor who will not sell you anything.*

**Transcript (homepage copy — lock unless we write a better one):**

> **You:** Is this thing even sellable, or am I just a well-paid job?
>
> **Ascendra:** I’ll treat that as a value-readiness pass, not a price. Four things: who does the work without you, who the customers are loyal to, what is written down, and whether the culture survives a new owner.
>
> **You:** It’s me. Bookkeeper one day a week. Customers call my cell. Processes are in my head.
>
> **Ascendra:** Human capital is you. Customer capital is you. Structural capital is undocumented. That is a strong income stream and a weak asset. A buyer is not paying for your calendar.
>
> **You:** So what do I actually do?
>
> **Ascendra:** Three moves that raise transferable value this quarter: (1) put the top 10 jobs in a checklist someone else can run, (2) move inbound off your cell onto a shared inbox, (3) name a number — what the business has to be worth for the life you want next. I can write the memo and the checklists.

Under the transcript: `Get this skill` → same email capture.

Visual treatment: a quiet chat panel, not a cartoon mascot unless we later draw one on purpose. Pixel-mascot energy from boringmarketing is optional later; do not cargo-cult it on day one.

---

## 4. Skill packs

Section eyebrow: `WHAT YOU CAN RUN TODAY`

Headline: Three toolkits. One future agent.

Each card: name, one-line job, “Free with email” or “Coming.”

### Pack 1 — Value Readiness Memo *(ship first)*

The advisor-in-a-pocket **v0**. A Grok/Claude skill that interviews the owner and writes a one-page memo: wealth gap (is this enough for the next life), owner-dependence, and three next moves. Grounded in the morning curriculum (unplanned consequences, in-or-out, readiness vs attractiveness) without copying EPI documents.

**Homepage one-liner:** *Find out if the business is an asset — or still a job with extra steps.*

### Pack 2 — Four Capitals Score

Self-score Human, Customer, Structural, Social capital. Output: which capital is creating value, which is trapped in the owner, what would have to be true for a third party to pay for it.

**Homepage one-liner:** *The four places buyers actually look — scored in plain language.*

### Pack 3 — Owner-Optional Ops

Carson's “core ops stuff from AI.” A small pack of skills/workflows: weekly scorecard, first SOP set, “what to hand a bookkeeper / VA / ops person this month.” This is the giveaway that helps people who are *not* thinking about an exit.

**Homepage one-liner:** *Get the business off your cell phone.*

### Pack 4 — Advisor in your pocket *(coming)*

Carson’s north star: a live agent that assesses transferable value and, later, could stand behind a stamp / accreditation. Do not fake a product page. One card, labeled Coming, with a waitlist checkbox on the same email form.

**Homepage one-liner:** *A practical agent that can sit with the numbers and say whether the company would survive you. Building this next.*

Card CTA: `Send it to me` / `Notify me` — all dump into the same list with a tag (`pack-readiness`, `pack-capitals`, `pack-ops`, `waitlist-advisor`).

---

## 5. How it works

Three steps, no decoration.

1. **Leave an email.** We send the skill file and a 3-minute “how to run it” note.
2. **Run it on your own business.** Paste into Claude or Grok (or the tool you already pay for). Answers stay on your machine unless you choose to share them.
3. **If it helped, drop $10 in the jar.** Optional. Pays for domains, tools, and the next pack. If it did not help, keep the file and unsubscribe.

Small print under step 3: we will not call this a tax-deductible charitable contribution until Destiny/the entity status says we can. (Planning docs mentioned a 501(c)6 business-league shape. That is not a 501(c)3 gift.) Use “support the work” / “pay what you want” until confirmed.

---

## 6. Advisor teaser (Carson’s section)

Keep it short so it does not overpower the giveaway.

**Headline:** The thing we actually want to build.

**Body:** A practical agent that can live-assess whether a company has transferable value — and eventually serve as a stamp of approval, not another PDF. Intelligence is cheap enough to give away. We will build whatever does the most good with that. The skill packs are the first slice: useful now, and the training data for that agent later.

**CTA:** `Get on the advisor list` (same form, tagged).

Do not promise accreditation, a rating agency, or “we will certify your business.” That is a later legal/product conversation.

---

## 7. Why this exists

Two short columns.

**Left — what we believe (keep):** Business owners should be able to author their own legacy and execute on their own terms. The people who buy and scale companies already have these frameworks. Owners should too, without a $5k advisor day-rate or a pitch-fest.

**Right — what this is:** A Missouri nonprofit that gives away sharp tools, collects a list, and stays ready for whatever is actually useful next — an agent, a meetup, a room again only if people ask for the room.

No speaker bios in this block. A single line is enough: *Board: Carson Burke (CEPA, CFP) · Matt Semegran · legal partner Destiny Bounds.* Link “About” when that page exists.

---

## 8. FAQ (homepage set)

**Is this an event?** Not the product. Meetups still have a page when they earn a date. This site is the toolkit you use in between. If we host something, people on this list hear first.

**Is this a sales pitch?** No. No sponsors buying a slot on this page. No “book a call” funnel. Email and optional support.

**Who is this for?** Owners who already have a real operation. If you are pre-revenue, these tools will feel like someone else’s problem — that is honest, not a slight.

**Do I need to pay for Claude or Grok?** The skills run in tools many owners already have. We are not selling you an AI subscription.

**Is this legal / financial / tax advice?** No. Educational tools only. Your lawyer, CPA, and CFP still exist. Destiny will draft the real disclaimer.

**What happens with my email?** Toolkit delivery, then occasional new tools. No SDR sequence. Unsubscribe anytime.

**Can I just donate?** Yes. Same page. You still get the toolkit.

---

## 9. Closing block

Repeat the email row. Do not invent a new headline.

**Headline:** Take the first toolkit. Decide later if we earned the rest.

**Form:** email + `Send me the toolkit`

**Under the button:** `or support the work →` Donate

---

## 10. Footer

- Ascendra Association — Missouri nonprofit. Education for business owners.
- Tools · About · Donate · Legal
- “Nothing on this site is legal, financial, tax, investment, or business advice. You own your decisions.”
- © 2026 Ascendra Association
- No social icons until accounts are real and active.

---

## Visual direction

**Locked to the Ascendra seal and 2025 masterclass deck** (`assets/css/site.css`, documented at `design-system.html`).

- **Light (default):** warm paper `#FBF8F2`, navy type, gold accent. The house.
- **Navy (ceremonial only):** footer, ticker, print covers. `#03204E` + cream `#EFE6D8`.
- **Gold:** `#C89014` from the torch and seal ring.
- **Type:** Playfair Display · Source Sans 3 · Great Vibes (hospitality only).
- **Mark:** circular torch seal (`assets/img/logo.png`).

Do not borrow another firm’s dark chrome. See `design-system.html`.

---

## Copy rules

- Speak to one owner, second person.
- Short sentences. Specific nouns (cell phone, bookkeeper, shared inbox). No “unlock your potential.”
- Do not say small business.
- Do not say mastermind, limited seats, investment of $97, or “transformative full-day.”
- Do not claim tax-deductible donations until confirmed.
- Do not claim we will raise the sale price of anyone’s company.
- Keep “this is not a pitch-fest.” It was the truest line on the old page.

### Headline bank (if we need alternates)

1. Author your legacy. Execute on your terms. *(preferred)*
2. Your business should be worth something without you in the chair.
3. Tools you can run this week. A room when it earns a date.
4. Free AI toolkits for owners who want options.

### CTA bank

- Primary: `Get the first toolkit`
- Secondary: `Support the work`
- Cards: `Send it to me`
- Advisor: `Get on the advisor list`

---

## Forms, tags, and what “synced” means on v1

v1 can be a static page plus:

- One email field (Kit / Buttondown / Plausible-simple — pick on the todo)
- Tags: `source-homepage`, `pack-readiness`, `waitlist-advisor`
- A Stripe Payment Link or similar for Donate (even $10 / $25 / $50 is enough)
- Skill files hosted in this repo (`/toolkits/…`) and emailed as links, not as a “member portal”

Do not build accounts, Slack install, or a dashboard for v1. Events stay a calendar page, not the company.

---

## What this page is allowed to stay flexible about

The body copy should not lock us into “we only give away markdown files forever.” Use this sentence in Why / Advisor:

> We will build whatever does the most good with cheap intelligence — skills now, a live advisor if that earns it, a room when people ask for the room.

That is the flexibility Carson asked for, without making the homepage a menu of unbuilt products.

---

## Build notes

- Static HTML + Ascendra tokens. Deploy on Vercel (`vercel.json` is in the repo).
- Pull legal disclaimer from Destiny before public launch; placeholder is live at `/legal`.
- Domain: confirm which names were just renewed and point DNS after deploy.
- Working copy: `/Users/matt/Desktop/For Future/Ascendra/Grok Space` → `https://github.com/semegranai/ascendra`.
