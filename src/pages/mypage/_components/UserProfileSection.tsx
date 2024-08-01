import BlueCharacter from "@/components/character/BlueCharacter";

const UserProfileSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex aspect-square w-[28%] items-center justify-center rounded-full border border-[#c6c6c6]">
        <BlueCharacter size={"65%"} />
      </div>
      <div className="flex w-full flex-col gap-1 text-center">
        <div className="text-2xl font-bold text-brand">[닉네임]</div>
        <div className="text-base font-medium text-brandSubText">
          LV. [레벨]
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection;
