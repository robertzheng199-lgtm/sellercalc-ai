import type { Metadata } from "next";
import BlogView from "@/components/pages/BlogView";
import {
  alternateLanguages,
  getDictionary,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TikTok Shop 卖家指南",
  description:
    "关于 TikTok Shop 利润、费用、ROAS 和商品定价的实用指南。",
  alternates: {
    canonical: `${siteUrl}/zh/blog`,
    languages: alternateLanguages("/blog"),
  },
};

export default function ZhBlog() {
  return <BlogView dict={getDictionary("zh")} />;
}