import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MdxContent } from "@/components/blog/mdx-content";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="px-4 md:px-8 pt-32 pb-24 max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-slate-500
          hover:text-[#0E7E80] transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs
                bg-[rgba(14,126,128,0.07)] border border-[rgba(14,126,128,0.20)]
                text-[#0E7E80]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900
          leading-tight tracking-tight mb-5">
          {post.title}
        </h1>

        <div className="flex items-center gap-5 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString("en-AE", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </span>
        </div>
      </header>

      <div className="h-px bg-slate-200 mb-10" />

      <MdxContent source={post.content} />

      {/* Footer CTA */}
      <div className="mt-16 pt-10 border-t border-slate-200
        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-1">
            Ready to enroll your child?
          </p>
          <p className="text-xs text-slate-500">
            Contact READ PLUS today — enrollment is open.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
            text-sm font-semibold text-white shrink-0
            bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]"
          style={{ boxShadow: "var(--shadow-teal)" }}
        >
          Enquire Now
        </Link>
      </div>
    </article>
  );
}
