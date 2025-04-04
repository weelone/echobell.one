import Link from 'next/link';
import { blog } from '@/lib/source';

export default async function Page({params}: {
  params: Promise<{ lang: string }>,
}) {
  const { lang } = await params;

  const posts = [...blog.getPages(lang)].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="dark:hidden mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-orange-400 opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl">Echobell Blog</h2>
          <p className="mt-2 text-lg/8 opacity-60">Explore our latest insights and stories.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600/20 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.url} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.data.date.toDateString()} className="opacity-60">
                  {post.data.date.toDateString()}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold opacity-90 group-hover:opacity-60">
                  <Link href={post.url}>
                    <span className="absolute inset-0" />
                    {post.data.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 opacity-60">{post.data.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src={post.data.authorAvatarLink} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold opacity-90">
                    <a href={post.data.authorLink}>
                      <span className="absolute inset-0" />
                      {post.data.author}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}