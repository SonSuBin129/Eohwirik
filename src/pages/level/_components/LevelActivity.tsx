import { useEffect, useState } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import Nav from "@/components/Nav";

import { useMutationLevelPage } from "@/hooks/mutation/useMutationLevelPage";

import { getLevelResponse } from "@/types/levelType";

import { useLevelFlow } from "@/utils/useLevelFlow";

import LevelHeader from "./LevelHeader";

import LevelFooter from "@/pages/level/_components/LevelFooter";
import ThirdLevelImage from "@/assets/ThirdLevelImage.png";
import SecondLevelImage from "@/assets/SecondLevelImage.png";
import FourthLevelImage from "@/assets/FourthLevelImage.png";
import FirstLevelImage from "@/assets/FirstLevelImage.png";
import FinalLevelImage from "@/assets/FinalLevelImage.png";

const images = [
  { level: "유생", imgSrc: FirstLevelImage },
  { level: "문사", imgSrc: SecondLevelImage },
  { level: "학사", imgSrc: ThirdLevelImage },
  { level: "박사", imgSrc: FourthLevelImage },
  { level: "세종대왕", imgSrc: FinalLevelImage },
];

const LevelActivity: ActivityComponentType = () => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [userLevel, setUserLevel] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [wordMaxCount, setWordMaxCount] = useState(0);

  const { push } = useLevelFlow();
  const mutation = useMutationLevelPage();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      mutation.mutate(
        { userEmail: userEmail },
        {
          onSuccess: (data: getLevelResponse) => {
            setUserLevel(data.level);
            setWordCount(data.wordCount);
            setWordMaxCount(data.wordMaxCount);
          },
        },
      );
    }
  }, []);

  useEffect(() => {
    if (userLevel) {
      const image = images.find(img => img.level === userLevel);
      if (image) setImageSrc(image.imgSrc);
    }
  }, [userLevel]);

  const handleClick = () => {
    push("ExplainActivity", { nowLevel: userLevel });
  };

  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 py-2">
        <Nav backLink="/home" />
      </header>
      <main
        className="flex flex-col items-center justify-between px-4 pb-7"
        style={{ height: "calc(100% - 56px)" }}
      >
        <LevelHeader onClick={handleClick} userLevel={userLevel} />
        <section className="flex w-full items-center justify-center">
          <img
            src={imageSrc}
            className="w-full"
            loading="lazy"
            alt="levelImage"
          />
        </section>
        <LevelFooter wordCount={wordCount} wordMaxCount={wordMaxCount} />
      </main>
    </AppScreen>
  );
};

export default LevelActivity;
