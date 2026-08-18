import type { Metadata } from "next";
import ProfitView from "@/components/pages/ProfitView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok Shop Profit Calculator",
  description:
    "Calculate estimated TikTok Shop profit after platform fees, affiliate commissions, product costs, shipping, ads and refunds.",
  alternates: {
    canonical: `${siteUrl}/profit-calculator`,
    languages: alternateLanguages("/profit-calculator"),
  },
};

export default function ProfitCalculatorPage() {
  return <ProfitView dict={getDictionary("en")} />;
}