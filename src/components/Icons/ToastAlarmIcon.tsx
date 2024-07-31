import toastAlarmImage from "@/assets/toastAlarm.png";

const ToastAlarmIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={toastAlarmImage}
        className="h-auto w-[18px]"
        loading="lazy"
        alt="toasterAlarmIcon"
      />
    </div>
  );
};

export default ToastAlarmIcon;
