import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    authorAvatarLink: z.string().url().or(z.string()),
    authorLink: z.string().url(),
    date: z.date(),
    // Optional SEO fields
    image: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    lastModified: z.date().optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
