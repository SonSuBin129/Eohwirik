import { useMutation } from "@tanstack/react-query";

import { CancelParams } from "@/types/scrapType";

import { cancelScrapWord } from "@/api/scrap";

export const useMutationCancelWord = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail, knowledgeId }: CancelParams) =>
      cancelScrapWord({ userEmail, knowledgeId }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
