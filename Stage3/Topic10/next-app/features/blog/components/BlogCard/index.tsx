
import type { Blog } from "@/types/blog";

type BlogCardProps = Pick<Blog, "id" | "title" | "body"> & {
  onRemove?: (id: number) => void;
};

export const BlogCard = ({ id, title, body, onRemove }: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">Post #{id}</span>
        {onRemove && (
          <button
            onClick={() => onRemove(id)}
            className="text-xs text-red-400 hover:text-red-600 transition-colors"
          >
            Remove
          </button>
        )}
      </div>
      <h2 className="text-base font-semibold text-gray-800 capitalize leading-snug">{title}</h2>
      <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{body}</p>
    </div>
  );
};
