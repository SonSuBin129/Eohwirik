import { Input } from "@ui/components/ui/input";
import { cn } from "@ui/lib/utils";
import React from "react";

export interface NickNameFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const NickNameField = React.forwardRef<HTMLInputElement, NickNameFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        type="text"
        className={cn(
          className,
          "flex h-14 rounded-[39px] border-2 border-brand pl-7 text-xl font-bold text-brand",
        )}
        autoComplete="off"
        ref={ref}
        {...props}
      />
    );
  },
);

export default NickNameField;
