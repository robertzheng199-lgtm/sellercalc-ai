import type { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "关于 SellerCalc AI",
  description:
    "SellerCalc AI 构建简单免费的工具，帮助电商卖家理解利润、费用和广告表现。",
  alternates: {
    canonical: `${siteUrl}/zh/about`,
    languages: alternateLanguages("/about"),
  },
};

export default function ZhAbout() {
  return <AboutView dict={getDictionary("zh")} />;
}