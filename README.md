# Onyx World Travel

Website for Milena's travel agency, Onyx World Travel (Kentucky). Built with [Eleventy](https://www.11ty.dev/) and published with GitHub Pages.

Pages: Home, About, Services & Trips (with one page per trip), Gallery, Reviews, Contact.

## Run it on your computer

Needs Node.js 22 or newer.

```sh
npm install
npm start
```

Then open http://localhost:8080. The page reloads as you save files.

## Common edits

All content lives in `src/`.

| To change | Edit |
|---|---|
| Phone, email, reply time, legal name, social links | `src/_data/site.json` |
| Home and About photos | `photos` in `src/_data/site.json`: the file (`hero` = top of Home, `milena` = About page, `friends` = Home's "ten-plus years" section), a short description for screen readers (`heroAlt`, `milenaAlt`, `friendsAlt`), and the focal point to crop around (`heroPosition`, e.g. `"50% 61%"` = centered left-right, 61% down) |
| Add a trip | Copy `src/trips/sample-trip.md`, rename it (the file name becomes the web address), fill in each line |
| A trip is over | In that trip's file, set `past: true`. It leaves the list; its page stays up (so links already sent still work) and says the trip has wrapped up |
| A trip is sold out | In that trip's file, set `status: soldout`. The booking form becomes a waitlist |
| Reviews | `src/_data/reviews.json`: `[{ "quote": "...", "name": "Sue", "trip": "Italy 2026" }]` |
| Gallery photos | Put photos in `src/assets/photos/`, then list them in `src/_data/gallery.json`: `[{ "src": "/assets/photos/rome.jpg", "alt": "The group at the Colosseum", "caption": "Rome, 2025" }]` |
| Page text | The matching file in `src/` (`index.njk` is Home) |
| Colors and fonts | `src/assets/css/site.css` (the palette is at the top) |

Anything written in `[square brackets]` shows up highlighted on the site as "still to fill in".

Keep photos under about 300 KB each (around 1600 pixels wide is plenty).

## Before launch

1. **Connect the forms.** Go to [web3forms.com](https://web3forms.com), enter the email address that should receive form messages, and paste the access key it sends into `web3formsAccessKey` in `src/_data/site.json`. Until then, the forms say "This form isn't connected yet" and send nothing. After connecting, send one test message from each form and check that pressing Reply goes to the sender.
2. **Fill in `site.json`:** phone, email, reply time (e.g. `"within a day"`), legal business name, any registration numbers, and the photos.
3. **Replace every `[bracket]`**: the sample trip (delete it once real trips exist), Terms, Privacy, and the draft notes on Services and About.
4. **Set `"url"`** in `site.json` to the site's address without the folder, e.g. `https://xavierthecameraguy-max.github.io` or `https://onyxworldtravel.com`.
5. **Set `"draft": false`.** This removes the draft banner and draft-only notes and lets search engines list the site.

With `"draft": false`, the build refuses to publish while any placeholder, placeholder photo, sample trip, missing phone number or missing forms key remains. It lists what's left, and the previous version stays live.

## Publishing (GitHub Pages)

Every push to `main` rebuilds and publishes the site through `.github/workflows/deploy.yml`.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

GitHub Pages is free for public repositories. A private repository needs a paid GitHub plan (Pro or higher).

**Before making this repository public:** a public repository shows every branch. The `claude/onyx-client-brief` branch holds internal planning notes about the client. Save a copy elsewhere and delete that branch from GitHub first (`git push origin --delete claude/onyx-client-brief`).

The site appears at `https://xavierthecameraguy-max.github.io/melina_website/`.

To use a custom domain:

1. Add it under **Settings → Pages → Custom domain**.
2. In the same sitting, set `"url"` in `src/_data/site.json` to the new address and push to `main` (or run **Actions → Deploy to GitHub Pages → Run workflow**).

Links are rebuilt for the new address on that build. Until it finishes, the site at the new address looks unstyled.
