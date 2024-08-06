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
    counts: "0개~168개",
    title: "열정 만큼은 최고!",
    explain1: '"지금은 좀 헷갈리지만,',
    explain2: '나중에 꼭 어휘의 왕이 될 거야!"',
  },
  {
    level: "문사",
    imgSrc: SecondLevelImage,
    counts: "169개~336개",
    title: "제법 어휘력이 능숙해진 초급 문인",
    explain1: '"이제 어휘력은 조금 자신 있어!',
    explain2: '더 멋지게 표현해 볼까?"',
  },
  {
    level: "학사",
    imgSrc: ThirdLevelImage,
    counts: "337개~504개",
    title: "어휘에 대한 이해가 깊어진 중급 학사",
    explain1: '"이제 더 깊이 있는 공부가 필요하겠군',
    explain2: '잘 해나가고 있어!"',
  },
  {
    level: "박사",
    imgSrc: FourthLevelImage,
    counts: "505개~672개",
    title: "이제 나도 어휘 고인물!",
    explain1: '"이제 복잡한 논의도 거뜬하군..',
    explain2: '대왕이 자리에 가까워졌구나.."',
  },
  {
    level: "세종대왕",
    imgSrc: FinalLevelImage,
    counts: "673개~840개",
    title: "어휘의 마스터 세종대왕",
    explain1: '"이제 더 이상 가르칠게 없구나 껄껄..."',
    explain2: "",
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
                  <div className="mt-9 flex flex-col gap-[6px]">
                    <h1 className="text-xl font-black">{level.title}</h1>
                    <p className="text-base font-bold leading-tight text-brandSubText">
                      {level.explain1}
                      <br />
                      {level.explain2}
                    </p>
                  </div>
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
