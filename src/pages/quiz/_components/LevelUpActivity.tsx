import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useManageUser } from "@/hooks/useManageUser";

import QuizNav from "./QuizNav";

import ThirdLevelUP from "@/assets/ThirdLevelUP.png";
import SecondLevelUP from "@/assets/SecondLevelUP.png";
import FirstLevelUP from "@/assets/FirstLevelUP.png";
import FinalLevelUP from "@/assets/FinalLevelUP.png";

const images = [
  { level: "문사", image: FirstLevelUP },
  { level: "학사", image: SecondLevelUP },
  { level: "박사", image: ThirdLevelUP },
  { level: "세종대왕", image: FinalLevelUP },
];

const LevelUpActivity: ActivityComponentType = () => {
  const { nickname, userLevel } = useManageUser();

  const levelImage = images.find(img => img.level === userLevel)?.image;

  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 py-2">
        <QuizNav />
      </header>

      <main
        className="flex flex-col gap-[69px] px-4 pt-8"
        style={{ height: "calc(100% - 56px)" }}
      >
        <section className="flex w-full flex-col gap-2">
          <div className="text-2xl font-bold">
            <p className="text-brand">[{nickname}]님,</p>
            <p>축하합니다!</p>
            <br />
            <p className="inline-block text-brand">{userLevel}</p>
            <p className="inline-block">가 되셨습니다!</p>
            <p>앞으로도 함께 어휘력을 키워봐요!</p>
          </div>
          <div className="text-sm leading-tight">
            이제 학사의 자리에 오르기 위해
            <br /> 더욱 도전적인 문제를 해결해 보세요!
          </div>
        </section>
        <div className="flex w-full items-center justify-center">
          <img src={levelImage} loading="lazy" />
        </div>
      </main>
    </AppScreen>
  );
};

export default LevelUpActivity;
