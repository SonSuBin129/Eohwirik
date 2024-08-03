import { useSuspenseQuery } from "@tanstack/react-query";

import { getCategoryList } from "@/api/category";

export const useQueryCategoryList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["category-list"],
    queryFn: () => getCategoryList(),
  });
  return { data };
};
