import { useMyFlow } from "@/utils/useMyFlow";

import { useNavigate } from "@/router";
import { FormType, useStackForm } from "@/hooks/useStackForm";
import LoadingButton from "@/components/LoadingButton";

interface NextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  params?: {
    step: number;
    form?: FormType;
  } & Record<string, unknown>;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { activityName, disabled, params } = props;
  const { push } = useMyFlow();
  const { onSubmit, isPending: isLoading } = useStackForm();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (activityName === "CompleteActivity" && params?.form) {
      // TODO: API 연결 및 다른 작업
      const result = await onSubmit(params?.form.getValues());
      if (result === "fail") {
        return;
      }
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
    <LoadingButton
      buttonText={buttonText}
      disabled={disabled}
      isLoading={isLoading}
      handleClick={handleClick}
    />
  );
};

export default NextStepButton;
