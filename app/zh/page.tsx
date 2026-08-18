import type { Metadata } from "next";
import HomeView from "@/components/pages/HomeView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "SellerCalc AI - TikTok 卖家工具",
  description:
    "免费的 TikTok Shop 卖家计算器：利润、费用和 ROAS。分析商品利润率与电商盈利情况。",
  alternates: {
    canonical: `${siteUrl}/zh`,
    languages: alternateLanguages("/"),
  },
};

export default function ZhHome() {
  return <HomeView dict={getDictionary("zh")} locale="zh" />;
}