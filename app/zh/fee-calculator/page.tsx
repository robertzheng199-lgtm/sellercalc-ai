import type { Metadata } from "next";
import FeeView from "@/components/pages/FeeView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok Shop 费用计算器",
  description:
    "用免费的 TikTok Shop 费用计算器估算平台费用、达人佣金和卖家到手金额。",
  alternates: {
    canonical: `${siteUrl}/zh/fee-calculator`,
    languages: alternateLanguages("/fee-calculator"),
  },
};

export default function ZhFeeCalculator() {
  return <FeeView dict={getDictionary("zh")} />;
}