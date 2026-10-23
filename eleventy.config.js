import { load } from "js-yaml";

export default function (eleventyConfig) {
  // Textos y datos de la landing en src/_data/*.yml
  eleventyConfig.addDataExtension("yml", (contenido) => load(contenido));

  eleventyConfig.addPassthroughCopy({ img: "img" });

  // El CSS y JS de los componentes se juntan en src/assets/*.11ty.js
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("src/scripts/");
  eleventyConfig.addWatchTarget("src/components/");

  return {
    templateFormats: ["njk", "11ty.js"],
    dir: {
      input: "src",
      includes: "components",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
  };
}
