import { cn } from "@ui/lib/utils";
import { Button } from "@ui/components/ui/button";

import { useQuizFlow } from "@/utils/useQuizFlow";

interface QuizItemProps {
  title: string;
  isAnswer: boolean;
  chapterId: number;
  chapterName: string;
  isSelected: boolean; // 이미 선택된 상태인지 확인
  onClick: () => void; // 클릭 이벤트 핸들러를 부모에서 전달받음
  disabled: boolean; // 퀴즈가 비활성화되어야 하는지 여부를 전달받음
}

const QuizItem = (props: QuizItemProps) => {
  const {
    title,
    isAnswer,
    chapterId,
    chapterName,
    isSelected,
    onClick,
    disabled,
  } = props;
  const { push } = useQuizFlow();

  const handleClick = () => {
    if (disabled) return; // 비활성화된 경우 클릭을 무시
    onClick(); // 부모 컴포넌트에서 전달된 클릭 핸들러 실행

    setTimeout(() => {
      push("QuizAnswerActivity", {
        chapterId: chapterId,
        chapterName: chapterName,
        quizId: 1,
        quizAnswer: isAnswer ? "정답" : "오답",
        step: 7,
      });
    }, 2000); // 2초 후에 push 함수 호출
  };

  const ment = isAnswer ? "정답입니다." : "오답입니다.";

  return (
    <div className="flex flex-col gap-[5px]">
      <Button
        variant={isSelected && isAnswer ? "category_brand" : "category_outline"}
        className={cn("h-14 w-full text-xl font-bold", {
          "border-brandError text-brandError": !isAnswer && isSelected,
        })}
        onClick={handleClick}
        disabled={disabled} // 비활성화 상태를 버튼에 적용
      >
        {title}
      </Button>
      <div
        className={cn(
          "flex h-[17px] items-center justify-center text-center text-[13px]",
          {
            "text-brand": isAnswer,
            "text-brandError": !isAnswer,
          },
        )}
      >
        {isSelected && ment}
      </div>
    </div>
  );
};

export default QuizItem;
