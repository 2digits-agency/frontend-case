import { Suspense } from 'react';

function Loading() {
  return <p>Loading !...</p>;
}

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
