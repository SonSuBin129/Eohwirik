import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@ui/components/ui/button";

import LoadingButton from "@/components/LoadingButton";

import { FormType, useStackForm } from "@/hooks/useStackForm";

import { useMyFlow } from "@/utils/useMyFlow";

import { useNavigate } from "@/router";

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
    <>
      {buttonText === "시작" ? (
        <Button
          variant="brand"
          className="w-full rounded-none py-2 text-xl font-bold"
          onClick={handleClick}
        >
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            buttonText
          )}
        </Button>
      ) : (
        <LoadingButton
          buttonText={buttonText}
          disabled={disabled}
          isLoading={isLoading}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default NextStepButton;
