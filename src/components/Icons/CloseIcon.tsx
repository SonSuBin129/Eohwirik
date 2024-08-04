import { cn } from "@ui/lib/utils";

import CloseIconImage from "@/assets/CloseIconImage.png";

interface CloseIconProps {
  className?: string;
}

const CloseIcon = (props: CloseIconProps) => {
  const { className } = props;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src={CloseIconImage}
        className="h-auto w-[18px]"
        loading="lazy"
        alt="CloseIcon"
      />
    </div>
  );
};

export default CloseIcon;
