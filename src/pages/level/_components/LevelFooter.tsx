import ProgressBar from "@/components/ProgressBar";

interface LevelFooterProps {
  wordCount: number;
  wordMaxCount: number;
  userLevel: string;
}

const levels = [
  { level: "유생", nextlevel: "문사" },
  { level: "문사", nextlevel: "학사" },
  { level: "학사", nextlevel: "박사" },
  { level: "박사", nextlevel: "세종대왕" },
  { level: "세종대왕", nextlevel: "축하합니다! 최종 관직에 도달했습니다!" },
];

const LevelFooter = (props: LevelFooterProps) => {
  const { wordCount, wordMaxCount, userLevel } = props;
  const percent = wordMaxCount > 0 ? wordCount / wordMaxCount : 0;

  const currentLevel = levels.find(level => level.level === userLevel);

  return (
    <section className="relative mt-5 flex h-[180px] w-full flex-col justify-between rounded-2xl border-2 border-brandGray px-4 py-[17px]">
      <h1 className="text-base font-bold text-brand">나의 습득 어휘</h1>
      <div
        className="absolute bottom-14 left-4 flex justify-between font-extrabold"
        style={{ width: "calc(100% - 32px)" }}
      >
        <div className="flex w-fit gap-1">
          <h1 className="self-end text-[65px] leading-[65px] text-[#547AFF]">
            {wordCount}
          </h1>
          <p className="mb-[10px] self-end text-base text-brandSubText">
            /{wordMaxCount}개
          </p>
        </div>
        <div className="self-end text-[32px] text-[#547AFF]">{`${Math.round(percent * 100)}%`}</div>
      </div>
      <div className="flex flex-col gap-2">
        <ProgressBar
          percent={percent}
          progressColor="linear-gradient(90deg, #CADDEF 0%, #9AAFF9 100%)"
        />
        {currentLevel && currentLevel.level === "세종대왕" ? (
          <div className="flex w-full justify-center font-medium text-brandSubText">
            <p>{currentLevel.nextlevel}</p>
          </div>
        ) : (
          <div className="flex w-full justify-between font-medium text-brandSubText">
            <p>{currentLevel?.level}</p>
            <p>{currentLevel?.nextlevel}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LevelFooter;
