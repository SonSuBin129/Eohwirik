import { cn } from "@ui/lib/utils";

import LogoImage from "@/assets/logo.png";

interface LogoProps {
  size?: number | string;
  className?: string;
}

const Logo = (props: LogoProps) => {
  const { size = 42, className } = props;
  return (
    <div className={cn("flex items-center", className || "justify-center")}>
      <img
        src={LogoImage}
        width={size}
        className="h-auto"
        loading="lazy"
        alt="로고"
      />
    </div>
  );
};

export default Logo;
