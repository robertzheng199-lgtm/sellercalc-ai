import type { Metadata } from "next";
import RoasForm from "@/components/RoasForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "TikTok Shop ROAS Calculator",
  description:
    "Calculate your TikTok Shop advertising return on ad spend (ROAS). Free ROAS calculator for TikTok Shop sellers.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">TikTok Shop ROAS Calculator</h1>
        <p className="mt-4 text-gray-600">
          Measure your TikTok advertising performance.
        </p>

        <RoasForm />

        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            How to Calculate TikTok Shop ROAS
          </h2>
          <p className="mt-4 text-gray-600">
            ROAS measures how much revenue you earn for every dollar spent on
            advertising. Divide revenue generated from ads by your ad spend to
            get your return on ad spend.
          </p>
        </section>

        <section className="mt-20">
          <FAQ />
        </section>
      </div>
    </main>
  );
}
