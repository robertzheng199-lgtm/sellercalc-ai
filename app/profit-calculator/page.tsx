import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "TikTok Shop Profit Calculator",
  description:
    "Calculate real TikTok Shop profit after platform fees, affiliate commission and advertising costs. Free TikTok Shop profit calculator for sellers.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">TikTok Shop Profit Calculator</h1>
        <p className="mt-4 text-gray-600">
          Calculate your TikTok Shop profit after platform fees, affiliate
          commission and advertising costs.
        </p>

        <div className="mt-10">
          <Calculator />
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold">How TikTok Shop Profit Works</h2>
          <p className="mt-4 text-gray-600">
            Your real profit is not only selling price minus product cost.
            TikTok fees, affiliate commission and ads can greatly affect
            margins.
          </p>
        </section>

        <section className="mt-20">
          <FAQ />
        </section>
      </div>
    </main>
  );
}
