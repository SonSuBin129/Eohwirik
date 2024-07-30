import BackIconImage from "@/assets/BackIcon.png";

import { cn } from "@ui/lib/utils";

interface BackIconProps {
  className?: string;
}

const BackIcon = (props: BackIconProps) => {
  const { className } = props;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src={BackIconImage}
        className="h-auto w-[11px]"
        loading="lazy"
        alt="BackIcon"
      />
    </div>
  );
};

export default BackIcon;
