import { z } from "zod";

export default {
  layout: "essay.njk",
  tags: ["essays"],
  eleventyComputed: {
    permalink: (data) => `/essays/${data.slug}/`,
  },
  eleventyDataSchema: function (data) {
    let result = z
      .object({
        title: z.string().min(1),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        date: z.coerce.date(),
        description: z.string().min(1),
        updated: z.optional(z.coerce.date()),
        draft: z.optional(z.boolean()),
        syndication: z.optional(z.array(z.string().url())),
        spot: z.optional(z.string().regex(/^#[0-9a-f]{6}$/i)),
      })
      .safeParse(data);

    if (result.error) {
      throw new Error(z.prettifyError(result.error));
    }
  },
};
