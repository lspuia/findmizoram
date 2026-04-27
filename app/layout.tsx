import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "findmizoram.com — Coming Soon",
  description:
    "Mizoram's local business directory. Find restaurants, hotels, shops and services across Aizawl and Mizoram.",
  keywords: [
    "Mizoram business directory",
    "Aizawl restaurants",
    "hotels in Mizoram",
    "local businesses Mizoram",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
      <Analytics />
    </html>
  );
}
