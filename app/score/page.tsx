import { permanentRedirect } from "next/navigation";
import { siteConfig } from "@/data/site";

export default function ScorePage() {
  permanentRedirect(siteConfig.scoreUrl);
}
