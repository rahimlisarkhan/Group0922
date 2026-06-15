export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-[60vh] bg-white/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-medium text-gray-700">Loading</span>
          <span className="text-xs text-gray-400">Please wait a moment</span>
        </div>
      </div>
    </div>
  );
}
