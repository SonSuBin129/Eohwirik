import * as React from "react";

import { cn } from "@ui/lib/utils";
import PWIcon from "@/components/PWIcon";

import CheckRegex from "@/pages/signup/_components/CheckRegex";

export interface PWInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  doubleCheck?: boolean;
  isPass?: boolean;
  value: string;
}

const PWInputField = React.forwardRef<HTMLInputElement, PWInputFieldProps>(
  ({ className, doubleCheck, value, isPass, ...props }, ref) => {
    return (
      <div className="flex h-12 items-center justify-between gap-[11px] rounded-lg border border-brandGray border-input px-5 py-4">
        <PWIcon />
        <input
          type={"password"}
          className={cn(
            "flex h-5 grow items-center bg-background pl-1 text-base text-brandInput ring-offset-background file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50",
            className,
          )}
          value={value}
          ref={ref}
          {...props}
        />
        {!doubleCheck && value !== "" && <CheckRegex isPass={isPass} />}
      </div>
    );
  },
);
PWInputField.displayName = "PWInputField";

export { PWInputField };
