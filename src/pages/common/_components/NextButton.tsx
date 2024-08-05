import { useEffect, useState, startTransition } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@ui/components/ui/button";
import { useStack } from "@stackflow/react";

import { useCommonFlow } from "@/utils/useCommonFlow";

import { useNavigate } from "@/router";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  commonId: number;
  disabled?: boolean;
  isLoading?: boolean;
}

const NextButton = (props: NextButtonProps) => {
  const { activityName, commonId, disabled, isLoading } = props;

  const { push, pop } = useCommonFlow();
  const [buttonText, setButtonText] = useState("다음");
  const stack = useStack();
  let popCounts = stack.activities.length;

  const navigate = useNavigate();

  useEffect(() => {
    if (activityName === "ContentActivity") {
      setButtonText("학습하러 가기");
    } else if (activityName === "MainActivity") {
      setButtonText("마치기");
    }
  }, [activityName]);

  const handleClick = async () => {
    if (activityName === "MainActivity") {
      startTransition(() => {
        while (popCounts > 0) {
          pop({ animate: false });
          popCounts--;
        }
      });

      navigate("/home", { replace: true });
      return;
    }
    push(activityName, { commonId });
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
