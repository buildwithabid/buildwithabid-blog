import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const pillars = [
  {
    emoji: "\u{1F50D}",
    title: "Discover",
    description:
      "Find the best AI tools for your goals. I test, compare, and break down what actually works so you don't waste time.",
    gradient: "from-teal-500/10 to-emerald-500/5",
  },
  {
    emoji: "\u{1F6E0}\uFE0F",
    title: "Build",
    description:
      "Create real websites, apps, and automations with AI. No years of coding needed — just the right approach and tools.",
    gradient: "from-emerald-500/10 to-green-500/5",
  },
  {
    emoji: "\u{1F3A4}\uFE0F",
    title: "Teach",
    description:
      "Learn reusable skills through workshops, tutorials, and hands-on guides. Walk away building, not just watching.",
    gradient: "from-amber-500/10 to-orange-500/5",
  },
];

const buildCards = [
  { emoji: "\u{1F310}", title: "Websites", description: "Professional sites with modern design and functionality" },
  { emoji: "\u{1F4F1}", title: "Mobile Apps", description: "Cross-platform apps for iOS and Android" },
  { emoji: "\u26A1", title: "Automation", description: "Workflows that save hours of repetitive work" },
  { emoji: "\u{1F4CA}", title: "Data Analysis", description: "Dashboards, reports, and insights from your data" },
  { emoji: "\u{1F3A8}", title: "Design", description: "Logos, graphics, and visual content with AI" },
  { emoji: "\u{1F4BC}", title: "Business Tools", description: "CRMs, invoicing, scheduling, and more" },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light text-accent text-xs font-semibold tracking-wide mb-6 border border-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Teacher &middot; Mentor &middot; AI Expert
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] mb-6 tracking-tight">
            You have the idea. AI has the power.
            <br className="hidden sm:block" />{" "}
            <span className="italic text-accent">I&apos;ll show you how to build it.</span>
          </h1>
          <p className="text-lg text-dim max-w-2xl leading-relaxed">
            Workshops, tutorials, and hands-on guides that teach you how to
            leverage AI to build real websites, apps, and tools — no coding
            experience required.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <Link
              href="/workshop"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md shadow-accent/20"
            >
              Join the Workshop
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-text text-sm font-semibold rounded-lg hover:border-accent/40 hover:bg-accent-light/50 transition-all"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        {/* About Me */}
        <section className="mb-24 -mt-6">
          <div className="rounded-2xl border border-border/60 bg-surface p-8 sm:p-10 shadow-sm">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-4">
              About Me
            </h2>
            <p className="text-dim leading-relaxed mb-4 max-w-3xl">
              I&apos;m Abid — a teacher, mentor, and AI expert helping people discover
              the power of artificial intelligence to build real things. I believe
              everyone deserves access to the skills and tools that turn ideas into
              reality.
            </p>
            <blockquote className="border-l-3 border-accent bg-accent-light/50 rounded-r-lg px-5 py-3 mb-5 italic text-dim">
              &ldquo;Technology should make life easier, not harder to learn.&rdquo;
            </blockquote>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-accent">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-accent-light rounded-full">
                Discover AI Tools
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-accent-light rounded-full">
                Build Real Things
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-accent-light rounded-full">
                Teach Reusable Skills
              </span>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-24">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`card-hover rounded-2xl border border-border/60 bg-gradient-to-br ${p.gradient} bg-surface p-7 shadow-sm`}
            >
              <span className="text-3xl mb-4 block">{p.emoji}</span>
              <h3 className="font-bold text-lg mb-2 text-text">{p.title}</h3>
              <p className="text-sm text-dim leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </section>

        {/* Workshop Spotlight */}
        <section className="mb-24">
          <div className="rounded-2xl bg-gradient-to-br from-accent-light via-green-light to-accent-light border border-accent/15 p-8 sm:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold tracking-wide mb-4">
              Live Workshop
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight mb-4">
              Build a Complete Website in 60 Minutes
            </h2>
            <ul className="space-y-2 mb-6 text-dim">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No coding experience needed
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Walk away with a real, live website
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Learn reusable skills for building anything with AI
              </li>
            </ul>
            <Link
              href="/workshop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md shadow-accent/20"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* What You Can Build */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-2">
            What You Can Build with AI
          </h2>
          <p className="text-sm text-dim mb-8">The only limit is your imagination</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildCards.map((card) => (
              <div
                key={card.title}
                className="card-hover rounded-2xl border border-border/60 bg-surface p-6 shadow-sm"
              >
                <span className="text-3xl mb-3 block">{card.emoji}</span>
                <h3 className="font-bold text-base mb-1 text-text">{card.title}</h3>
                <p className="text-sm text-dim leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Posts */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
                Latest Posts
              </h2>
              <p className="text-sm text-dim mt-1">Tutorials, deep dives, and AI building guides</p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
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
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
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
        </section>

        {/* Follow Section */}
        <section>
          <div className="rounded-2xl bg-gradient-to-br from-[#18181b] to-[#27272a] p-8 sm:p-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-3">
              Follow the Journey
            </h2>
            <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
              Stay updated with the latest tutorials, workshops, and AI building guides
            </p>
            <div className="flex justify-center flex-wrap gap-3">
              <a
                href="https://youtube.com/@BuildWithAbidAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-accent/50 hover:border-accent/60 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              <a
                href="https://x.com/BuildWithAbid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-accent/50 hover:border-accent/60 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X / Twitter
              </a>
              <a
                href="https://linkedin.com/in/BuildWithAbid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-accent/50 hover:border-accent/60 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/BuildWithAbid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-accent/50 hover:border-accent/60 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
