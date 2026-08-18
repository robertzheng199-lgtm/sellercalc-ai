import type { Metadata } from "next";
import ToolCard from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "TikTok Seller Tools",
  description:
    "Free calculators for TikTok Shop sellers: profit calculator, fee calculator and ROAS calculator. Calculate real profits, fees and ad performance.",
};

const tools = [
  {
    title: "TikTok Shop Profit Calculator",
    desc: "Calculate real TikTok Shop profit after fees, ads and affiliate commission.",
    href: "/profit-calculator",
  },
  {
    title: "TikTok Shop Fee Calculator",
    desc: "Estimate TikTok Shop platform fees and seller payout.",
    href: "/fee-calculator",
  },
  {
    title: "TikTok Shop ROAS Calculator",
    desc: "Calculate advertising return on ad spend.",
    href: "/roas-calculator",
  },
];

export default function Tools() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold">TikTok Seller Tools</h1>
        <p className="mt-5 text-gray-600">
          Free calculators designed for TikTok Shop sellers.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </section>
    </main>
  );
}
