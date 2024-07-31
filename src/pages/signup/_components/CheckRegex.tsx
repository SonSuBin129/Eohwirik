import { cn } from "@ui/lib/utils";

import ToastAlarmIcon from "@/components/Icons/ToastAlarmIcon";
import PassIcon from "@/components/Icons/PassIcon";

interface CheckRegexProps {
  isPass?: boolean;
}

const CheckRegex = (props: CheckRegexProps) => {
  const { isPass } = props;

  const ment = isPass ? "사용 가능" : "사용 불가";

  return (
    <div className="flex items-center gap-1">
      <div
        className={cn("text-[13px]", {
          "text-brand": isPass,
          "text-brandError": !isPass,
        })}
      >
        {ment}
      </div>
      {isPass ? <PassIcon /> : <ToastAlarmIcon />}
    </div>
  );
};

export default CheckRegex;
