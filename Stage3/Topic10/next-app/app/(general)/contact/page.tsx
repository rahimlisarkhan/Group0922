import Image from 'next/image';

const IMG_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw35wLoH6VgDgFLKM2nzDDqN1DKNqpRCujg&s';

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 gap-12">
        <h1 className="text-2xl font-bold">Contact</h1>

        {/* ── Normal <img> tag ─────────────────────────────────── */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-gray-700">
            Native <code className="bg-gray-100 px-1 rounded">&lt;img&gt;</code> tag
          </h2>
          <p className="text-sm text-gray-500">
            No optimisation — browser downloads the full original file.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG_URL}
            alt="Sample image via native img tag"
            width={225}
            height={225}
            className="rounded-xl border"
          />
        </section>

        {/* ── Next.js <Image> component ────────────────────────── */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-gray-700">
            Next.js{' '}
            <code className="bg-gray-100 px-1 rounded">&lt;Image&gt;</code> component
          </h2>
          <p className="text-sm text-gray-500">
            Automatic WebP/AVIF conversion, lazy loading, and size optimisation
            via the built-in image pipeline. Requires the hostname to be
            whitelisted in <code className="bg-gray-100 px-1 rounded">next.config.ts</code>.
          </p>
          <Image
            src={IMG_URL}
            alt="Sample image via Next.js Image component"
            width={225}
            loading="eager"
            height={225}
            className="rounded-xl border"
          />
        </section>
      </main>
    </div>
  );
}
