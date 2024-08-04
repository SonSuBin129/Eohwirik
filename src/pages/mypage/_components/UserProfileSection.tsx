import { useEffect, useState } from "react";

import { useManageUser } from "@/hooks/useManageUser";

import ThirdLevelProfile from "@/assets/ThirdLevelProfile.png";
import SecondLevelProfile from "@/assets/SecondLevelProfile.png";
import FourthLevelProfile from "@/assets/FourthLevelProfile.png";
import FirstLevelProfile from "@/assets/FirstLevelProfile.png";
import FinalLevelProfile from "@/assets/FinalLevelProfile.png";

const userImage = [
  {
    level: "유생",
    imageSrc: FirstLevelProfile,
  },
  {
    level: "문사",
    imageSrc: SecondLevelProfile,
  },
  {
    level: "학사",
    imageSrc: ThirdLevelProfile,
  },
  {
    level: "박사",
    imageSrc: FourthLevelProfile,
  },
  {
    level: "세종대왕",
    imageSrc: FinalLevelProfile,
  },
];

const UserProfileSection = () => {
  const { nickname, userLevel } = useManageUser();
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (userLevel) {
      const image = userImage.find(
        image => image.level.toString() === userLevel,
      );
      if (image) {
        setProfileImage(image.imageSrc);
      }
    }
  }, [userLevel]);

  //TODO: 이미지 src profileImage로 변경
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex aspect-square w-[28%] items-center justify-center rounded-full">
        <img src={FirstLevelProfile} loading="lazy" />
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
