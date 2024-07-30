import type { TypeActivities } from "./initialSettingFlow";
import { useActions } from "@stackflow/react";

export const useInitialSettingFlow = () => {
  return useActions<TypeActivities>();
};
