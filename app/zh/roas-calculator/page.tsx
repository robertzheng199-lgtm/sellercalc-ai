import type { Metadata } from "next";
import RoasView from "@/components/pages/RoasView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok Shop ROAS 计算器",
  description:
    "免费计算 TikTok Shop 广告回报率（ROAS），衡量你的广告投放效果。",
  alternates: {
    canonical: `${siteUrl}/zh/roas-calculator`,
    languages: alternateLanguages("/roas-calculator"),
  },
};

export default function ZhRoasCalculator() {
  return <RoasView dict={getDictionary("zh")} />;
}