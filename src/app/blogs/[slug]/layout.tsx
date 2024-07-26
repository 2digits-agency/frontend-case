import { Suspense } from 'react';

function Loading() {
  return <p>Loading !...</p>;
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
}
