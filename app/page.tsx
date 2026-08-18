import Link from "next/link";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold">SellerCalc AI</h1>

        <h2 className="mt-6 text-3xl font-semibold">
          Free TikTok Shop Seller Tools
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-3xl">
          Calculate your TikTok Shop profits, fees, ROAS and product margins.
          Built for ecommerce sellers.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/tools"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Browse All Tools
          </Link>

          <Link href="/profit-calculator" className="border px-6 py-3 rounded-xl">
            Profit Calculator
          </Link>
        </div>

        <section className="grid md:grid-cols-3 gap-6 mt-24">
          <ToolCard
            title="TikTok Shop Profit Calculator"
            desc="Calculate net profit after fees, affiliate commission and ads."
            href="/profit-calculator"
          />

          <ToolCard
            title="TikTok Shop Fee Calculator"
            desc="Estimate TikTok platform fees before selling."
            href="/fee-calculator"
          />

          <ToolCard
            title="TikTok ROAS Calculator"
            desc="Measure advertising profitability."
            href="/roas-calculator"
          />
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold">How SellerCalc AI Helps Sellers</h2>

          <div className="mt-6 space-y-4">
            <p>✓ Understand your true profit margin</p>
            <p>✓ Calculate marketplace fees</p>
            <p>✓ Optimize product pricing</p>
            <p>✓ Make better ecommerce decisions</p>
          </div>
        </section>
      </section>
    </main>
  );
}
