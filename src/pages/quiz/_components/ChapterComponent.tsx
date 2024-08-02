import { cn } from "@ui/lib/utils";

import LearnedIcon from "@/components/Icons/LearnedIcon";

import { useQuizFlow } from "@/utils/useQuizFlow";

interface ChapterComponentProps {
  isLearned: boolean;
  chapterId: number;
  chapterName: string;
}

const ChapterComponent = (props: ChapterComponentProps) => {
  const { isLearned, chapterId, chapterName } = props;
  const { push } = useQuizFlow();

  const handleClick = () => {
    push("QuizActivity", { chapterId: chapterId, chapterName: chapterName });
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex w-full justify-between gap-3 rounded-2xl border-2 px-6 py-4",
        {
          "border-brandGray": !isLearned,
          "border-brand/[0.23] bg-brand/[0.29]": isLearned,
        },
      )}
    >
      <div className="text-center text-base font-extrabold">{chapterId}</div>
      <div className="grow text-base font-semibold">{chapterName}</div>
      <LearnedIcon isLearned={isLearned} />
    </div>
  );
};
export default ChapterComponent;
