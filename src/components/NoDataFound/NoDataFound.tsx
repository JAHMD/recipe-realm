import { NotFoundIcon } from "@/shared/icons";

export default function NoDataFound() {
  return (
    <div className="flex h-80 flex-col items-center justify-center gap-4 text-muted-foreground">
      <NotFoundIcon className="h-10 w-10 md:h-32 md:w-32" />
      <p className="text-lg">No data available</p>
    </div>
  );
}
