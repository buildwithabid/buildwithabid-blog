# BuildWithAbid Blog

Personal blog built with Next.js 15, TypeScript, and Tailwind CSS v4. Blog posts are markdown files — no CMS needed.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Add a Post

1. Create a new `.md` file in the `content/` folder:

```markdown
---
title: "Your Post Title"
date: "2026-03-20"
description: "A short description for previews and SEO."
tags: ["Tag1", "Tag2"]
---

Your markdown content here.
```

2. The filename becomes the URL slug: `content/my-post.md` → `/blog/my-post`
3. Commit and push — Vercel deploys automatically.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. No configuration needed — it works out of the box

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Markdown:** gray-matter + remark + remark-html
- **Fonts:** Instrument Serif, DM Sans, JetBrains Mono
- **Deploy:** Vercel
