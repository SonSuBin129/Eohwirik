import CompleteIconImage from "@/assets/CompleteIconImage.png";

interface CheckAgreeIconProps {
  isActive: boolean;
  onClick: () => void;
}

const CheckAgreeIcon = (props: CheckAgreeIconProps) => {
  const { isActive, onClick } = props;
  return (
    <div
      className="flex aspect-square h-6 w-6 items-center justify-center"
      onClick={onClick}
    >
      {isActive ? (
        <img src={CompleteIconImage} className="h-auto w-full" loading="lazy" />
      ) : (
        <div className="h-full w-full rounded-full border border-brand"></div>
      )}
    </div>
  );
};

export default CheckAgreeIcon;
