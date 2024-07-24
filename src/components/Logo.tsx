import { cn } from "@ui/lib/utils";

import LogoImage from "@/assets/logo.png";

import { Link } from "@/router";

interface LogoProps {
  size?: number | string;
}

const Logo = (props: LogoProps) => {
  const { size = 42 } = props;
  return (
    <Link to="/" className="flex justify-center">
      <img src={LogoImage} width={size} loading="lazy" alt="로고" />
    </Link>
  );
};

export default Logo;
