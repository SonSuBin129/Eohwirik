import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@ui/components/ui/carousel";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import LevelNav from "./LevelNav";

import ThirdLevelImage from "@/assets/BigThirdLevelImage.png";
import SecondLevelImage from "@/assets/BigSecondLevelImage.png";
import FourthLevelImage from "@/assets/BigFourthLevelImage.png";
import FirstLevelImage from "@/assets/BigFirstLevelImage.png";
import FinalLevelImage from "@/assets/BigFinalLevelImage.png";

const levelExplain = [
  {
    level: "유생",
    imgSrc: FirstLevelImage,
    counts: "0개~42개",
    explain: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
  {
    level: "문사",
    imgSrc: SecondLevelImage,
    counts: "43개~84개",
    explain: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
  {
    level: "학사",
    imgSrc: ThirdLevelImage,
    counts: "85개~126개",
    explain: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
  {
    level: "박사",
    imgSrc: FourthLevelImage,
    counts: "127개~168개",
    explain: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
  {
    level: "세종대왕",
    imgSrc: FinalLevelImage,
    counts: "169개~210개",
    explain: "설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명",
  },
];

type ExplainParams = {
  nowLevel: string;
};

const ExplainActivity: ActivityComponentType<ExplainParams> = ({ params }) => {
  const { nowLevel } = params;

  const carouselRef = useRef<CarouselApi | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const startIndex = levelExplain.findIndex(
        level => level.level === nowLevel,
      );
      if (startIndex !== -1) {
        carouselRef.current.scrollTo(startIndex);
      }
    }
  }, [nowLevel]);

  const handleApiSet = (api: CarouselApi) => {
    carouselRef.current = api;
    const startIndex = levelExplain.findIndex(
      level => level.level === nowLevel,
    );
    if (startIndex !== -1) {
      api?.scrollTo(startIndex, true);
    }
  };

  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 py-2">
        <LevelNav />
      </header>
      <div className="relative">
        <Carousel className="mt-8 h-full w-full px-4" setApi={handleApiSet}>
          <CarouselContent>
            {levelExplain.map((level, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center justify-between gap-4 text-center">
                  <div className="flex flex-col leading-tight">
                    <div className="text-[40px] font-extrabold">
                      {level.level}
                    </div>
                    <div className="text-base font-bold text-[#6a6a6a]">
                      {level.counts}
                    </div>
                  </div>
                  <img src={level.imgSrc} alt={level.level} />
                  <p className="mt-3 text-base font-extrabold text-brandSubText">
                    {level.explain}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-8 z-10 -translate-y-1/2 disabled:hidden" />
          <CarouselNext className="absolute right-4 top-8 z-10 -translate-y-1/2 disabled:hidden" />
        </Carousel>
      </div>
    </AppScreen>
  );
};

export default ExplainActivity;
