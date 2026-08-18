import type { Metadata } from "next";
import FeeForm from "@/components/FeeForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "TikTok Shop Fee Calculator",
  description:
    "Estimate TikTok Shop platform fees, affiliate commission and seller payout with this free fee calculator for TikTok Shop sellers.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">TikTok Shop Fee Calculator</h1>
        <p className="mt-4 text-gray-600">
          Estimate TikTok Shop fees, affiliate commission and seller payout.
        </p>

        <FeeForm />

        <section className="mt-20">
          <h2 className="text-2xl font-bold">TikTok Shop Fees Explained</h2>
          <p className="mt-4 text-gray-600">
            TikTok Shop sellers need to consider platform fees, transaction
            fees, affiliate commissions and advertising costs when calculating
            profit.
          </p>
        </section>

        <section className="mt-20">
          <FAQ />
        </section>
      </div>
    </main>
  );
}
