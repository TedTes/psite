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
    content: `<h2>Why Scalability Matters</h2>
<p>When your React application grows beyond a handful of components, you start running into challenges that small projects never face. State management becomes unwieldy, bundle sizes balloon, and developer experience suffers.</p>
<p>Here are the key principles I follow when building React apps that need to scale.</p>

<h2>1. Co-locate State Where It's Used</h2>
<p>One of the biggest mistakes I see is lifting all state to a global store. Not every piece of data needs to live in Redux or Zustand. Start local, and only lift when you genuinely need to share state across distant parts of the tree.</p>
<pre><code>// Good: local state for local concerns
function SearchBar() {
  const [query, setQuery] = useState("");
  return &lt;input value={query} onChange={(e) =&gt; setQuery(e.target.value)} /&gt;;
}</code></pre>

<h2>2. Code Split at the Route Level</h2>
<p>Use dynamic imports and React.lazy to split your bundle by route. This ensures users only download the code they need for the page they're viewing.</p>
<pre><code>const Dashboard = lazy(() =&gt; import("./pages/Dashboard"));
const Settings = lazy(() =&gt; import("./pages/Settings"));</code></pre>

<h2>3. Use Server Components Where Possible</h2>
<p>With Next.js App Router, server components are the default. Embrace this — keep client-side JavaScript minimal and let the server do the heavy lifting for data fetching and rendering.</p>

<h2>4. Establish Clear Module Boundaries</h2>
<p>Organize your code into feature modules with clear public APIs. This prevents spaghetti imports and makes it easier to refactor or replace individual features.</p>

<h2>Final Thoughts</h2>
<p>Scalability isn't about choosing the right library — it's about making intentional decisions early that compound over time. Start simple, measure, and optimize where it matters.</p>`,
    date: "2026-02-10",
    readTime: "5 min read",
    tags: ["React", "Architecture", "Performance"],
    author: "Tedros Tesfu",
    isPublic: true,
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt:
      "From container queries to CSS nesting, explore the latest CSS features that are changing how we style the web.",
    content: `<h2>CSS Has Evolved</h2>
<p>CSS in 2026 is a completely different language from what many developers learned. With native nesting, container queries, and the <code>:has()</code> selector, we can do things that previously required JavaScript or complex workarounds.</p>

<h2>Container Queries</h2>
<p>Instead of basing styles on viewport width, container queries let you style elements based on their parent container's size. This is a game-changer for reusable components.</p>
<pre><code>.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}</code></pre>

<h2>Native CSS Nesting</h2>
<p>No more Sass just for nesting. CSS now supports it natively:</p>
<pre><code>.nav {
  background: #1a1a1a;

  &amp; a {
    color: white;
    text-decoration: none;

    &amp;:hover {
      color: #6366f1;
    }
  }
}</code></pre>

<h2>The :has() Selector</h2>
<p>Often called the "parent selector," <code>:has()</code> lets you style a parent based on its children:</p>
<pre><code>.form-group:has(input:invalid) {
  border-color: red;
}</code></pre>

<h2>Scroll-Driven Animations</h2>
<p>Animate elements based on scroll position without JavaScript:</p>
<pre><code>.hero-image {
  animation: parallax linear;
  animation-timeline: scroll();
}</code></pre>

<h2>Conclusion</h2>
<p>Modern CSS is incredibly powerful. Before reaching for a CSS-in-JS library, check if native CSS can handle your use case — it probably can.</p>`,
    date: "2026-01-28",
    readTime: "4 min read",
    tags: ["CSS", "Web Development", "Frontend"],
    author: "Tedros Tesfu",
    isPublic: true,
  },
  {
    slug: "typescript-tips-tricks",
    title: "TypeScript Tips That Improved My Code Quality",
    excerpt:
      "Practical TypeScript patterns that go beyond the basics — discriminated unions, template literals, and more.",
    content: `<h2>Beyond the Basics</h2>
<p>TypeScript is more than just adding types to JavaScript. When used well, it becomes a design tool that catches bugs at compile time and makes your code self-documenting.</p>

<h2>Discriminated Unions</h2>
<p>Instead of optional properties, use discriminated unions to model states that are mutually exclusive:</p>
<pre><code>type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string };</code></pre>
<p>Now TypeScript will narrow the type based on the status field, and you can't accidentally access <code>data</code> in the error state.</p>

<h2>Template Literal Types</h2>
<p>Create precise string types using template literals:</p>
<pre><code>type Color = "red" | "blue" | "green";
type Shade = "light" | "dark";
type ColorVariant = \`\${Shade}-\${Color}\`;
// "light-red" | "light-blue" | "light-green" | "dark-red" | ...</code></pre>

<h2>The satisfies Operator</h2>
<p>Use <code>satisfies</code> to validate a type without widening it:</p>
<pre><code>const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
} satisfies Record&lt;string, string | number&gt;;
// config.apiUrl is still typed as string, not string | number</code></pre>

<h2>Const Assertions</h2>
<p>Use <code>as const</code> to preserve literal types in arrays and objects:</p>
<pre><code>const ROLES = ["admin", "editor", "viewer"] as const;
type Role = (typeof ROLES)[number]; // "admin" | "editor" | "viewer"</code></pre>

<h2>Key Takeaway</h2>
<p>Good TypeScript isn't about typing everything — it's about typing things precisely enough that invalid states become unrepresentable.</p>`,
    date: "2026-01-15",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: "Tedros Tesfu",
    isPublic: true,
  },
  {
    slug: "freelancing-lessons",
    title: "What I Learned After 2 Years of Freelance Development",
    excerpt:
      "Honest reflections on freelancing — finding clients, setting rates, managing projects, and avoiding burnout.",
    content: `<h2>The Reality of Freelancing</h2>
<p>Freelancing as a developer sounds like the dream — work from anywhere, choose your projects, set your own hours. And it can be all of that. But it also comes with challenges nobody warns you about.</p>

<h2>Finding Your First Clients</h2>
<p>The hardest part of freelancing isn't the coding — it's the selling. My first clients came from:</p>
<ul>
<li><strong>Open source contributions</strong> that showcased my skills</li>
<li><strong>Writing blog posts</strong> that demonstrated expertise</li>
<li><strong>Referrals</strong> from developers who were too busy to take on work</li>
<li><strong>Local meetups</strong> where I connected with startup founders</li>
</ul>

<h2>Setting Your Rates</h2>
<p>I started too low. Here's what I wish I knew: your rate should cover not just your time coding, but also the time you spend on communication, project management, invoicing, taxes, healthcare, and professional development.</p>
<p>A simple formula: take what you'd want as an annual salary, divide by 1,000. That's roughly your hourly rate.</p>

<h2>Managing Client Expectations</h2>
<p>The most important skill isn't React or Node.js — it's communication. I send weekly progress updates, set clear milestones, and always under-promise and over-deliver.</p>

<h2>Avoiding Burnout</h2>
<p>When you're freelancing, every hour not working feels like money lost. This mindset leads to burnout fast. I now:</p>
<ul>
<li>Set strict working hours</li>
<li>Take at least one full day off per week</li>
<li>Say no to projects that don't excite me</li>
<li>Invest in hobbies outside of coding</li>
</ul>

<h2>Final Advice</h2>
<p>Freelancing isn't for everyone, and that's okay. But if you value autonomy and variety in your work, it can be incredibly rewarding. Start with a side project while employed, build your network, and make the leap when you have a financial cushion.</p>`,
    date: "2026-01-02",
    readTime: "7 min read",
    tags: ["Freelancing", "Career", "Productivity"],
    author: "Tedros Tesfu",
    isPublic: true,
  },
];
