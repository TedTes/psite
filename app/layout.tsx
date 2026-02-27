import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { getPublicPosts } from "@/lib/posts";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Morgan | Freelance Developer & Designer",
  description:
    "Product-focused engineer and designer building modern digital products from concept to launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const blogLinks = getPublicPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
  }));

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased lg:flex`}>
        <Sidebar blogLinks={blogLinks} />
        <div className="flex-1 min-h-screen pt-14 lg:pt-0 flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
