import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of SellerCalc AI tools and content.",
  alternates: {
    canonical: "https://sellercalc-ai.vercel.app/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">Terms of Use</h1>

        <p className="mt-5 text-gray-500">Last updated: August 2026</p>

        <h2 className="mt-12 text-2xl font-bold">Acceptance of Terms</h2>

        <p className="mt-4 leading-8 text-gray-700">
          By accessing or using SellerCalc AI (&quot;the site&quot;), you agree
          to these Terms of Use. If you do not agree, please do not use the
          site.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Use of the Site</h2>

        <p className="mt-4 leading-8 text-gray-700">
          You may use the tools and content on this site for personal and
          commercial purposes, provided you do not:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
          <li>Attempt to disrupt, overload or damage the site.</li>
          <li>Scrape or reproduce the site in bulk without permission.</li>
          <li>Use the site for unlawful purposes.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold">Calculators Provide Estimates</h2>

        <p className="mt-4 leading-8 text-gray-700">
          All calculator results are estimates only. They are provided for
          informational purposes and are not a guarantee of actual fees, costs,
          profits or performance. Fees and rates vary by platform, market,
          product category and seller status, and they change over time. Always
          verify figures against your own seller account.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Not Financial or Legal Advice</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Nothing on this site constitutes financial, tax or legal advice. You
          are solely responsible for decisions you make based on the
          information provided here.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Intellectual Property</h2>

        <p className="mt-4 leading-8 text-gray-700">
          The content, design and code of this site are the property of
          SellerCalc AI or its licensors. You may not reproduce or distribute
          them without written permission, except as permitted for personal,
          non-commercial use.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Disclaimer of Warranties</h2>

        <p className="mt-4 leading-8 text-gray-700">
          The site is provided &quot;as is&quot; without warranties of any kind,
          whether express or implied, including accuracy, reliability or fitness
          for a particular purpose.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Limitation of Liability</h2>

        <p className="mt-4 leading-8 text-gray-700">
          To the maximum extent permitted by law, SellerCalc AI shall not be
          liable for any direct, indirect, incidental or consequential damages
          arising from your use of the site or reliance on its content.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Changes to These Terms</h2>

        <p className="mt-4 leading-8 text-gray-700">
          We may update these terms at any time. Continued use of the site after
          changes are posted constitutes acceptance of the updated terms.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Contact</h2>

        <p className="mt-4 leading-8 text-gray-700">
          Questions about these terms? Please open an issue on the SellerCalc
          AI GitHub repository.
        </p>
      </section>
    </main>
  );
}
