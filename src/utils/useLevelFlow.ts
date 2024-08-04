import type { TypeActivities } from "./levelflow";

import { useActions } from "@stackflow/react";

export const useLevelFlow = () => {
  return useActions<TypeActivities>();
};
