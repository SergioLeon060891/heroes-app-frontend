import { useQuery } from "@tanstack/react-query";
import { getsummaryAction } from "../actions/get-summary.action";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: getsummaryAction,
    staleTime: 1000 * 60 * 5,
  });
};
