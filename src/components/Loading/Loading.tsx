export default function Loading() {
  return (
    <div className="flex h-80 flex-col items-center justify-center gap-4">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent"></div>
      <p className="font-semibold text-muted-foreground">Loading...</p>
    </div>
  );
}
