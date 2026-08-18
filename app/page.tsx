import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SellerCalc AI - Free TikTok Seller Tools",
  description:
    "Free TikTok Shop seller calculators for profit, fees and ROAS. Analyze product margins and ecommerce profitability.",
  alternates: {
    canonical: "https://sellercalc-ai.vercel.app/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Free Ecommerce Tools
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            TikTok Seller Tools
            <br />
            Built for Profit
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Calculate TikTok Shop profit, fees and advertising performance
            before you spend money scaling a product.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/profit-calculator"
              className="rounded-xl bg-black px-6 py-3 font-medium text-white"
            >
              Calculate Profit
            </Link>

            <Link
              href="/tools"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium"
            >
              Explore All Tools
            </Link>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold">
            Popular TikTok Seller Calculators
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Tool
              title="TikTok Shop Profit Calculator"
              description="Calculate net profit after product costs, fees, affiliate commissions and ads."
              href="/profit-calculator"
            />

            <Tool
              title="TikTok Shop Fee Calculator"
              description="Estimate platform fees and understand how much you keep from each sale."
              href="/fee-calculator"
            />

            <Tool
              title="TikTok Shop ROAS Calculator"
              description="Measure advertising return and understand whether your campaigns are profitable."
              href="/roas-calculator"
            />
          </div>
        </section>

        <section className="mt-24 max-w-3xl">
          <h2 className="text-3xl font-bold">Why Revenue Is Not Profit</h2>

          <p className="mt-5 leading-8 text-gray-700">
            A product that generates $10,000 in TikTok Shop sales can still
            lose money. Product costs, marketplace fees, creator commissions,
            fulfillment, advertising and refunds all affect the final margin.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            SellerCalc AI helps sellers estimate those costs before deciding
            whether a product is worth launching or scaling.
          </p>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold">Seller Guides</h2>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/blog/how-to-calculate-tiktok-shop-profit"
              className="font-medium underline"
            >
              How to Calculate TikTok Shop Profit
            </Link>

            <Link
              href="/blog/tiktok-shop-fees-guide"
              className="font-medium underline"
            >
              TikTok Shop Fees Explained
            </Link>

            <Link
              href="/blog/tiktok-shop-roas-guide"
              className="font-medium underline"
            >
              What Is a Good TikTok Shop ROAS?
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}

function Tool({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        transition
        hover:-translate-y-1
      "
    >
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>

      <p className="mt-5 text-sm font-semibold">Open calculator →</p>
    </Link>
  );
}
