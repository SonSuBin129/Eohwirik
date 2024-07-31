import BookMarkImage from "@/assets/BookMarkImage.png";
import BookMarkActiveImage from "@/assets/BookMarkActiveImage.png";
import { Link } from "react-router-dom";

interface BookMarkProps {
  isActive: boolean;
}

const BookMarkIcon = (props: BookMarkProps) => {
  const { isActive } = props;

  return (
    <Link to="/bookmark">
      <div className="flex items-center justify-center">
        <img
          src={isActive ? BookMarkActiveImage : BookMarkImage}
          className="h-11 w-auto"
          loading="lazy"
          alt="BookMarkIcon"
        />
      </div>
    </Link>
  );
};

export default BookMarkIcon;
