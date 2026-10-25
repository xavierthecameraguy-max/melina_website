import fs from "node:fs";

// The design in use: "theme" in site.json, or THEME=<name> on the command line
// (used to build previews of every design). Each design's settings live in
// src/_data/themes/<name>.json, its look in src/assets/themes/<name>/theme.css,
// and its home-page artwork in src/_includes/themes/<name>/hero-art.njk.
export function activeTheme() {
  const site = JSON.parse(fs.readFileSync("src/_data/site.json", "utf8"));
  const id = process.env.THEME || site.theme;
  const file = `src/_data/themes/${id}.json`;
  if (!fs.existsSync(file)) throw new Error(`Unknown theme "${id}": no ${file}`);
  return { id, ...JSON.parse(fs.readFileSync(file, "utf8")) };
}
