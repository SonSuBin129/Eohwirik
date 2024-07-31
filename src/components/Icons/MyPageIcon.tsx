import MyPageImage from "@/assets/MyPageImage.png";
import MyPageActiveImage from "@/assets/MyPageActiveImage.png";
import { Link } from "react-router-dom";

interface MyPageProps {
  isActive: boolean;
}

const MyPageIcon = (props: MyPageProps) => {
  const { isActive } = props;

  return (
    <Link to="mypage">
      <div className="flex items-center justify-center">
        <img
          src={isActive ? MyPageActiveImage : MyPageImage}
          className="h-11 w-auto"
          loading="lazy"
          alt="MyPageIcon"
        />
      </div>
    </Link>
  );
};

export default MyPageIcon;
