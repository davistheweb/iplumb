import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/Footer";
import { ReachOut } from "@/components/ui/ReachOut";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const wrk_sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iplumb Service",
  description: "Iplumb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${wrk_sans.className} h-full antialiased`}
    >
      <body className="relative flex w-full max-w-506 flex-col items-center justify-center overflow-x-hidden">
        <Navbar />
        {children}
        <ReachOut />
        <Footer />
      </body>
    </html>
  );
}
