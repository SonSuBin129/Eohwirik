import NoShowPWImage from "@/assets/NoShowPW.png";
import ShowPWImage from "@/assets/ShowPW.png";

interface CheckPWIconProps {
  isShow: boolean;
  onChange: () => void;
}

const CheckPWIcon = (props: CheckPWIconProps) => {
  const { isShow, onChange } = props;

  return (
    <div onClick={onChange} className="flex items-center justify-center">
      <img
        src={isShow ? ShowPWImage : NoShowPWImage}
        className="h-auto w-5"
        loading="lazy"
        alt="ShowPW"
      />
    </div>
  );
};

export default CheckPWIcon;
