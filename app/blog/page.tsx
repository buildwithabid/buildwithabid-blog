import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AI coding tools, tutorials, comparisons, and honest reviews.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light text-accent text-xs font-semibold tracking-wide mb-4 border border-accent/10">
          {posts.length} articles
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-tight mb-3">
          Blog
        </h1>
        <p className="text-dim text-lg leading-relaxed max-w-xl">
          Tutorials, deep dives, and AI building guides — learn to leverage AI
          to create real things.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="card-hover group rounded-2xl border border-border/60 bg-surface p-7 shadow-sm">
              <div className="flex items-center gap-3 text-sm text-dim mb-3">
                <time className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </time>
                <span className="text-border">&middot;</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {post.readingTime}
                </span>
              </div>
              <h2 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-dim mb-4 leading-relaxed">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill text-xs font-medium px-3 py-1 rounded-full bg-surface2 text-dim border border-transparent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
