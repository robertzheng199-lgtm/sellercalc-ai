import type { Metadata } from "next";
import ProfitView from "@/components/pages/ProfitView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok Shop 利润计算器",
  description:
    "计算 TikTok Shop 商品在扣除平台费用、达人佣金、产品成本、运费、广告和退款后的预估利润。",
  alternates: {
    canonical: `${siteUrl}/zh/profit-calculator`,
    languages: alternateLanguages("/profit-calculator"),
  },
};

export default function ZhProfitCalculator() {
  return <ProfitView dict={getDictionary("zh")} />;
}