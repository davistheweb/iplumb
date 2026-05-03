import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/Footer";
import { ReachOut } from "@/components/ui/ReachOut";
import type { Metadata } from "next";
import { Work_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      className={cn("h-full", "antialiased", wrk_sans.className, "font-sans", geist.variable)}
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
