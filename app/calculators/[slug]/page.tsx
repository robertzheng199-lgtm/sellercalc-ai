import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { regionalCalculators } from "@/lib/regionalCalculators";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return regionalCalculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const calculator = regionalCalculators.find((item) => item.slug === slug);

  if (!calculator) {
    return {};
  }

  return {
    title: calculator.title,
    description: calculator.description,
  };
}

export default async function RegionalCalculator({ params }: Props) {
  const { slug } = await params;

  const calculator = regionalCalculators.find((item) => item.slug === slug);

  if (!calculator) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium text-gray-500">
          {calculator.country}
        </p>

        <h1 className="mt-3 text-4xl font-bold">{calculator.title}</h1>

        <p className="mt-5 text-lg text-gray-600">{calculator.description}</p>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold">
            Calculate Your TikTok Shop Profit
          </h2>

          <div className="mt-6 space-y-4">
            <input
              placeholder={`Product Price (${calculator.currency})`}
              className="input"
            />

            <input
              placeholder={`Product Cost (${calculator.currency})`}
              className="input"
            />

            <input placeholder="Shipping Cost" className="input" />

            <input placeholder="Affiliate Commission %" className="input" />

            <input placeholder="Advertising Cost" className="input" />

            <button className="rounded-xl bg-black px-6 py-3 text-white">
              Calculate Profit
            </button>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            TikTok Shop Profit in {calculator.country}
          </h2>

          <p className="mt-4 leading-8 text-gray-700">
            TikTok Shop sellers in {calculator.country} should consider product
            costs, shipping, applicable platform fees, affiliate commissions and
            advertising expenses when calculating product profitability.
          </p>
        </section>
      </section>
    </main>
  );
}