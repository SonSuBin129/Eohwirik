import React from "react";
import { cn } from "@ui/lib/utils";

import SearchActiveIcon from "@/components/Icons/SearchActiveIcon";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <div className="flex h-14 justify-between rounded-[39px] border-2 border-brand px-7">
        <input
          type="text"
          className={cn(
            className,
            "text-base font-semibold text-brand focus-visible:outline-none",
          )}
          autoComplete="off"
          ref={ref}
          {...props}
        />
        <SearchActiveIcon onClick={onClick} />
      </div>
    );
  },
);

export default InputField;
