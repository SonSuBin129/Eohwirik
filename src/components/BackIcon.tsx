import BackIconImage from "@/assets/BackIcon.png";

const BackIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={BackIconImage}
        className="h-auto w-[11px]"
        loading="lazy"
        alt="BackIcon"
      />
    </div>
  );
};

export default BackIcon;
