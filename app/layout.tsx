import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tedros Tesfu | Freelance Developer & Designer",
  description:
    "Product-focused engineer and designer building modern digital products from concept to launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;var t=localStorage.getItem('theme');var n=(t==="light"||t==="dark")?t:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");d.classList.toggle("dark",n==="dark");d.style.colorScheme=n;}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeToggle className="fixed top-4 right-4 z-[100] inline-flex items-center gap-2 rounded-full border border-accent/20 bg-card/95 px-3 py-2 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-accent/40 hover:text-accent" />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
