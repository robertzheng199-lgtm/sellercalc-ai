import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import type { Dictionary } from "@/lib/i18n";

export default function ProfitView({ dict }: { dict: Dictionary }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            TikTok Seller Tool
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            {dict.profit.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {dict.profit.subtitle}
          </p>
        </div>

        <div className="mt-12">
          <Calculator dict={dict.calculator} />
        </div>

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-bold">{dict.profit.how}</h2>

          <p className="mt-5 leading-8 text-gray-700">{dict.profit.howBody}</p>

          <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
            <p className="font-semibold">{dict.profit.formulaTitle}</p>

            <p className="mt-3 text-gray-600">{dict.profit.formula}</p>
          </div>
        </section>

        <div className="mx-auto mt-20 max-w-3xl">
          <FAQ title={dict.profit.faqTitle} faqs={dict.profit.faqs} />
        </div>
      </section>
    </main>
  );
}