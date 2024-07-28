'use server';

import { PreprSdk } from '@/server/prepr';

import Card from './components/Card';

export default async function Home() {
  const { Blogs } = await PreprSdk.PopularBlogs({ locale: 'en-GB', limit: 3 });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-2digits-bg mt-px w-full bg-[url('/assets/2digits.png')] bg-cover bg-center bg-no-repeat px-6 py-48 text-center text-white">
        <h2 className="m-auto max-w-screen-md text-4xl font-bold uppercase md:text-6xl lg:text-8xl">
          Welcome to the 2DIGITS case!
        </h2>

        <p className="m-auto mt-6 max-w-screen-md text-lg">
          This case dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus mauris
          vitae ultricies. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.
        </p>
      </section>

      <section className="m-4">
        <h2 className="mt-12 py-5 text-3xl md:text-5xl">De nieuwste blogs</h2>

        {Blogs?.items?.length > 1 ? (
          <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-12 py-5 md:m-auto md:flex-row">
            {Blogs?.items.map((item, index) => <Card key={index} data={item} />)}
          </div>
        ) : (
          <p>Geen blog post gevonden.</p>
        )}
      </section>
    </main>
  );
}
