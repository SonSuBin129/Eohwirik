import { useSuspenseQuery } from "@tanstack/react-query";

import { getLevelStatus } from "@/api/level";

export const useQueryGetLevelStatus = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["level-status"],
    queryFn: () => getLevelStatus(),
  });

  return { data };
};
