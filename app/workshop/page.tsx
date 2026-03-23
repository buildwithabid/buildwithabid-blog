import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop — Build a Complete Website in 60 Minutes",
  description:
    "Join a live 60-minute workshop where you'll build a complete, professional website using AI. No coding experience required.",
};

const painPoints = [
  {
    emoji: "\u{1F625}",
    title: "\"I want to build but don't know how to code\"",
    description: "You have great ideas but the technical barrier feels impossible to overcome.",
  },
  {
    emoji: "\u23F3",
    title: "\"I spent months learning and still can't build anything real\"",
    description: "Traditional courses take forever and still leave you staring at a blank screen.",
  },
  {
    emoji: "\u{1F4B8}",
    title: "\"Hiring a developer costs thousands\"",
    description: "You shouldn't need to empty your wallet just to get a website or app off the ground.",
  },
];

const websiteFeatures = [
  "Hero section with compelling headline",
  "About / services section",
  "Contact form that works",
  "Mobile-responsive design",
  "Professional, modern look",
  "Live URL you can share",
];

const audienceCards = [
  { emoji: "\u{1F468}\u200D\u{1F4BB}", title: "Non-coders", description: "You've never written a line of code — and you don't need to" },
  { emoji: "\u{1F4BC}", title: "Aspiring Freelancers", description: "Want to offer web services without years of training" },
  { emoji: "\u{1F680}", title: "Entrepreneurs", description: "Need a professional web presence for your business or idea" },
  { emoji: "\u{1F9D0}", title: "Curious Learners", description: "Want to see what AI can really do — hands on, not theory" },
];

const beyondCards = [
  { emoji: "\u{1F4F1}", title: "Mobile Apps", description: "Build iOS and Android apps with natural language" },
  { emoji: "\u26A1", title: "Automation", description: "Create workflows that save hours every week" },
  { emoji: "\u{1F4CA}", title: "Data Analysis", description: "Turn data into dashboards and insights" },
  { emoji: "\u{1F3A8}", title: "Design", description: "Generate logos, graphics, and visual content" },
  { emoji: "\u{1F4BC}", title: "Business Tools", description: "CRMs, invoicing, scheduling — built by you" },
  { emoji: "\u{1F916}", title: "AI Assistants", description: "Custom chatbots and AI-powered tools" },
];

export default function WorkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-white text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            60-Minute Live Demo
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] mb-6 tracking-tight">
            Build a Complete Website
            <br className="hidden sm:block" />{" "}
            <span className="italic text-accent">in 60 Minutes Using AI</span>
          </h1>
          <p className="text-lg text-dim max-w-2xl leading-relaxed mb-8">
            No coding experience needed. Watch me build a professional website from
            scratch using AI — then do it yourself. Walk away with real skills and
            a real website.
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md shadow-accent/20"
          >
            Register Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        {/* The Problem */}
        <section className="mb-24 -mt-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-2">
            Sound Familiar?
          </h2>
          <p className="text-sm text-dim mb-8">You&apos;re not alone — these are the most common frustrations I hear</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-border/60 bg-surface p-7 shadow-sm"
              >
                <span className="text-3xl mb-4 block">{point.emoji}</span>
                <h3 className="font-bold text-base mb-2 text-text">{point.title}</h3>
                <p className="text-sm text-dim leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-24">
          <div className="rounded-2xl bg-gradient-to-br from-accent-light via-green-light to-accent-light border border-accent/15 p-8 sm:p-10 shadow-sm">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight mb-4">
              AI Changed Everything
            </h2>
            <p className="text-dim leading-relaxed max-w-3xl mb-4">
              You no longer need years of learning to build professional software.
              AI tools let you describe what you want in plain English and get a
              working result in minutes. The skill isn&apos;t coding anymore — it&apos;s
              knowing how to work WITH AI effectively.
            </p>
            <p className="text-text font-semibold">
              That&apos;s exactly what this workshop teaches you.
            </p>
          </div>
        </section>

        {/* What You'll Build */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-2">
            What You&apos;ll Build
          </h2>
          <p className="text-sm text-dim mb-8">A complete, professional website — live in 60 minutes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {websiteFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface px-5 py-4 shadow-sm"
              >
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-text">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-2">
            Who It&apos;s For
          </h2>
          <p className="text-sm text-dim mb-8">This workshop is designed for people who want to build, not just learn</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="card-hover rounded-2xl border border-border/60 bg-surface p-7 shadow-sm"
              >
                <span className="text-3xl mb-3 block">{card.emoji}</span>
                <h3 className="font-bold text-base mb-1 text-text">{card.title}</h3>
                <p className="text-sm text-dim leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <div className="rounded-2xl border border-border/60 bg-surface p-7 shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-light text-accent font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-base mb-2 text-text">Describe</h3>
              <p className="text-sm text-dim leading-relaxed">Tell AI what you want in plain English</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface p-7 shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-light text-accent font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-base mb-2 text-text">AI Builds</h3>
              <p className="text-sm text-dim leading-relaxed">Watch AI generate your website in real time</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface p-7 shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-light text-accent font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-base mb-2 text-text">Customize & Deploy</h3>
              <p className="text-sm text-dim leading-relaxed">Refine the design and publish it live</p>
            </div>
          </div>
          <div className="rounded-xl bg-accent-light border border-accent/15 p-6 text-center">
            <p className="text-lg font-semibold text-text">
              Your Idea{" "}
              <span className="text-accent">+</span>{" "}
              AI Power{" "}
              <span className="text-accent">=</span>{" "}
              Real Skill
            </p>
          </div>
        </section>

        {/* Beyond Websites */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-2">
            Beyond Websites
          </h2>
          <p className="text-sm text-dim mb-8">The skills you learn here apply to so much more</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beyondCards.map((card) => (
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

        {/* About the Instructor */}
        <section className="mb-24">
          <div className="rounded-2xl border border-border/60 bg-surface p-8 sm:p-10 shadow-sm">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-4">
              Your Instructor
            </h2>
            <p className="text-dim leading-relaxed mb-4 max-w-3xl">
              I&apos;m Abid — a teacher, mentor, and AI expert. I&apos;ve spent years exploring
              how artificial intelligence can empower anyone to build real things, regardless
              of their technical background. My mission is simple: help you discover AI tools,
              build with them, and teach you skills that last.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://youtube.com/@BuildWithAbidAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="register">
          <div className="rounded-2xl workshop-gradient p-8 sm:p-12 text-center text-white">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-4">
              Ready to Build?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Join the workshop and walk away with a real website, real skills, and
              a new way to think about building with AI.
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-accent font-bold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Register for the Workshop
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
