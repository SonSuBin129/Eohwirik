import BlueCharacter from "@/components/character/BlueCharacter";

import { useManageUser } from "@/hooks/useManageUser";

const UserProfileSection = () => {
  const { nickname, userLevel } = useManageUser();

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
