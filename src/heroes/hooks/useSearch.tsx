import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "../actions/search-heroes.action";
import { useSearchParams } from "react-router";

export const useSearch = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";
  const strength = searchParams.get("strength") ?? "";

  return useQuery({
    queryKey: ["search-heroes", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
