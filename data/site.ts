export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Tedros Tesfu",
  title: "Software engineer building products end to end",
  description:
    "Software engineer who turns ideas and early versions into polished products—from design and code through launch.",
  email: "tedtfu@gmail.com",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "mailto:tedtfu@gmail.com?subject=Book%20a%20call",
  scoreUrl:
    process.env.NEXT_PUBLIC_SCORE_URL ?? "https://score.tedtes.com",
  links: {
    github: "https://github.com/TedTes",
    linkedin: "https://linkedin.com/in/tedrostesfu",
    x: "https://x.com/Tedi_Tes",
  },
} as const;
