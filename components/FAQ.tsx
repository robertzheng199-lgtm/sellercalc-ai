const faq = [
  {
    q: "What is TikTok Shop Profit Calculator?",
    a: "It helps sellers calculate their real profit after product costs, TikTok fees, affiliate commission and advertising expenses.",
  },
  {
    q: "How do I calculate TikTok Shop profit?",
    a: "Subtract product cost, platform fees, affiliate fees and advertising costs from your selling price.",
  },
  {
    q: "What is a good TikTok Shop ROAS?",
    a: "A profitable ROAS depends on product margin, fees and operating costs.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
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
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-5">
        {faq.map((item) => (
          <div key={item.q}>
            <h3 className="font-bold">{item.q}</h3>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
