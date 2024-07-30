import MyPageImage from "@/assets/MyPageImage.png";
import MyPageActiveImage from "@/assets/MyPageActiveImage.png";

interface MyPageProps {
  isActive: boolean;
  onChange: () => void;
}

const MyPageIcon = (props: MyPageProps) => {
  const { isActive, onChange } = props;

  return (
    <div onClick={onChange} className="flex items-center justify-center">
      <img
        src={isActive ? MyPageActiveImage : MyPageImage}
        className="h-11 w-auto"
        loading="lazy"
        alt="MyPageIcon"
      />
    </div>
  );
};

export default MyPageIcon;
