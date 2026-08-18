import Link from "next/link";
import { localize, type Dictionary, type Locale } from "@/lib/i18n";

export default function HomeView({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            {dict.home.badge}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            {dict.home.title1}
            <br />
            {dict.home.title2}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {dict.home.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={localize(locale, "/profit-calculator")}
              className="rounded-xl bg-black px-6 py-3 font-medium text-white"
            >
              {dict.home.cta}
            </Link>

            <Link
              href={localize(locale, "/tools")}
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium"
            >
              {dict.home.explore}
            </Link>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold">{dict.home.popular}</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {dict.home.tools.map((tool) => (
              <Tool
                key={tool.title}
                title={tool.title}
                description={tool.desc}
                href={localize(locale, tool.href)}
                openLabel={dict.home.open}
              />
            ))}
          </div>
        </section>

        <section className="mt-24 max-w-3xl">
          <h2 className="text-3xl font-bold">{dict.home.whyTitle}</h2>

          <p className="mt-5 leading-8 text-gray-700">{dict.home.whyP1}</p>

          <p className="mt-5 leading-8 text-gray-700">{dict.home.whyP2}</p>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold">{dict.home.guides}</h2>

          <div className="mt-6 flex flex-col gap-3">
            {dict.home.guideLinks.map((link) => (
              <Link
                key={link.title}
                href={localize(locale, link.href)}
                className="font-medium underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function Tool({
  title,
  description,
  href,
  openLabel,
}: {
  title: string;
  description: string;
  href: string;
  openLabel: string;
}) {
  return (
    <Link
      href={href}
      className="
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        transition
        hover:-translate-y-1
      "
    >
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>

      <p className="mt-5 text-sm font-semibold">{openLabel} →</p>
    </Link>
  );
}