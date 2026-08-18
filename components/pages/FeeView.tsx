import FeeForm from "@/components/FeeForm";
import FAQ from "@/components/FAQ";
import type { Dictionary } from "@/lib/i18n";

export default function FeeView({ dict }: { dict: Dictionary }) {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">{dict.fee.title}</h1>

        <p className="mt-4 text-gray-600">{dict.fee.subtitle}</p>

        <FeeForm dict={dict.fee} />

        <section className="mt-20">
          <h2 className="text-2xl font-bold">{dict.fee.explainTitle}</h2>

          <p className="mt-4 text-gray-600">{dict.fee.explainBody}</p>
        </section>

        <section className="mt-20">
          <FAQ title={dict.fee.faqTitle} faqs={dict.fee.faqs} />
        </section>
      </div>
    </main>
  );
}