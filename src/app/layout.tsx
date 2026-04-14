import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JV Restoration & Building Solutions | San Antonio Roofing Experts",
  description:
    "San Antonio's trusted roofing contractor. Free roof inspections, roof repair, roof replacement, and storm damage restoration. Call (210) 551-0119 for a free estimate.",
  keywords:
    "roofing San Antonio, roof repair, roof replacement, storm damage, hail damage, roof inspection, San Antonio roofer",
  openGraph: {
    title: "JV Restoration & Building Solutions | San Antonio Roofing Experts",
    description:
      "San Antonio's trusted roofing contractor. Free inspections & estimates. Call (210) 551-0119.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
