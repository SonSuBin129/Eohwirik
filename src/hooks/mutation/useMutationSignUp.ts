import { useNavigate } from "@/router";
import { useMutation } from "@tanstack/react-query";

import { SignUpRequestParams } from "@/types/authType";
import { signup } from "@/api/auth";

export const useMutationSignUp = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ userEmail, userPassword }: SignUpRequestParams) =>
      signup({ userEmail, userPassword }),
    onSuccess: (response: string) => {
      if (response === "success") {
        navigate("/initial-setting", { replace: true });
        return;
      }
    },
  });
  return mutation;
};
