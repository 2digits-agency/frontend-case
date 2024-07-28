'use server';

import Image from 'next/image';

import Card from '@/app/components/Card';
import { PreprSdk } from '@/server/prepr';

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const { Blog } = await PreprSdk.BlogBySlug({ slug: params.slug });
  const { Similar_Blogs } = await PreprSdk.Similar_Blogs({ limit: 3, similarBlogsId: Blog._id });

  return (
    <article className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative h-[450] w-full overflow-hidden">
        <Image
          src={Blog?.banner_image?.url}
          alt={Blog?.title}
          width={800}
          height={400}
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <section className="w-full bg-white p-6">
        <span className="inline-block rounded bg-gray-100 p-2 text-sm font-medium uppercase text-gray-700">
          {Blog?.categories[0]?.slug}
        </span>

        <h1 className="mb-6 text-4xl font-bold">{Blog?.title}</h1>

        <div className="w-full">
          {Blog?.content.map((section, index) => (
            <p key={index} className="my-2">
              {section.text}
            </p>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#efeff8] p-6">
        <h2 className="mt-12 py-5 text-3xl md:text-5xl">Gerelateerde blogs</h2>

        {Similar_Blogs?.items?.length > 1 ? (
          <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-12 py-5 md:m-auto md:flex-row">
            {Similar_Blogs?.items.map((item, index) => <Card key={index} data={item} />)}
          </div>
        ) : (
          <p>Geen blog post gevonden.</p>
        )}
      </section>
    </article>
  );
}
