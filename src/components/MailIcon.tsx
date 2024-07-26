import MailIconImage from "@/assets/MailIcon.png";

const MailIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={MailIconImage}
        className="h-auto w-5"
        loading="lazy"
        alt="MailIcon"
      />
    </div>
  );
};

export default MailIcon;
