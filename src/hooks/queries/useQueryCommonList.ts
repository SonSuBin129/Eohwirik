import { useSuspenseQuery } from "@tanstack/react-query";

import { getCommonList } from "@/api/common";

export const useQueryCommonList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["common-list"],
    queryFn: () => getCommonList(),
  });
  return { data };
};
