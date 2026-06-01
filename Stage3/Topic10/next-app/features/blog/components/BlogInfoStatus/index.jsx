'use client';

import { useState } from 'react';

export const BlogInfoStatus = () => {
  const [blogInfo, setBlogInfo] = useState(10);

  return (
    <div className="w-full h-16 border-2 border-amber-800 mb-5">
      BlogInfoStatus :{blogInfo}
      <button
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setBlogInfo(100)}>
        Update Blog Info
      </button>
    </div>
  );
};
