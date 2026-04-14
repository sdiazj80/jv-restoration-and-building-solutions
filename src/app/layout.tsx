import type { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JV Restoration & Building Solutions | San Antonio Roofing",
  description:
    "San Antonio's modern roofing brand. Storm damage, replacements, inspections — done right. Call (210) 551-0119 for a free estimate.",
  keywords:
    "roofing San Antonio, roof repair, roof replacement, storm damage, hail damage, roof inspection",
  openGraph: {
    title: "JV Restoration & Building Solutions",
    description: "San Antonio roofing. Done right. Call (210) 551-0119.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-neutral-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
