import BookMarkImage from "@/assets/BookMarkImage.png";
import BookMarkActiveImage from "@/assets/BookMarkActiveImage.png";

interface BookMarkProps {
  isActive: boolean;
  onChange: () => void;
}

const BookMarkIcon = (props: BookMarkProps) => {
  const { isActive, onChange } = props;

  return (
    <div onClick={onChange} className="flex items-center justify-center">
      <img
        src={isActive ? BookMarkActiveImage : BookMarkImage}
        className="h-11 w-auto"
        loading="lazy"
        alt="BookMarkIcon"
      />
    </div>
  );
};

export default BookMarkIcon;
