import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

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
    <html lang="en" className={`${wrk_sans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
