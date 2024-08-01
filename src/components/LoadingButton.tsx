import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@ui/components/ui/button";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  isLoading: boolean;
  buttonText: string;
  handleClick: () => void;
}

const LoadingButton = (props: LoadingButtonProps) => {
  const { className, disabled, isLoading, buttonText, handleClick, ...rest } =
    props;
  return (
    <Button
      variant={disabled ? "outline" : "brand"}
      className={className ? className : "w-full text-xl font-semibold"}
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <LoaderCircleIcon className="animate-spin" /> : buttonText}
    </Button>
  );
};

export default LoadingButton;
