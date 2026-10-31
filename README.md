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
| Home, About and Contact photos | `photos` in `src/_data/site.json`: the file (`hero` = top of Home, `milena` = About page, `friends` = Home's "ten-plus years" section, `contact` = top of Contact, `postcard` = the travel photo in the "Wish you were here?" postcard or poster at the top of Home in the Sunny Passport, Travel Journal, Vintage Poster and Postcard Pop designs, which use it in place of `hero`), a short description for screen readers (`heroAlt`, `milenaAlt`, `friendsAlt`, `contactAlt`, `postcardAlt`), and the focal point to crop around (`heroPosition`, e.g. `"50% 61%"` = centered left-right, 61% down) |
| Add a trip | Copy `src/trips/sample-trip.md`, rename it (the file name becomes the web address), fill in each line |
| A trip is over | In that trip's file, set `past: true`. It leaves the list; its page stays up (so links already sent still work) and says the trip has wrapped up |
| A trip is sold out | In that trip's file, set `status: soldout`. The booking form becomes a waitlist |
| Reviews | `src/_data/reviews.json`: `[{ "quote": "...", "name": "Sue", "trip": "Italy 2026" }]` |
| Gallery photos | Put photos in `src/assets/photos/`, then list them in `src/_data/gallery.json`: `[{ "src": "/assets/photos/rome.jpg", "alt": "The group at the Colosseum", "caption": "Rome, 2025" }]` |
| Page text | The matching file in `src/` (`index.njk` is Home) |
| Colors and fonts | `src/assets/css/site.css` (the palette is at the top) |

Anything written in `[square brackets]` shows up highlighted on the site as "still to fill in".

Keep photos under about 300 KB each (around 1600 pixels wide is plenty).

## Design preview (while Milena picks a design)

While `"demo": true` in `src/_data/site.json`, the published site is a design preview instead of the real site. Its address opens a "pick your favorite design" page with all six designs. Each design is the full site in its own folder (`…/sunny-passport/`, `…/travel-journal/` and so on), with a bar on every page that jumps to the same page in the previous or next design. Nothing on it is final: anything in `[brackets]` is still highlighted (the pick page explains this, so the preview bar takes the draft banner's place), the forms send nothing, and search engines are asked not to list it.

- **Once she picks:** set `"theme"` to her design (`sunny-passport`, `travel-journal`, `vintage-poster`, `mediterranean-breeze`, `postcard-pop` or `color-block`) and `"demo": false`, then push to `main`. The same address then shows just that design, and the design folders go away.
- **Screenshots on the pick page** are in `demo/previews/` (`<design>-computer.jpg`, 1000×625, and `<design>-phone.jpg`, 250×541, each the top of Home without the bars). Retake them if a design changes.
- **The short line under each design** and the welcome text are in `scripts/build-demo.mjs`.

## Before launch

1. **Pick the design.** See "Design preview" above.
2. **Connect the forms.** Go to [web3forms.com](https://web3forms.com), enter the email address that should receive form messages, and paste the access key it sends into `web3formsAccessKey` in `src/_data/site.json`. Until then, the forms say "This form isn't connected yet" and send nothing. After connecting, send one test message from each form and check that pressing Reply goes to the sender.
3. **Fill in `site.json`:** phone, email, reply time (e.g. `"within a day"`), legal business name, any registration numbers, and the photos.
4. **Replace every `[bracket]`**: the sample trip (delete it once real trips exist), Terms, Privacy, and the draft notes on Services and About.
5. **Set `"url"`** in `site.json` to the site's address without the folder, e.g. `https://xavierthecameraguy-max.github.io` or `https://onyxworldtravel.com`.
6. **Set `"draft": false`.** This removes the draft banner and draft-only notes and lets search engines list the site.

With `"draft": false`, the build refuses to publish while `"demo"` is still true, or while any placeholder, placeholder photo, sample trip, missing phone number or missing forms key remains. It lists what's left, and the previous version stays live.

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
