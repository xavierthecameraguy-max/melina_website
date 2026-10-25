import fs from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";
import { activeTheme } from "./lib/theme.js";

// Body font every design can use, plus the active design's own fonts (listed in its theme json).
const FONT_FILES = [
  "node_modules/@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff2",
  "node_modules/@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-italic.woff2",
  "node_modules/@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-700-normal.woff2",
];

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export default function (eleventyConfig) {
  // Rewrites root links ("/about/") for the GitHub Pages path prefix.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  const themeFonts = activeTheme().fonts || [];
  for (const file of [...FONT_FILES, ...themeFonts]) {
    eleventyConfig.addPassthroughCopy({ [file]: `assets/fonts/${file.split("/").pop()}` });
  }

  // Upcoming trips, soonest first. Set `past: true` on a trip to take it off the list.
  eleventyConfig.addCollection("upcomingTrips", (api) =>
    api
      .getFilteredByGlob("src/trips/*.md")
      .filter((trip) => !trip.data.past)
      .sort((a, b) => a.data.startDate - b.data.startDate)
  );

  // First n items of a list: {{ collections.upcomingTrips | head(3) }}
  eleventyConfig.addFilter("head", (list, n) => (list || []).slice(0, n));

  // Anything still waiting on content is written in [brackets]; this highlights it.
  // Usage: {{ trip.data.title | ph | safe }}
  eleventyConfig.addFilter("ph", (text) =>
    escapeHtml(text).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>')
  );
  // Same, for HTML that's already rendered (a trip's Markdown text).
  eleventyConfig.addFilter("phHtml", (html) =>
    String(html ?? "").replace(/\[([^\]<>]+)\]/g, '<span class="ph">[$1]</span>')
  );
  eleventyConfig.addShortcode("ph", (text) => `<span class="ph">[${escapeHtml(text)}]</span>`);

  // Lets a long email wrap before the @ or the last dot, never mid-word.
  eleventyConfig.addFilter("emailBreak", (email) =>
    escapeHtml(email).replace("@", "<wbr>@").replace(/\.(?=[^.]*$)/, "<wbr>.")
  );

  // "(859) 555-0123" -> "tel:+18595550123"
  eleventyConfig.addFilter("telHref", (phone) => {
    const digits = String(phone).replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
    return `tel:+1${digits}`;
  });

  // Launch guard: with "draft": false, refuse to publish while anything is unfinished.
  // A failed build leaves the previous version of the site live.
  eleventyConfig.on("eleventy.after", ({ results }) => {
    const site = JSON.parse(fs.readFileSync("src/_data/site.json", "utf8"));
    if (site.draft) return;
    const problems = [];
    if (!site.web3formsAccessKey) problems.push("site.json: web3formsAccessKey is empty, so the forms can't send");
    if (!site.phone) problems.push("site.json: phone is empty");
    for (const { url, content } of results) {
      if (!url || !content) continue;
      if (content.includes('class="ph"') || content.includes("photo-ph")) problems.push(`${url} still has [placeholders] or placeholder photos`);
      if (content.includes(">Sample trip<")) problems.push(`${url} is the sample trip (delete it or set past: true)`);
    }
    if (problems.length) {
      throw new Error(`Not ready to publish ("draft" is false):\n- ${[...new Set(problems)].join("\n- ")}`);
    }
  });

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
