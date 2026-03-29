import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PostCard }    from "@/components/blog/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and resources for Indian expat families in Al Ain — school admission, CBSE curriculum, and education tips.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="px-4 md:px-8 pt-32 pb-24 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-widest text-[#0E7E80] uppercase">
          Resources
        </span>
        <h1 className="text-4xl font-bold text-slate-900 mt-3 tracking-tight">
          Guides for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C]">
            Indian Families
          </span>
        </h1>
        <p className="text-slate-500 mt-3 max-w-lg mx-auto">
          School admission tips, CBSE guides, and education resources for
          expat families in Al Ain.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-400">Articles coming soon. Check back shortly!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} delay={i} />
          ))}
        </div>
      )}
    </section>
  );
}
