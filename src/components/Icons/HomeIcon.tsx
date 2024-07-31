import HomeImage from "@/assets/HomeImage.png";
import HomeActiveImage from "@/assets/HomeActiveImage.png";
import { Link } from "react-router-dom";

interface HomeIconProps {
  isActive: boolean;
}

const HomeIcon = (props: HomeIconProps) => {
  const { isActive } = props;

  return (
    <Link to="/home">
      <div className="flex items-center justify-center">
        <img
          src={isActive ? HomeActiveImage : HomeImage}
          className="h-11 w-auto"
          loading="lazy"
          alt="HomeIcon"
        />
      </div>
    </Link>
  );
};

export default HomeIcon;
