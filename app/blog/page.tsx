import { getSeriesList, getStandalonePosts } from "@/lib/posts";
import type { Metadata } from "next";
import BlogLanding from "./BlogList";

export const metadata: Metadata = {
  title: "Writing | Tedros Tesfu",
  description:
    "Knowledge bases and articles on AI systems, math foundations, and software engineering.",
};

export default function BlogPage() {
  const series = getSeriesList();
  const standalonePosts = getStandalonePosts();

  return <BlogLanding series={series} standalonePosts={standalonePosts} />;
}
