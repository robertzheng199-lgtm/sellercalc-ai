import type { Metadata } from "next";
import HomeView from "@/components/pages/HomeView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "SellerCalc AI - Free TikTok Seller Tools",
  description:
    "Free TikTok Shop seller calculators for profit, fees and ROAS. Analyze product margins and ecommerce profitability.",
  alternates: {
    canonical: siteUrl,
    languages: alternateLanguages("/"),
  },
};

export default function Home() {
  return <HomeView dict={getDictionary("en")} locale="en" />;
}