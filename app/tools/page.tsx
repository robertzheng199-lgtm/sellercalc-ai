import type { Metadata } from "next";
import ToolsView from "@/components/pages/ToolsView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok Seller Tools",
  description:
    "Free calculators for TikTok Shop sellers: profit calculator, fee calculator and ROAS calculator. Calculate real profits, fees and ad performance.",
  alternates: {
    canonical: `${siteUrl}/tools`,
    languages: alternateLanguages("/tools"),
  },
};

export default function Tools() {
  return <ToolsView dict={getDictionary("en")} locale="en" />;
}