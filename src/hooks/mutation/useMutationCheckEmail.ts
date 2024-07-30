import { checkEmail } from "@/api/auth";

import { CheckEmailParams } from "@/types/authType";
import { useMutation } from "@tanstack/react-query";

export const useMutationCheckEmail = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail }: CheckEmailParams) => checkEmail({ userEmail }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
