import { useMutation } from "@tanstack/react-query";

import { CancelKnowledgeParams } from "@/types/scrapType";

import { cancelScrapKnowledge } from "@/api/scrap";

export const useMutationCancel = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail, knowledgeId }: CancelKnowledgeParams) =>
      cancelScrapKnowledge({ userEmail, knowledgeId }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
