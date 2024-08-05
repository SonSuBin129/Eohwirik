import { useMutation } from "@tanstack/react-query";

import { ScrapKnowledgeParams } from "@/types/commonType";

import { scrapKnowledge } from "@/api/scrap";

export const useMutationScrapKnowledge = () => {
  const mutation = useMutation({
    mutationFn: ({ knowledgeId, userEmail }: ScrapKnowledgeParams) =>
      scrapKnowledge({ knowledgeId, userEmail }),
    onSuccess: (response: string) => {
      return response;
    },
  });
  return mutation;
};
