export default function Loading() {
  return (
    <section className="container py-20">
      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-muted border-t-transparent"></div>
          <p className="mt-4 text-xl font-semibold text-muted-foreground">
            Loading...
          </p>
        </div>
      </div>
    </section>
  );
}
