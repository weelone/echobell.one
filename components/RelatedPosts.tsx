import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { blog } from "@/lib/source";
import { Language } from "@/lib/i18n";
import { displayDate } from "@/lib/date";

const relatedPostsUi: Record<Language, { heading: string; readMore: string }> = {
  en: { heading: "Related articles", readMore: "Read more" },
  zh: { heading: "相关文章", readMore: "阅读更多" },
  es: { heading: "Artículos relacionados", readMore: "Leer más" },
  fr: { heading: "Articles connexes", readMore: "Lire la suite" },
  ja: { heading: "関連記事", readMore: "続きを読む" },
  de: { heading: "Verwandte Artikel", readMore: "Mehr lesen" },
};

interface RelatedPostsProps {
  lang: Language;
  currentSlug: string;
  tags?: string[];
  limit?: number;
}

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

/**
 * Picks the most relevant other blog posts for internal linking.
 * Scores by shared-tag overlap first, then falls back to recency so every
 * article — even untagged ones — surfaces a useful set of links.
 */
export function RelatedPosts({
  lang,
  currentSlug,
  tags,
  limit = 3,
}: RelatedPostsProps) {
  const ui = relatedPostsUi[lang] ?? relatedPostsUi.en;
  const currentTags = new Set((tags ?? []).map(normalizeTag));

  const candidates = [...blog.getPages(lang)]
    .filter((page) => page.slugs[0] !== currentSlug)
    .map((page) => {
      const pageTags = (page.data.tags ?? []).map(normalizeTag);
      const shared = pageTags.filter((tag) => currentTags.has(tag)).length;
      return {
        page,
        shared,
        time: new Date(page.data.date).getTime(),
      };
    })
    .sort((a, b) => {
      // More shared tags wins; otherwise the more recent post wins.
      if (b.shared !== a.shared) return b.shared - a.shared;
      return b.time - a.time;
    })
    .slice(0, limit);

  if (candidates.length === 0) return null;

  return (
    <section className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
      <h2 className="mb-6 text-lg font-semibold opacity-80">{ui.heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {candidates.map(({ page }) => (
          <Link
            key={page.url}
            href={page.url}
            className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <time
              dateTime={new Date(page.data.date).toISOString()}
              className="text-xs opacity-50"
            >
              {displayDate(new Date(page.data.date), lang)}
            </time>
            <h3 className="mt-2 line-clamp-2 font-medium opacity-90 group-hover:opacity-70">
              {page.data.title}
            </h3>
            {page.data.description && (
              <p className="mt-2 line-clamp-2 text-sm opacity-60">
                {page.data.description}
              </p>
            )}
            <span className="mt-4 flex items-center text-sm font-semibold text-orange-600 dark:text-orange-400">
              {ui.readMore}
              <ArrowRightIcon className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
