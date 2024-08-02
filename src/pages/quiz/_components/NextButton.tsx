import { useEffect, useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@ui/components/ui/button";

import { useQuizFlow } from "@/utils/useQuizFlow";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  params?: {
    step?: number;
  };

  isLoading?: boolean;
}

const NextButton = (props: NextButtonProps) => {
  const { activityName, disabled, params, isLoading } = props;
  const { push } = useQuizFlow();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    if (activityName === "VocaActivity") {
      setButtonText("오늘 학습 단어 보기");
    } else if (activityName === "MainActivity") {
      setButtonText("완료");
    } else {
      setButtonText("다음");
    }
  }, [activityName]);

  const handleClick = async () => {
    push(activityName, params || {});
  };

  return (
    <Button
      variant="brand"
      className="w-full rounded-none py-2 text-xl font-bold"
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <LoaderCircleIcon className="animate-spin" /> : buttonText}
    </Button>
  );
};

export default NextButton;
