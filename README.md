# Tedros Tesfu Personal Site

Next.js portfolio site with a repo-backed blog, project hierarchy, and generated project case-study pages.

## Structure

- `app/page.tsx` - homepage with intro, featured work, and writing links.
- `app/projects/page.tsx` - grouped project index.
- `app/projects/[slug]/page.tsx` - data-driven project case studies.
- `app/blog` - writing index, series reader, and standalone posts.
- `data/projects.ts` - project hierarchy, links, case-study copy, and display helpers.
- `content/blog` - markdown source for repo-backed writing.

## Project Hierarchy

Projects are grouped in `data/projects.ts`:

- `Flagship Product Systems`
- `Applied AI / Automation`
- `Developer Tools`
- `Education / Language`

Set `featuredOrder` on a project to show it on the homepage. The project index renders all projects with a live link or GitHub link.

## Blog Publishing

Blog posts live in `content/blog/<year>/*.md`.

To publish a new standalone post:

1. Add a markdown file under `content/blog/2026/` or another year folder.
2. Include frontmatter with `title`, `excerpt`, `date`, `tags`, and `author`.
3. Commit and deploy.

Series posts use extra frontmatter such as `series`, `seriesSlug`, `chapter`, `chapterSlug`, `chapterOrder`, and `topicOrder`.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```
