import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tedros Tesfu",
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
        <Sidebar />
        <div className="lg:pl-[104px] min-h-screen">{children}</div>
      </body>
    </html>
  );
}
