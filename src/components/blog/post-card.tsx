"use client";

import { GlassCard } from "@/components/shared/glass-card";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/types/blog";

export function PostCard({ post, delay }: { post: BlogPost; delay: number }) {
  return (
    <GlassCard delay={delay} hover className="overflow-hidden group flex flex-col">
      {/* Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden
        bg-gradient-to-br from-[rgba(14,126,128,0.08)] to-[rgba(30,50,114,0.06)]
        flex items-center justify-center border-b border-slate-100">
        <span className="text-4xl font-bold text-transparent bg-clip-text
          bg-gradient-to-r from-[#0E7E80] to-[#1A9A9C] opacity-30 select-none">
          R+
        </span>
        <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs
                bg-white border border-[rgba(14,126,128,0.20)]
                text-[#0E7E80]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-2">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <p className="text-xs text-slate-400">
            {new Date(post.date).toLocaleDateString("en-AE", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </p>
        </div>
        <h3 className="text-base font-semibold text-slate-800
          leading-snug mb-2 line-clamp-2 group-hover:text-[#0E7E80]
          transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
          {post.description}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm
            text-[#0E7E80] hover:text-[#0A5E60] transition-colors font-medium mt-auto"
        >
          Read Article
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </GlassCard>
  );
}
