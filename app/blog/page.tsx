import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "TikTok Shop Seller Guides",
  description:
    "Practical guides about TikTok Shop profit, fees, ROAS and product pricing.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold">TikTok Shop Seller Guides</h1>

        <p className="mt-4 text-gray-600">
          Practical guides to help TikTok Shop sellers understand fees, profit
          margins and advertising.
        </p>

        <div className="mt-12 grid gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-3 text-gray-600">{post.description}</p>

              <p className="mt-4 text-sm text-gray-400">{post.publishedAt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}