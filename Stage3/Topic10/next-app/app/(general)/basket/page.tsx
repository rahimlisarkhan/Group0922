"use client"

import { useFetchData } from "@/shared/hooks/useFetchData";
import { getAlbums } from "@/shared/services/api/album.api";
import { AlbumCard } from "@/features/basket/components/AlbumCard";
import type { Album } from "@/shared/types/album";

export default function Page() {
  const { data, loading, error } = useFetchData<Album>(getAlbums)

  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16">
      <h1 className="text-2xl font-bold mb-8">Basket</h1>

      {loading && <p className="text-gray-500">Loading albums...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              title={album.title}
              userId={album.userId}
            />
          ))}
        </div>
      )}
    </main>
  );
}


