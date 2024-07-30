import { useActions } from "@stackflow/react";

import type { TypeActivities } from "./stackflow";

export const useMyFlow = () => {
  return useActions<TypeActivities>();
};
