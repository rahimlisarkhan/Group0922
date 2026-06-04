type AlbumCardProps = {
  id: number;
  title: string;
  userId: number;
};

export const AlbumCard = ({ id, title, userId }: AlbumCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">Album #{id}</span>
        <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full">User {userId}</span>
      </div>
      <p className="text-sm font-medium text-gray-800 capitalize">{title}</p>
    </div>
  );
};
