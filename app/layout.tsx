import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sellercalc-ai.vercel.app"),

  title: {
    default: "SellerCalc AI - TikTok Seller Tools",
    template: "%s | SellerCalc AI",
  },

  description:
    "Free TikTok Shop calculators for sellers. Calculate profit, fees, ROAS, margins and break-even prices.",

  keywords: [
    "TikTok Shop Profit Calculator",
    "TikTok Shop Fee Calculator",
    "TikTok Shop ROAS Calculator",
    "TikTok Seller Tools",
  ],

  openGraph: {
    title: "SellerCalc AI - TikTok Seller Tools",
    description: "Free calculators for TikTok Shop sellers.",
    type: "website",
    siteName: "SellerCalc AI",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}