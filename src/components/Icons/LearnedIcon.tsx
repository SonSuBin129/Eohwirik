import NotLearnedImage from "@/assets/NotLearnedImage.png";
import LearnedImage from "@/assets/LearnedImage.png";

interface LearnedIconProps {
  isLearned: boolean;
}

const LearnedIcon = (props: LearnedIconProps) => {
  const { isLearned } = props;

  return (
    <div className="flex items-center justify-center">
      <img
        src={isLearned ? LearnedImage : NotLearnedImage}
        className="h-auto w-4"
        loading="lazy"
        alt="LearnedIcon"
      />
    </div>
  );
};

export default LearnedIcon;
