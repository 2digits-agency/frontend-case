import { PreprSdk } from '@/server/prepr';

import CardList from './components/CardList';

export default async function Home() {
  // const data = await PreprSdk.Example();
  const { Blogs, Popular_Blogs } = await PreprSdk.BlogsQuery({ locale: 'en-GB', limit: 3 });
  console.log('🚀 ~ Home ~ blogs:', Blogs);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-2digits-bg mt-px w-full bg-[url('/assets/2digits.png')] bg-cover bg-center bg-no-repeat px-6 py-48 text-center text-white">
        <h2 className="m-auto max-w-screen-md text-4xl uppercase md:text-6xl lg:text-8xl">
          Welcome to the 2DIGITS case!
        </h2>

        <p className="m-auto mt-6 max-w-screen-md text-lg">
          This case dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus mauris
          vitae ultricies. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.
        </p>
      </section>

      <section>
        <CardList items={Blogs.items} />
      </section>
    </main>
  );
}
