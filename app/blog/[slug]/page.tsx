import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article>
      {/* Immersive header */}
      <div className="post-header-gradient border-b border-border/40">
        <div className="mx-auto max-w-3xl px-6 pt-12 pb-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-dim hover:text-accent transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-light text-accent border border-accent/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.12] tracking-tight mb-5">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-dim text-[1.1rem] leading-relaxed max-w-2xl mb-6">
            {post.description}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-4 text-sm text-dim">
            <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-surface border border-border/60">
              <time className="flex items-center gap-1.5 font-medium">
                <svg
                  className="w-4 h-4 text-accent/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {post.date}
              </time>
              <span className="w-px h-4 bg-border" />
              <span className="flex items-center gap-1.5 font-medium">
                <svg
                  className="w-4 h-4 text-accent/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Post content */}
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
