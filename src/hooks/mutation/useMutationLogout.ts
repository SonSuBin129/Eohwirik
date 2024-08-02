import { useMutation } from "@tanstack/react-query";

import { logout } from "@/api/auth";

export const useMutationLogout = () => {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: data => {
      if (data === "invalidate") {
        localStorage.removeItem("userEmail");
      }
    },
  });
};
