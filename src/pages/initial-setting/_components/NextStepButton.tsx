import { LoaderCircleIcon } from "@ui/components/ui/icon";
import { Button } from "@ui/components/ui/button";

import { useMyFlow } from "@/utils/useMyFlow";

import { useNavigate } from "@/router";
import { FormType } from "@/hooks/useStackForm";

interface NextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  params?: {
    step: number;
    form?: FormType;
  } & Record<string, unknown>;
  isLoading?: boolean;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { activityName, disabled, params, isLoading, ...rest } = props;
  const { push } = useMyFlow();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (activityName === "CompleteActivity" && params?.form) {
      // TODO: API 연결 및 다른 작업
      console.log(params.form.control._formValues);
    } else if (activityName === "MainActivity") {
      navigate("/home", {
        replace: true,
      });
      return;
    }

    push(activityName, params || {});
  };

  const buttonText = activityName === "MainActivity" ? "시작" : "다음";

  return (
    <Button
      variant={disabled ? "outline" : "brand"}
      className="w-full text-xl font-semibold"
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <LoaderCircleIcon className="animate-spin" /> : buttonText}
    </Button>
  );
};

export default NextStepButton;
