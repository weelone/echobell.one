import { docs, blog as blogPosts } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { i18n } from "./i18n";

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  i18n,
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  // Use pageTree.transformers to customize sidebar titles
  pageTree: {
    transformers: [
      {
        file(node, filePath) {
          // Use sidebarTitle if available, otherwise keep the default title
          if (filePath) {
            const fileData = this.storage.read(filePath);
            const sidebarTitle = (fileData?.data as { sidebarTitle?: string })
              ?.sidebarTitle;
            if (sidebarTitle) {
              node.name = sidebarTitle;
            }
          }
          return node;
        },
      },
    ],
  },
});

export const blog = loader({
  i18n,
  baseUrl: "/blog",
  source: toFumadocsSource(blogPosts, []),
});
