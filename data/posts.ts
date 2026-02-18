export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  isPublic: boolean;
}

export const posts: Post[] = [
  {
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Applications in 2026",
    excerpt:
      "Lessons learned from architecting large-scale React apps — from state management to code splitting strategies.",
    content: `
## Why Scalability Matters

When your React application grows beyond a handful of components, you start running into challenges that small projects never face. State management becomes unwieldy, bundle sizes balloon, and developer experience suffers.

Here are the key principles I follow when building React apps that need to scale.

## 1. Co-locate State Where It's Used

One of the biggest mistakes I see is lifting all state to a global store. Not every piece of data needs to live in Redux or Zustand. Start local, and only lift when you genuinely need to share state across distant parts of the tree.

\`\`\`tsx
// Good: local state for local concerns
function SearchBar() {
  const [query, setQuery] = useState("");
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
\`\`\`

## 2. Code Split at the Route Level

Use dynamic imports and React.lazy to split your bundle by route. This ensures users only download the code they need for the page they're viewing.

\`\`\`tsx
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
\`\`\`

## 3. Use Server Components Where Possible

With Next.js App Router, server components are the default. Embrace this — keep client-side JavaScript minimal and let the server do the heavy lifting for data fetching and rendering.

## 4. Establish Clear Module Boundaries

Organize your code into feature modules with clear public APIs. This prevents spaghetti imports and makes it easier to refactor or replace individual features.

## Final Thoughts

Scalability isn't about choosing the right library — it's about making intentional decisions early that compound over time. Start simple, measure, and optimize where it matters.
    `,
    date: "2026-02-10",
    readTime: "5 min read",
    tags: ["React", "Architecture", "Performance"],
    author: "Alex Morgan",
    isPublic: true,
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt:
      "From container queries to CSS nesting, explore the latest CSS features that are changing how we style the web.",
    content: `
## CSS Has Evolved

CSS in 2026 is a completely different language from what many developers learned. With native nesting, container queries, and the \`:has()\` selector, we can do things that previously required JavaScript or complex workarounds.

## Container Queries

Instead of basing styles on viewport width, container queries let you style elements based on their parent container's size. This is a game-changer for reusable components.

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## Native CSS Nesting

No more Sass just for nesting. CSS now supports it natively:

\`\`\`css
.nav {
  background: #1a1a1a;

  & a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #6366f1;
    }
  }
}
\`\`\`

## The :has() Selector

Often called the "parent selector," \`:has()\` lets you style a parent based on its children:

\`\`\`css
.form-group:has(input:invalid) {
  border-color: red;
}
\`\`\`

## Scroll-Driven Animations

Animate elements based on scroll position without JavaScript:

\`\`\`css
.hero-image {
  animation: parallax linear;
  animation-timeline: scroll();
}
\`\`\`

## Conclusion

Modern CSS is incredibly powerful. Before reaching for a CSS-in-JS library, check if native CSS can handle your use case — it probably can.
    `,
    date: "2026-01-28",
    readTime: "4 min read",
    tags: ["CSS", "Web Development", "Frontend"],
    author: "Alex Morgan",
    isPublic: true,
  },
  {
    slug: "typescript-tips-tricks",
    title: "TypeScript Tips That Improved My Code Quality",
    excerpt:
      "Practical TypeScript patterns that go beyond the basics — discriminated unions, template literals, and more.",
    content: `
## Beyond the Basics

TypeScript is more than just adding types to JavaScript. When used well, it becomes a design tool that catches bugs at compile time and makes your code self-documenting.

## Discriminated Unions

Instead of optional properties, use discriminated unions to model states that are mutually exclusive:

\`\`\`tsx
type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string };
\`\`\`

Now TypeScript will narrow the type based on the status field, and you can't accidentally access \`data\` in the error state.

## Template Literal Types

Create precise string types using template literals:

\`\`\`tsx
type Color = "red" | "blue" | "green";
type Shade = "light" | "dark";
type ColorVariant = \`\${Shade}-\${Color}\`;
// "light-red" | "light-blue" | "light-green" | "dark-red" | ...
\`\`\`

## The satisfies Operator

Use \`satisfies\` to validate a type without widening it:

\`\`\`tsx
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
} satisfies Record<string, string | number>;
// config.apiUrl is still typed as string, not string | number
\`\`\`

## Const Assertions

Use \`as const\` to preserve literal types in arrays and objects:

\`\`\`tsx
const ROLES = ["admin", "editor", "viewer"] as const;
type Role = (typeof ROLES)[number]; // "admin" | "editor" | "viewer"
\`\`\`

## Key Takeaway

Good TypeScript isn't about typing everything — it's about typing things precisely enough that invalid states become unrepresentable.
    `,
    date: "2026-01-15",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: "Alex Morgan",
    isPublic: true,
  },
  {
    slug: "freelancing-lessons",
    title: "What I Learned After 2 Years of Freelance Development",
    excerpt:
      "Honest reflections on freelancing — finding clients, setting rates, managing projects, and avoiding burnout.",
    content: `
## The Reality of Freelancing

Freelancing as a developer sounds like the dream — work from anywhere, choose your projects, set your own hours. And it can be all of that. But it also comes with challenges nobody warns you about.

## Finding Your First Clients

The hardest part of freelancing isn't the coding — it's the selling. My first clients came from:

- **Open source contributions** that showcased my skills
- **Writing blog posts** that demonstrated expertise
- **Referrals** from developers who were too busy to take on work
- **Local meetups** where I connected with startup founders

## Setting Your Rates

I started too low. Here's what I wish I knew: your rate should cover not just your time coding, but also the time you spend on communication, project management, invoicing, taxes, healthcare, and professional development.

A simple formula: take what you'd want as an annual salary, divide by 1,000. That's roughly your hourly rate.

## Managing Client Expectations

The most important skill isn't React or Node.js — it's communication. I send weekly progress updates, set clear milestones, and always under-promise and over-deliver.

## Avoiding Burnout

When you're freelancing, every hour not working feels like money lost. This mindset leads to burnout fast. I now:

- Set strict working hours
- Take at least one full day off per week
- Say no to projects that don't excite me
- Invest in hobbies outside of coding

## Final Advice

Freelancing isn't for everyone, and that's okay. But if you value autonomy and variety in your work, it can be incredibly rewarding. Start with a side project while employed, build your network, and make the leap when you have a financial cushion.
    `,
    date: "2026-01-02",
    readTime: "7 min read",
    tags: ["Freelancing", "Career", "Productivity"],
    author: "Alex Morgan",
    isPublic: true,
  },
];
