import { useActions } from "@stackflow/react";

import type { TypeActivities } from "@/utils/quizStackflow";

export const useQuizFlow = () => {
  return useActions<TypeActivities>();
};
