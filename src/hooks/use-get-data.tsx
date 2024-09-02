import { GenericObject } from "@/utils/types";
import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { FunctionReference } from "convex/server";
import { useEffect, useState } from "react";

export default function useGetData<T>(
  query: FunctionReference<"query">,
  args?: GenericObject,
) {
  const [isLoading, setIsLoading] = useState(true);
  const data: T | undefined = useQuery(query, args);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return { isLoading, data };
}
