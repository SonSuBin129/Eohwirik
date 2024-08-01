import { useQuery } from "@tanstack/react-query";

import { logout } from "@/api/auth";

export const useQueryLogout = () => {
  return useQuery({
    queryKey: ["logout"],
    queryFn: () => logout(),
    select: data => {
      if (data === "invalidate") {
        localStorage.removeItem("userEmail");
      }
      return data;
    },
  });
};
