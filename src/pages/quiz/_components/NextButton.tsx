import { useEffect, useState, startTransition } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";

import { QuizDTO } from "@/types/quizType";

import { useQuizFlow } from "@/utils/useQuizFlow";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  chapterId: number;
  chapterName: string;
  params?: {
    step?: number;
    quizList?: QuizDTO[];
  };
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void; // 클릭 핸들러 추가
}

const NextButton = (props: NextButtonProps) => {
  const {
    activityName,
    disabled,
    chapterId,
    chapterName,
    params,
    isLoading,
    onClick,
  } = props;

  const { push, pop } = useQuizFlow(); // useQuizFlow에서 필요한 함수 가져오기
  const [buttonText, setButtonText] = useState("");
  const stack = useStack();
  let popCounts = stack.activities.length;
  console.log(popCounts);

  useEffect(() => {
    if (activityName === "QuizAnswerActivity") {
      setButtonText("정답 확인");
    } else if (activityName === "VocaActivity") {
      setButtonText("오늘 학습 단어 보기");
    } else if (activityName === "MainActivity") {
      setButtonText("완료");
    } else {
      setButtonText("다음");
    }
  }, [activityName]);

  const handleClick = async () => {
    if (activityName === "MainActivity") {
      // 현재 스택의 모든 액티비티를 가져와서 pop 처리
      startTransition(() => {
        while (popCounts > 0) {
          pop();
          popCounts--;
        }
      });
    }
    push(activityName, { chapterId, chapterName, ...params } || {});
  };

  return (
    <Button
      variant={disabled ? "quizButton" : "brand"}
      className="w-full rounded-none py-2 text-xl font-bold"
      onClick={onClick ? onClick : handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <LoaderCircleIcon className="animate-spin" /> : buttonText}
    </Button>
  );
};

export default NextButton;
