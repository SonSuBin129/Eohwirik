import SubBookMarkActiveImage from "@/assets/SubBookMarkActive.png";
import SubBookMarkImage from "@/assets/SubBookMark.png";

interface SubBookMarkProps {
  isActive: boolean;
  onClick?: () => void;
}

const SubBookMarkIcon = (props: SubBookMarkProps) => {
  const { isActive, onClick } = props;

  return (
    <div className="flex items-center justify-center" onClick={onClick}>
      <img
        src={isActive ? SubBookMarkActiveImage : SubBookMarkImage}
        className="h-5 w-auto"
        loading="lazy"
        alt="BookMarkIcon"
      />
    </div>
  );
};

export default SubBookMarkIcon;
