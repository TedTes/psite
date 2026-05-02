import BlogLanding from "@/app/blog/BlogList";
import { getSeriesList, getStandalonePosts } from "@/lib/posts";

export default function Home() {
  const series = getSeriesList();
  const standalonePosts = getStandalonePosts();

  return <BlogLanding series={series} standalonePosts={standalonePosts} />;
}
