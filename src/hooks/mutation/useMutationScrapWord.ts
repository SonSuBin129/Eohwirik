import { useMutation } from "@tanstack/react-query";

import { WordScrapParams } from "@/types/scrapType";

import { scrapWord } from "@/api/scrap";

export const useMutationScrapWord = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail, wordId }: WordScrapParams) =>
      scrapWord({ userEmail, wordId }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
