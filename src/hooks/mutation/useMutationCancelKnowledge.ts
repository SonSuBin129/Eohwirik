import { useMutation } from "@tanstack/react-query";

import { CancelParams } from "@/types/scrapType";

import { cancelScrapKnowledge } from "@/api/scrap";

export const useMutationCancelKnowledge = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail, knowledgeId }: CancelParams) =>
      cancelScrapKnowledge({ userEmail, knowledgeId }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
