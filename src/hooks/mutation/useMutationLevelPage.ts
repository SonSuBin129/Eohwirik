import { useMutation } from "@tanstack/react-query";

import { getLevelParams, getLevelResponse } from "@/types/levelType";

import { getLevelStatus } from "@/api/level";

export const useMutationLevelPage = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail }: getLevelParams) =>
      getLevelStatus({ userEmail }),
    onSuccess: (data: getLevelResponse) => {
      return data;
    },
  });

  return mutation;
};
