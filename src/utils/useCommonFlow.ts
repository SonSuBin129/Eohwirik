import type { TypeActivities } from "./commonflow";

import { useActions } from "@stackflow/react";

export const useCommonFlow = () => {
  return useActions<TypeActivities>();
};
