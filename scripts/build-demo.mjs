// Design preview: builds the whole site once per design, each in its own folder, plus a
// "pick your favorite" page on top that links to all of them. Used while "demo" is true in
// src/_data/site.json (see .github/workflows/deploy.yml).
//
//   BASE_URL=https://xavierthecameraguy-max.github.io/melina_website BASE_PATH=/melina_website node scripts/build-demo.mjs
//
// BASE_URL is the address the preview is published at; BASE_PATH is its folder ("" on a custom domain).
// The screenshots on the pick page are in demo/previews/ (<design>-computer.jpg and <design>-phone.jpg).
import { execFileSync } from "node:child_process";
import fs from "node:fs";

// The designs, in the order they're shown, with a short line for the pick page.
const DESIGNS = [
  ["sunny-passport", "Cream, coral and sunshine, with postcard and passport-stamp touches."],
  ["travel-journal", "Like a trip scrapbook: warm paper, photos taped in, doodled routes and handwritten notes."],
  ["vintage-poster", "Bold, retro travel-poster style in navy, sunset orange and gold."],
  ["mediterranean-breeze", "Airy and calm: whitewash, sea blue and lemon, with arched photos and blue tiles."],
  ["postcard-pop", "Tropical and playful: hibiscus pink, mango and sky blue, with wavy edges and stickers."],
  ["color-block", "Big blocks of bold color, oversized headings and simple shapes."],
];

const baseUrl = (process.env.BASE_URL || "").replace(/\/$/, "");
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "");
if (!baseUrl) throw new Error("Set BASE_URL to the address the preview is published at.");

const site = JSON.parse(fs.readFileSync("src/_data/site.json", "utf8"));
const label = (id) => JSON.parse(fs.readFileSync(`src/_data/themes/${id}.json`, "utf8")).label;
const escapeHtml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

fs.rmSync("_site", { recursive: true, force: true });
for (const [id] of DESIGNS) {
  console.log(`Building ${label(id)}`);
  execFileSync("npx", ["@11ty/eleventy", "--quiet", `--pathprefix=${basePath}/${id}/`, `--output=_site/${id}`], {
    stdio: "inherit",
    env: { ...process.env, THEME: id, DEMO_HOME: `${baseUrl}/`, DEMO_DESIGNS: DESIGNS.map(([d]) => d).join(",") },
  });
}

fs.cpSync("demo/previews", "_site/previews", { recursive: true });
// A mistyped address anywhere in the preview shows the first design's "page not found".
fs.copyFileSync(`_site/${DESIGNS[0][0]}/404.html`, "_site/404.html");

const font = `${DESIGNS[0][0]}/assets/fonts/atkinson-hyperlegible-latin`;
// Shown under the link when it's texted or emailed
const blurb = escapeHtml(`Six looks for ${site.owner}'s new website. Open any of them and pick your favorite.`);
const cards = DESIGNS.map(([id, line]) => `
    <li class="pick">
      <div class="shots" aria-hidden="true">
        <img class="computer" src="previews/${id}-computer.jpg" alt="" width="1000" height="625" loading="lazy">
        <img class="phone" src="previews/${id}-phone.jpg" alt="" width="250" height="541" loading="lazy">
      </div>
      <h2><a href="${id}/">${escapeHtml(label(id))}</a></h2>
      <p>${escapeHtml(line)}</p>
      <span class="go" aria-hidden="true">Open this design →</span>
    </li>`).join("");

fs.writeFileSync("_site/index.html", `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>${escapeHtml(site.name)}: pick your favorite design</title>
  <meta name="description" content="${blurb}">
  <meta property="og:title" content="${escapeHtml(site.name)}: pick your favorite design">
  <meta property="og:description" content="${blurb}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${baseUrl}/">
  <meta property="og:image" content="${baseUrl}/previews/${DESIGNS[0][0]}-computer.jpg">
  <link rel="icon" href="${DESIGNS[0][0]}/assets/img/favicon.svg" type="image/svg+xml">
  <style>
    @font-face { font-family: "Atkinson Hyperlegible"; src: url("${font}-400-normal.woff2") format("woff2"); font-weight: 400; font-display: swap; }
    @font-face { font-family: "Atkinson Hyperlegible"; src: url("${font}-700-normal.woff2") format("woff2"); font-weight: 700; font-display: swap; }
    * { box-sizing: border-box; }
    body { margin: 0; background: #faf6ef; color: #16120f; font: 1.125rem/1.6 "Atkinson Hyperlegible", Verdana, Arial, sans-serif; }
    .wrap { width: min(100% - 2rem, 72rem); margin-inline: auto; }
    header { background: #16120f; color: #fff; padding: clamp(2rem, 6vw, 3.5rem) 0; border-bottom: 6px solid #ffc23c; }
    h1 { margin: 0 0 0.75rem; font-size: clamp(2rem, 1.4rem + 2.6vw, 3.2rem); line-height: 1.1; }
    h1 span { color: #ffc23c; }
    header p { margin: 0 0 0.75rem; max-width: 42rem; font-size: 1.2rem; }
    header ul { margin: 1rem 0; padding-left: 1.25rem; max-width: 42rem; }
    header li { margin-bottom: 0.35rem; }
    header li::marker { color: #ffc23c; }
    .ph { background: #ffe9a8; color: #16120f; padding: 0 0.2em; border-radius: 3px; }
    main { padding: clamp(2rem, 5vw, 3.5rem) 0 4rem; }
    .picks { list-style: none; margin: 0; padding: 0; display: grid; gap: clamp(1.75rem, 4vw, 2.5rem); }
    @media (min-width: 48em) { .picks { grid-template-columns: 1fr 1fr; } }
    .pick { position: relative; background: #fff; border: 2px solid #16120f; border-radius: 14px; padding: 1rem 1rem 1.25rem; box-shadow: 5px 5px 0 #16120f; }
    .pick:hover, .pick:focus-within { box-shadow: 7px 7px 0 #f2643b; }
    .shots { position: relative; margin-bottom: 1rem; padding-right: 14%; }
    .shots img { display: block; border: 1px solid #d8cfc2; border-radius: 8px; background: #eee; }
    .computer { width: 100%; height: auto; }
    .phone { position: absolute; right: 0; bottom: -0.5rem; width: 24%; height: auto; border-radius: 10px !important; border: 3px solid #16120f !important; box-shadow: 0 6px 16px rgb(0 0 0 / 0.25); }
    .pick h2 { margin: 0 0 0.25rem; font-size: 1.5rem; line-height: 1.2; }
    .pick h2 a { color: #16120f; text-decoration: none; }
    .pick h2 a::after { content: ""; position: absolute; inset: 0; border-radius: 14px; }
    .pick h2 a:focus-visible { outline: none; }
    .pick:focus-within { outline: 4px solid #16120f; outline-offset: 4px; }
    .pick p { margin: 0 0 0.6rem; }
    .go { font-weight: 700; color: #b8461f; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 0.2em; }
    footer { padding: 0 0 3rem; color: #5c534c; font-size: 1rem; }
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <h1>${escapeHtml(site.name)}: <span>pick your favorite design</span></h1>
      <p>Hi ${escapeHtml(site.owner)}! Here are six looks for your new website. Each one is the whole site, so open any of them and click around every page.</p>
      <ul>
        <li>The words are the same in all six, and any of your photos can go in any of them. Only the look changes.</li>
        <li>Anything in <span class="ph">[brackets]</span> is still to fill in, like your first trip and your reviews.</li>
        <li>The forms don't send anything yet.</li>
        <li>The bar at the top of every page has <strong>Next</strong>, which shows the same page in the next look.</li>
      </ul>
      <p>When you've had a look, tell me which one you like best and anything you'd change.</p>
    </div>
  </header>
  <main>
    <div class="wrap">
      <ul class="picks">${cards}
      </ul>
    </div>
  </main>
  <footer><div class="wrap">This is a preview, not the live website yet.</div></footer>
</body>
</html>
`);
console.log("Design preview built in _site/");
