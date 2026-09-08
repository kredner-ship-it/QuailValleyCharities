# Quail Valley Charities

A production-quality static website for Quail Valley Charities, the philanthropic
foundation of Quail Valley Golf Club, River Club, and The Pointe — funding
nonprofit programs for children, education, and well-being across Indian River
County, Florida.

## Structure

- `index.html` — Home
- `about.html` — About (history, mission, values, leadership)
- `impact.html` — Our Impact (stats, focus areas, accountability)
- `grants.html` — Grant Information (eligibility, process, timeline)
- `events.html` — Events
- `recipients.html` — Past Recipients
- `contact.html` — Contact &amp; Give (includes the `#give` ways-to-give section)
- `partials/header.html`, `partials/footer.html` — shared nav/footer, injected
  at runtime by `assets/js/main.js` so they're defined once and reused on
  every page
- `assets/css/style.css` — design system matching the organization's sitewide
  brand guide exactly: navy `#102F3E`/`#17394B`, maroon `#7B3F3F`/`#692A2A`,
  taupe `#8B8178`, cream `#EDE3D3`, off-white `#F5F5F5`; Cormorant Garamond
  for H1/H2, Open Sans for H3–H6/body/links/buttons at the guide's specified
  sizes and weights; scroll-reveal animation utilities, responsive
  breakpoints, accessible focus states
- `assets/js/main.js` — partial includes, nav toggle, active-nav-link
  highlighting, scroll-reveal (IntersectionObserver, respects
  `prefers-reduced-motion`), footer year, demo form handling
- `assets/img/favicon.svg` — placeholder monogram favicon (swap for the real
  logo mark once provided)

## Running locally

Because the header/footer are loaded via `fetch()`, this site must be served
over HTTP — opening `index.html` directly via `file://` will not load the
nav/footer (browsers block `fetch` on the file protocol). Serve it with any
static server, e.g.:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. This is also how it will run in
production on any static host (GitHub Pages, Netlify, Vercel, etc.), so no
extra configuration is needed there.

## Important: this is a content scaffold, not a finished launch

Per the build brief, **no facts, statistics, names, or financial information
were invented.** Every number, name, date, or address that hasn't been
verified is a clearly marked placeholder:

- Impact statistics show a dashed "Add figure" pill instead of a fabricated
  number (see `.placeholder-figure` in the CSS) — except "25 Years of Giving"
  and "$15.5M+ Distributed to Local Children's Nonprofits" on Home and Our
  Impact, which are real figures taken from the organization's own 25th
  Anniversary event flyer.
- Events on `events.html` are real — taken from the 25th Anniversary event
  flyer (14 events, Nov–Jan) — not placeholders. The registration form on
  that page submits via a pre-filled `mailto:` link to a placeholder
  `events@quailvalleycharities.org` address (there's no backend on a static
  GitHub Pages site to receive form submissions). This works today with zero
  setup, but every registrant has to actually send the email themselves and
  there's no dashboard of who's registered. If you want real self-service
  registration with a reviewable guest list, set up a free tool like Google
  Forms, SignUpGenius, or Eventbrite and swap the form's submit handler (or
  the `.js-register` buttons) to link there instead.
- Past Recipients uses bracketed `[Nonprofit Organization Name]` placeholders
  — these are **not** real grant recipients.
- Grant Information's eligibility criteria, process, and dates are a
  reasonable placeholder structure for a grantmaking foundation, flagged
  with an on-page note to confirm against the real policy before publishing.
- Board member names (Jane Doe, John Smith, Alex Johnson) are generic
  placeholders.
- Contact details (address, phone, emails) are placeholders.
- Every page with placeholder data has a `.placeholder-banner` note visible
  on the page itself, so an editor can find and replace it easily.

**Photography:** this build has no photos. There's no photo library or image
generation available in the environment this was built in, so every
"photography" slot (`.visual-panel` / hero backgrounds) uses a subtle
line-art motif in the brand colors instead, with a visible caption (e.g. "Photography placeholder
— junior golf clinic") marking what real image belongs there. Before launch,
replace these panels with licensed or original photography — this is the
single biggest thing standing between this build and the "lots of high-quality
photography" brief.

## Before launch checklist

- [ ] Replace the remaining placeholder statistics (nonprofit partners funded,
      children/families reached) with verified figures
- [ ] Replace Past Recipients with real grant history
- [ ] Confirm the events@quailvalleycharities.org address actually exists and
      is monitored, or point the RSVP form/`.js-register` buttons at a real
      registration tool (Google Forms, SignUpGenius, Eventbrite) instead
- [ ] Confirm Grant Information eligibility, process, and deadlines with staff
- [ ] Replace board member placeholders with real names/titles/photos
- [ ] Replace contact info (address, phone, emails) with real details
- [ ] Replace all `.visual-panel` / hero placeholders with real photography
- [ ] Add the real logo (see `assets/img/favicon.svg` and `.logo-mark` in
      `partials/header.html` / `partials/footer.html`)
- [ ] Connect the donate flow (`contact.html#give`) to a real payment
      processor (Stripe, Givebutter, Network for Good, etc.)
- [ ] Connect the contact form to a real email service or CRM
- [ ] Fill in `og:image` / `twitter:image` with a real social share image
- [ ] Update canonical URLs / JSON-LD if the production domain differs from
      `https://www.quailvalleycharities.org/`

## Accessibility & SEO

- Semantic landmarks, skip-to-content link, visible focus states,
  `aria-current` on the active nav link, `aria-expanded` on the mobile menu
  toggle, decorative SVGs marked `aria-hidden`.
- Animations respect `prefers-reduced-motion: reduce`.
- Each page has a unique title, meta description, canonical link, and
  Open Graph/Twitter tags; the homepage includes `NGO` JSON-LD structured
  data (schema.org).
