import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { env } from "@/config/env";
import { BRAND } from "@/constants/brand";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: `${BRAND.name} — Scent follows the seasons`,
  description: "Four fragrances composed as an olfactory portrait of time.",
  openGraph: {
    title: "Quatrea — Scent follows the seasons",
    description: "Four fragrances composed as an olfactory portrait of time.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
