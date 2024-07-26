import * as React from "react";

import { cn } from "@ui/lib/utils";
import PWIcon from "@/components/PWIcon";
import CheckPWIcon from "@/components/CheckPWIcon";

import { useState } from "react";

export interface PWInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PWInputField = React.forwardRef<HTMLInputElement, PWInputFieldProps>(
  ({ className, ...props }, ref) => {
    const [showPW, setShowPW] = useState(false);

    const handleShowPW = () => {
      setShowPW(!showPW);
    };

    return (
      <div className="flex h-12 items-center justify-between gap-[11px] rounded-lg border border-input px-5 py-4">
        <PWIcon />
        <input
          type={showPW ? "text" : "password"}
          className={cn(
            "flex h-5 grow items-center bg-background pl-1 text-base ring-offset-background file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <CheckPWIcon isShow={showPW} onChange={handleShowPW} />
      </div>
    );
  },
);
PWInputField.displayName = "PWInputField";

export { PWInputField };
