import { MDXRemote } from "next-mdx-remote/rsc";

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-slate prose-lg max-w-none
      prose-headings:text-slate-900 prose-headings:font-bold
      prose-p:text-slate-600 prose-p:leading-relaxed
      prose-a:text-[#0E7E80] prose-a:no-underline hover:prose-a:underline
      prose-strong:text-slate-800
      prose-code:text-[#0E7E80] prose-code:bg-[rgba(14,126,128,0.08)]
      prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal
      prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200
      prose-blockquote:border-l-[#0E7E80] prose-blockquote:text-slate-500
      prose-ul:text-slate-600 prose-ol:text-slate-600
      prose-li:marker:text-[#0E7E80]
      prose-hr:border-slate-200
      prose-table:text-slate-600
      prose-th:text-slate-800 prose-th:bg-slate-50
      prose-td:border-slate-200">
      <MDXRemote source={source} />
    </div>
  );
}
