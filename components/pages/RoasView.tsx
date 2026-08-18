import RoasForm from "@/components/RoasForm";
import FAQ from "@/components/FAQ";
import type { Dictionary } from "@/lib/i18n";

export default function RoasView({ dict }: { dict: Dictionary }) {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">{dict.roas.title}</h1>

        <p className="mt-4 text-gray-600">{dict.roas.subtitle}</p>

        <RoasForm dict={dict.roas} />

        <section className="mt-20">
          <h2 className="text-2xl font-bold">{dict.roas.explainTitle}</h2>

          <p className="mt-4 text-gray-600">{dict.roas.explainBody}</p>
        </section>

        <section className="mt-20">
          <FAQ title={dict.roas.faqTitle} faqs={dict.roas.faqs} />
        </section>
      </div>
    </main>
  );
}