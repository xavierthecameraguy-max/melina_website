import { HtmlBasePlugin } from "@11ty/eleventy";

const FONT_FILES = [
  "node_modules/@fontsource-variable/fraunces/files/fraunces-latin-soft-normal.woff2",
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
  for (const file of FONT_FILES) {
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

  // "(859) 555-0123" -> "tel:+18595550123"
  eleventyConfig.addFilter("telHref", (phone) => {
    const digits = String(phone).replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
    return `tel:+1${digits}`;
  });

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
