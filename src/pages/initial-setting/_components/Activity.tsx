import React from "react";
import { cn } from "@ui/lib/utils";

import { FormType } from "@/hooks/useInitialSettingForm";

export interface ActivityParams {
  form: FormType;
}

const ActivityHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header
      className={cn(
        "mt-14 flex w-full flex-col justify-end gap-[10px]",
        className,
      )}
      {...props}
    />
  );
};
ActivityHeader.displayName = "ActivityHeader";

const ActivityContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className="flex h-full grow flex-col items-center px-4">
      <section
        className={cn(
          "flex w-full grow flex-col justify-center gap-3 pb-10",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    </main>
  );
};
ActivityContent.displayName = "ActivityContent";

const ActivityFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <footer className={className} {...props} />;
};
ActivityFooter.displayName = "ActivityFooter";

const Activity = ({ children }: { children: React.ReactNode }) => {
  return children;
};
Activity.displayName = "Activity";

export { ActivityHeader, ActivityContent, ActivityFooter, Activity };
