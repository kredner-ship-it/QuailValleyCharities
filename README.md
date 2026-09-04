# Quail Valley Charities

A static website for Quail Valley Charities, the charitable arm of Quail Valley Golf Club.

## Structure

- `index.html` — Home
- `about.html` — Mission, values, and leadership
- `programs.html` — Scholarship, youth mentorship, community assistance, and partnerships
- `events.html` — Upcoming events (golf classic, gala, giving drive, junior camp)
- `donate.html` — Giving levels, ways to give, and a demo donation form
- `contact.html` — Contact info and a demo contact form
- `assets/css/style.css` — Shared stylesheet (green/gold palette)
- `assets/js/main.js` — Mobile nav toggle, footer year, demo form handling

## Running locally

No build step required — it's plain HTML/CSS/JS. Open `index.html` directly in a
browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Placeholder content to replace

This site ships with realistic placeholder copy, numbers, and photo blocks
(dashed boxes marked "Placeholder photo…") so it's ready to launch visually.
Before going live, replace:

- Organization address, phone, email, and EIN (footer, contact page, donate page)
- Impact statistics on the home page
- Board member names/photos on the about page
- Event dates/details on the events page
- Photos — swap the dashed placeholder blocks (`.ph-image`) for real images
- Donate and contact forms — currently front-end demos only; wire them up to
  a real payment processor (e.g. Stripe, PayPal, Givebutter) and an email
  service or CRM

## Deployment

Since this is a static site, it can be deployed as-is to GitHub Pages,
Netlify, Vercel, or any static host.
