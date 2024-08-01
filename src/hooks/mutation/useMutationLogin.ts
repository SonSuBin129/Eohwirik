import { useMutation } from "@tanstack/react-query";

import { LoginRequestParams } from "@/types/authType";

import { useNavigate } from "@/router";
import { login } from "@/api/auth";

export const useMutationLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ userEmail, userPassword }: LoginRequestParams) =>
      login({ userEmail, userPassword }),
    onSuccess: (response: string) => {
      if (response !== "fail") {
        localStorage.setItem("userEmail", response);
        navigate("/home", { replace: true });
        return;
      }
    },
  });

  return mutation;
};
