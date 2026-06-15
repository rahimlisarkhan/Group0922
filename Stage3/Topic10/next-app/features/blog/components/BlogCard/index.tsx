import { Blog } from "@/shared/types/blog";
import { Gender } from "@/shared/types/global";



interface BlogCardProps extends Blog {
  onRemove?: (id: number) => void;
};



export const BlogCard = ({ id, title, gender, body, onRemove }: BlogCardProps) => {


  const generateGenderTitle = () => {
    switch (gender) {
      case Gender.MALE:
        return "bey"
      case Gender.FEMALE:
        return "xanim"
      default:
        return "-"
    }
  }

  return (
    <div className="flex flex-col gap-3 p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">Post #{id}</span>
        <span>{generateGenderTitle()}</span>
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
