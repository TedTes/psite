import { getPublicPosts } from "@/lib/posts";
import type { Metadata } from "next";
import BlogList from "./BlogList";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Tedros Tesfu",
  description:
    "Articles on product engineering, design systems, and building practical software.",
};

export default function BlogPage() {
  const posts = getPublicPosts();

  return <BlogList posts={posts} />;
}
