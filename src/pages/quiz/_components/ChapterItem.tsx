import { cn } from "@ui/lib/utils";

import LearnedIcon from "@/components/Icons/LearnedIcon";

import { useQueryQuizList } from "@/hooks/queries/useQueryQuizList";

import { useQuizFlow } from "@/utils/useQuizFlow";

interface ChapterItemProps {
  isLearned: boolean;
  chapterId: number;
  chapterName: string;
}

const ChapterItem = (props: ChapterItemProps) => {
  const { isLearned, chapterId, chapterName } = props;
  const { push } = useQuizFlow();

  const { data } = useQueryQuizList(chapterId);
  const handleClick = () => {
    if (data) {
      push("QuizActivity", {
        chapterId,
        chapterName,
        quizList: data,
        step: 1,
      });
    }
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
      <div className="text-center text-base font-extrabold">
        {chapterId % 7 > 0 ? chapterId % 7 : 7}
      </div>
      <div className="grow text-base font-semibold">{chapterName}</div>
      <LearnedIcon isLearned={isLearned} />
    </div>
  );
};
export default ChapterItem;
