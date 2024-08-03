import { cn } from "@ui/lib/utils";
import { Button } from "@ui/components/ui/button";

interface QuizItemProps {
  title: string;
  isAnswer: boolean;
  isSelected: boolean; // 이미 선택된 상태인지 확인
  onClick: () => void; // 클릭 이벤트 핸들러를 부모에서 전달받음
  buttonCheck: boolean; //버튼을 통해서 확인을 했는가 여부
}

const QuizItem = (props: QuizItemProps) => {
  const { title, isAnswer, isSelected, onClick, buttonCheck } = props;

  const handleClick = () => {
    onClick(); // 부모 컴포넌트에서 전달된 클릭 핸들러 실행
  };

  const ment = isAnswer ? "정답입니다." : "오답입니다.";

  return (
    <div className="flex flex-col gap-[5px]">
      <Button
        variant={
          isSelected
            ? isAnswer && buttonCheck
              ? "category_brand"
              : "category_outline"
            : "category_outline"
        }
        className={cn("h-14 w-full text-xl font-bold", {
          "border-brandError text-brandError":
            isSelected && !isAnswer && buttonCheck,
          "border-brand": isSelected && !buttonCheck,
        })}
        onClick={handleClick}
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
        {buttonCheck && isSelected && ment}
      </div>
    </div>
  );
};

export default QuizItem;
