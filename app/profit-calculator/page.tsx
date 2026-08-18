import type { Metadata } from "next";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "TikTok Shop Profit Calculator",
  description:
    "Calculate estimated TikTok Shop profit after platform fees, affiliate commissions, product costs, shipping, ads and refunds.",
  alternates: {
    canonical: "https://sellercalc-ai.vercel.app/profit-calculator",
  },
};

const faqs = [
  {
    question: "How do you calculate TikTok Shop profit?",
    answer:
      "Estimated profit is calculated by subtracting product cost, shipping, packaging, platform fees, affiliate commissions, advertising costs and estimated refund losses from the selling price.",
  },
  {
    question: "What TikTok Shop fee should I use?",
    answer:
      "TikTok Shop fees can vary by market, category, seller status and current platform policies. Enter the rate currently shown in your Seller Center rather than relying on an outdated generic percentage.",
  },
  {
    question: "Does affiliate commission affect profit?",
    answer:
      "Yes. Creator affiliate commission is an additional selling cost on attributed orders and can significantly reduce the profit margin of a product.",
  },
  {
    question: "What is a good TikTok Shop profit margin?",
    answer:
      "There is no universal target. A profitable margin depends on product cost, fulfillment, advertising, returns, affiliate commissions and the seller's operating expenses.",
  },
];

export default function ProfitCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            TikTok Seller Tool
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            TikTok Shop Profit Calculator
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Calculate your estimated TikTok Shop profit after platform fees,
            affiliate commissions, product costs, shipping, advertising and
            refund losses.
          </p>
        </div>

        <div className="mt-12">
          <Calculator />
        </div>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-bold">
            How to Calculate TikTok Shop Profit
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            Selling revenue is not the same as profit. TikTok Shop sellers need
            to account for the complete cost of acquiring, fulfilling and
            selling each order.
          </p>

          <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
            <p className="font-semibold">Estimated Profit Formula</p>

            <p className="mt-3 text-gray-600">
              Selling Price − Platform Fees − Affiliate Commission − Product
              Cost − Shipping − Packaging − Advertising − Estimated Refund Loss
            </p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }).replace(/</g, "\\u003c"),
          }}
        />
      </section>
    </main>
  );
}
