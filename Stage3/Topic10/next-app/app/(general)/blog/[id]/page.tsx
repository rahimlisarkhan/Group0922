
import { BlogInfoStatus } from "@/features/blog/components/BlogInfoStatus";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {

  const { id } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <h1>Blog Detail :{id}</h1>

        <BlogInfoStatus />
      </main>
    </div>
  );
}


