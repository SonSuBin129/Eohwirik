import { useEffect, useState } from "react";

import BlueCharacter from "@/components/character/BlueCharacter";

import { useMutationMyPage } from "@/hooks/mutation/useMutationMyPage";

import { useNavigate } from "@/router";

const UserProfileSection = () => {
  const navigate = useNavigate();
  const mutation = useMutationMyPage();

  const [nickname, setNickName] = useState("");
  const [userLevel, setUserLevel] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
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
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex aspect-square w-[28%] items-center justify-center rounded-full border border-[#c6c6c6]">
        <BlueCharacter size={"65%"} />
      </div>
      <div className="flex w-full flex-col gap-1 text-center">
        <div className="text-2xl font-bold text-brand">[{nickname}]</div>
        <div className="text-base font-medium text-brandSubText">
          LV. {userLevel}
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection;
