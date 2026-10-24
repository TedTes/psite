export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Tedros Tesfu",
  title: "Software engineer building products end to end",
  description:
    "Software engineer who turns working first versions into polished products people trust—from design and code through launch.",
  email: "tedtfu@gmail.com",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "mailto:tedtfu@gmail.com?subject=Book%20a%20call",
  auditCheckoutUrl:
    process.env.NEXT_PUBLIC_AUDIT_CHECKOUT_URL ??
    "mailto:tedtfu@gmail.com?subject=Launch%20Audit",
  scoreUrl:
    process.env.NEXT_PUBLIC_SCORE_URL ?? "https://score.tedtes.com",
  links: {
    github: "https://github.com/TedTes",
    linkedin: "https://linkedin.com/in/tedrostesfu",
    x: "https://x.com/TedTes",
  },
} as const;

export const offers = [
  {
    name: "Launch Audit",
    price: "custom quote",
    timeline: "3–5 business days",
    description: "A focused review of the product you have now and what is keeping it from feeling launch-ready.",
    deliverables: [
      "UX, visual polish, reliability, and launch-readiness review",
      "Prioritized findings with screenshots and concrete fixes",
      "A clear recommendation for what to fix first",
    ],
  },
  {
    name: "Finishing Sprint",
    price: "custom quote",
    timeline: "1–3 weeks",
    description: "A short build engagement to fix the highest-impact problems and finish the product.",
    deliverables: [
      "UI and interaction refinement",
      "Responsive, accessibility, and reliability fixes",
      "Production-ready implementation in your existing codebase",
    ],
  },
  {
    name: "Retainer",
    price: "custom monthly quote",
    timeline: "month to month",
    description: "Ongoing product engineering for teams that need a dependable builder after launch.",
    deliverables: [
      "A reserved block of product engineering time",
      "Weekly priorities and visible progress",
      "Design, frontend, backend, and launch support",
    ],
  },
] as const;
