import { useSuspenseQuery } from "@tanstack/react-query";

import { getCategoryLearningRate } from "@/api/category";

export const useQueryCategoryLearningRate = (categoryId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["category-learning-rate", categoryId],
    queryFn: () => getCategoryLearningRate(categoryId),
  });

  return { data };
};
