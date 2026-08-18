import ToolCard from "@/components/ToolCard";
import { localize, type Dictionary, type Locale } from "@/lib/i18n";

export default function ToolsView({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-bold">{dict.tools.title}</h1>

        <p className="mt-5 text-gray-600">{dict.tools.subtitle}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.tools.items.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              desc={tool.desc}
              href={localize(locale, tool.href)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}