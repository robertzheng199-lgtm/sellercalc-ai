import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SellerCalc AI",
  description:
    "SellerCalc AI builds simple free tools that help ecommerce sellers understand profit, fees and ad performance.",
  alternates: {
    canonical: "https://sellercalc-ai.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">About SellerCalc AI</h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          SellerCalc AI builds simple, free tools that help ecommerce sellers
          understand their real numbers.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Our Mission</h2>

        <p className="mt-4 leading-8 text-gray-700">
          A product can generate thousands of dollars in sales and still lose
          money. Fees, commissions, fulfillment, advertising and refunds all
          quietly eat into margin. Our mission is to make those costs visible
          before a seller spends money scaling a product.
        </p>

        <h2 className="mt-12 text-2xl font-bold">What We Build</h2>

        <p className="mt-4 leading-8 text-gray-700">
          We build focused calculators and guides for marketplace sellers:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
          <li>Profit calculators that break down every cost in a sale.</li>
          <li>Fee estimators for marketplace commissions and fees.</li>
          <li>ROAS and advertising tools to evaluate campaign performance.</li>
          <li>Guides that explain how these numbers actually work.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold">Estimates, Not Financial Advice</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Every number on this site is an estimate. Fees, rates and platform
          policies change frequently, and your specific seller account may
          differ from what our tools assume. Nothing on SellerCalc AI is
          financial, tax or legal advice.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Contact</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Have a suggestion or found a bug? We would love to hear from you.
          Please open an issue on the SellerCalc AI GitHub repository.
        </p>
      </section>
    </main>
  );
}
