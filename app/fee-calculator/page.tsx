import type { Metadata } from "next";
import FeeView from "@/components/pages/FeeView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok Shop Fee Calculator",
  description:
    "Estimate TikTok Shop platform fees, affiliate commission and seller payout with this free fee calculator for TikTok Shop sellers.",
  alternates: {
    canonical: `${siteUrl}/fee-calculator`,
    languages: alternateLanguages("/fee-calculator"),
  },
};

export default function FeeCalculatorPage() {
  return <FeeView dict={getDictionary("en")} />;
}