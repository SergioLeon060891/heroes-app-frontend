import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "../actions/get-hero.action";

export const useHeroPage = (idSlug: string) => {
  return useQuery({
    queryKey: ["hero-page", idSlug],
    queryFn: () => getHeroAction(idSlug),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
