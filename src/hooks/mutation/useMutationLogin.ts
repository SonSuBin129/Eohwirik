import { login } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "@/router";

import { LoginRequestParams, LoginResponse } from "@/types/authType";

export const useMutationLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ userEmail, userPassword }: LoginRequestParams) =>
      login({ userEmail, userPassword }),
    onSuccess: ({ response }: LoginResponse) => {
      if (response === "success") {
        navigate("/home", { replace: true });
        return;
      }
    },
  });

  return mutation;
};
