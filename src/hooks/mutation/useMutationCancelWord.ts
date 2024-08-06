import { useMutation } from "@tanstack/react-query";

import { CancelWordParams } from "@/types/scrapType";

import { cancelScrapWord } from "@/api/scrap";

export const useMutationCancel = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail, wordId }: CancelWordParams) =>
      cancelScrapWord({ userEmail, wordId }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
