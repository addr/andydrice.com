import markdownItFootnote from "markdown-it-footnote";

export default function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.set({ typographer: true });
    mdLib.use(markdownItFootnote);
  });

  // Cloudflare serves essays/<slug>/index.html at /essays/<slug> and redirects
  // the trailing-slash form, so every URL the site emits omits the slash.
  eleventyConfig.addUrlTransform(({ url }) => {
    if (url.length > 1 && url.endsWith("/")) {
      return url.slice(0, -1);
    }
    return url;
  });

  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));
  eleventyConfig.addFilter("readableDate", (date) =>
    date.toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" })
  );
}
