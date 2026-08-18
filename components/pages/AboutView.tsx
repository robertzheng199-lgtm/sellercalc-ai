import type { Dictionary } from "@/lib/i18n";

export default function AboutView({ dict }: { dict: Dictionary }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold">{dict.about.title}</h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          {dict.about.intro}
        </p>

        <h2 className="mt-12 text-2xl font-bold">{dict.about.mission}</h2>

        <p className="mt-4 leading-8 text-gray-700">{dict.about.missionBody}</p>

        <h2 className="mt-12 text-2xl font-bold">{dict.about.what}</h2>

        <p className="mt-4 leading-8 text-gray-700">{dict.about.whatIntro}</p>

        <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-gray-700">
          {dict.about.whatItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold">{dict.about.estimates}</h2>

        <p className="mt-4 leading-8 text-gray-700">
          {dict.about.estimatesBody}
        </p>

        <h2 className="mt-12 text-2xl font-bold">{dict.about.contact}</h2>

        <p className="mt-4 leading-8 text-gray-700">{dict.about.contactBody}</p>
      </section>
    </main>
  );
}