import * as React from "react";

import { cn } from "@ui/lib/utils";
import MailIcon from "@/components/MailIcon";

export interface MailInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const MailInputField = React.forwardRef<HTMLInputElement, MailInputFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex h-12 items-center justify-between gap-[11px] rounded-lg border border-input px-5 py-4">
        <MailIcon />
        <input
          type="email"
          className={cn(
            "flex h-5 grow items-center bg-background pl-1 text-base ring-offset-background file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
MailInputField.displayName = "MailInputField";

export { MailInputField };
