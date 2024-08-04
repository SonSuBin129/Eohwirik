import { useSuspenseQuery } from "@tanstack/react-query";

import { getScrapWord } from "@/api/scrap";

export const useQueryScrapWord = (userEmail: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["scrap-word-list", userEmail],
    queryFn: () => getScrapWord(userEmail),
  });

  return { data };
};
