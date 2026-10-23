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
| Add a trip | Copy `src/trips/sample-trip.md`, rename it (the file name becomes the web address), fill in each line |
| Take a trip off the list | In that trip's file, set `past: true` |
| Mark a trip sold out | In that trip's file, set `status: soldout` (the form becomes a waitlist) |
| Reviews | `src/_data/reviews.json`: `[{ "quote": "...", "name": "Sue", "trip": "Italy 2026" }]` |
| Gallery photos | Put photos in `src/assets/photos/`, then list them in `src/_data/gallery.json`: `[{ "src": "/assets/photos/rome.jpg", "alt": "The group at the Colosseum", "caption": "Rome, 2025" }]` |
| Page text | The matching file in `src/` (`index.njk` is Home) |
| Colors and fonts | `src/assets/css/site.css` (the palette is at the top) |

Anything written in `[square brackets]` shows up highlighted on the site as "still to fill in".

Keep photos under about 300 KB each (around 1600 pixels wide is plenty).

## Before launch

1. **Connect the forms.** Go to [web3forms.com](https://web3forms.com), enter the email address that should receive form messages, and paste the access key it sends into `web3formsAccessKey` in `src/_data/site.json`. Until then, the forms say "This form isn't connected yet" and send nothing.
2. **Fill in `site.json`:** phone, email, reply time, legal business name, and any registration numbers.
3. **Replace every `[bracket]`**, including the sample trip.
4. **Set `"draft": false`** in `site.json`. This removes the draft banner, hides the remaining placeholder notes, and lets search engines list the site.
5. **Set `"url"`** in `site.json` to the site's full address, e.g. `https://onyxworldtravel.com`.

## Publishing (GitHub Pages)

Every push to `main` rebuilds and publishes the site through `.github/workflows/deploy.yml`.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

GitHub Pages is free for public repositories. A private repository needs a paid GitHub plan (Pro or higher).

The site appears at `https://xavierthecameraguy-max.github.io/melina_website/`. To use a custom domain, add it under **Settings → Pages → Custom domain**. The build adjusts its links automatically.
