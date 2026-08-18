import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SellerCalc AI collects, uses and protects your information.",
  alternates: {
    canonical: "https://sellercalc-ai.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="mt-5 text-gray-500">
          Last updated: August 2026
        </p>

        <h2 className="mt-12 text-2xl font-bold">Overview</h2>

        <p className="mt-4 leading-8 text-gray-700">
          SellerCalc AI (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
          respects your privacy. This policy explains what information we
          collect, how we use it, and the choices you have.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Information We Collect</h2>

        <h3 className="mt-6 text-lg font-semibold">Calculator Inputs</h3>

        <p className="mt-3 leading-8 text-gray-700">
          Values you enter into our calculators, such as selling price, costs
          and fee rates, are processed in your browser. They are not stored on
          our servers.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Usage Data</h3>

        <p className="mt-3 leading-8 text-gray-700">
          We may collect anonymized usage data, such as pages visited, device
          type and approximate location, to understand how the site is used.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Cookies</h3>

        <p className="mt-3 leading-8 text-gray-700">
          We use cookies and similar technologies to provide core site
          functionality and, in the future, to measure traffic. You can disable
          cookies in your browser settings, though some parts of the site may
          not work as intended.
        </p>

        <h2 className="mt-12 text-2xl font-bold">How We Use Information</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
          <li>To operate and improve the website.</li>
          <li>To analyze usage patterns and improve our tools.</li>
          <li>To respond to feedback and support requests.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold">Third-Party Services</h2>

        <p className="mt-4 leading-8 text-gray-700">
          We may use third-party services for hosting, analytics and performance
          monitoring. These services may process data under their own privacy
          policies.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Data Retention</h2>

        <p className="mt-4 leading-8 text-gray-700">
          We keep aggregated, anonymized analytics data only as long as needed
          for the purposes described above.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Your Choices</h2>

        <p className="mt-4 leading-8 text-gray-700">
          You can browse the site with cookies disabled, and you may contact us
          to request information about any data we hold about you.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Changes to This Policy</h2>

        <p className="mt-4 leading-8 text-gray-700">
          We may update this policy from time to time. Changes will be posted
          on this page with an updated &quot;Last updated&quot; date.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Contact</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Questions about this policy? Please open an issue on the SellerCalc
          AI GitHub repository.
        </p>
      </section>
    </main>
  );
}
