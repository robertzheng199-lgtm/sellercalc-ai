import type { Metadata } from "next";
import ToolsView from "@/components/pages/ToolsView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok 卖家工具",
  description:
    "为 TikTok Shop 卖家提供的免费计算器：利润计算器、费用计算器和 ROAS 计算器。计算真实利润、费用和广告效果。",
  alternates: {
    canonical: `${siteUrl}/zh/tools`,
    languages: alternateLanguages("/tools"),
  },
};

export default function ZhTools() {
  return <ToolsView dict={getDictionary("zh")} locale="zh" />;
}