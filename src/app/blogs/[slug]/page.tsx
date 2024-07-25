function BlogDetail({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <h1>Blog Detail {params.slug}</h1>;
    </main>
  );
}

export default BlogDetail;
