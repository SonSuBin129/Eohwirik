import CompleteIconImage from "@/assets/CompleteIconImage.png";

const CompleteIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={CompleteIconImage}
        className="h-auto w-7"
        loading="lazy"
        alt="CompleteIcon"
      />
    </div>
  );
};

export default CompleteIcon;
