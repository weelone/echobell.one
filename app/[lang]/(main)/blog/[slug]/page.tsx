import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

export default async function Page(props: {
  params: Promise<{ lang: string;slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug], params.lang);

  if (!page) notFound();

  const Mdx = page.data.body;
  const toc = page.data.toc;

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl">{page.data.title}</h2>
          <p className="mt-2 text-lg/8 opacity-60">{page.data.description}</p>
        </div>
        <article className="container flex flex-col px-0 py-8 lg:flex-row">
          <div className="prose min-w-0 flex-1 lg:pr-8">
            <InlineTOC className='mb-8' items={toc} />
            <Mdx
              components={{
                ...defaultMdxComponents,
                File,
                Files,
                Folder,
                Tabs,
                Tab,
              }}
            />
          </div>
          <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
            <div>
              <p className="mb-1 text-fd-muted-foreground">Written by</p>
              <p className="font-medium">{page.data.author}</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
              <p className="font-medium">
                {new Date(page.data.date ?? page.file.name).toDateString()}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description:
      page.data.description ?? 'The library for building documentation sites',
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}