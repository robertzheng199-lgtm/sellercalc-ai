export default function FAQ({
  title,
  faqs,
}: {
  title: string;
  faqs: Array<{ q: string; a: string }>;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="mt-6 space-y-5">
        {faqs.map((item) => (
          <div key={item.q}>
            <h3 className="font-bold">{item.q}</h3>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}