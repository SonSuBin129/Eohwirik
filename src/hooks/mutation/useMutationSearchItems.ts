import { useMutation } from "@tanstack/react-query";

import { SearchParams } from "@/types/searchType";
import { ScrapWordDTO } from "@/types/quizType";

import { getSearchItems } from "@/api/search";

export const useMutationSearchItems = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail, keyword }: SearchParams) =>
      getSearchItems({ userEmail, keyword }),
    onSuccess: (data: ScrapWordDTO[]) => {
      return data;
    },
  });

  return mutation;
};
