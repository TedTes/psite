export const dynamic = "force-dynamic";

import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import RecentPosts from "@/components/RecentPosts";
export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <RecentPosts />
    </main>
  );
}
