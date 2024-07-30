import HomeImage from "@/assets/HomeImage.png";
import HomeActiveImage from "@/assets/HomeActiveImage.png";

interface HomeIconProps {
  isActive: boolean;
  onChange: () => void;
}

const HomeIcon = (props: HomeIconProps) => {
  const { isActive, onChange } = props;

  return (
    <div onClick={onChange} className="flex items-center justify-center">
      <img
        src={isActive ? HomeActiveImage : HomeImage}
        className="h-11 w-auto"
        loading="lazy"
        alt="HomeIcon"
      />
    </div>
  );
};

export default HomeIcon;
