import { useEffect, useState } from "react";

import { useMutationMyPage } from "@/hooks/mutation/useMutationMyPage";

import { useNavigate } from "@/router";

export const useManageUser = () => {
  const navigate = useNavigate();
  const mutation = useMutationMyPage();

  const [nickname, setNickName] = useState("");
  const [userLevel, setUserLevel] = useState("");

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) {
      navigate("/login", { replace: true });
    } else {
      mutation.mutate(
        { userEmail: userEmail },
        {
          onSuccess: data => {
            setNickName(data.userName);
            setUserLevel(data.level);
          },
        },
      );
    }
  }, [userEmail]);

  return { nickname, setNickName, setUserLevel, userLevel };
};
