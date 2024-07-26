import PWIconImage from "@/assets/PasswordIcon.png";

const PWIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={PWIconImage}
        className="h-auto w-[18px]"
        loading="lazy"
        alt="PWIcon"
      />
    </div>
  );
};

export default PWIcon;
