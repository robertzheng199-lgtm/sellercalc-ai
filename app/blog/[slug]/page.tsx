import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm text-gray-500">{post.publishedAt}</p>

        <h1 className="mt-3 text-4xl font-bold">{post.title}</h1>

        <p className="mt-5 text-lg text-gray-600">{post.description}</p>

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-8 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}