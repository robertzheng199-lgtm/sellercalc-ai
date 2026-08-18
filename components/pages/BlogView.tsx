import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import type { Dictionary } from "@/lib/i18n";

export default function BlogView({ dict }: { dict: Dictionary }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold">{dict.blog.title}</h1>

        <p className="mt-4 text-gray-600">{dict.blog.subtitle}</p>

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