import { useSuspenseQuery } from "@tanstack/react-query";

import { getChapterStatus } from "@/api/category";

export const useQueryChapterStatus = (categoryId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["chapter-list", categoryId],
    queryFn: () => getChapterStatus(categoryId),
  });
  return { data };
};
