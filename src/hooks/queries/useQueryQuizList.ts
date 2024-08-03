import { useSuspenseQuery } from "@tanstack/react-query";

import { getQuizList } from "@/api/quiz";

export const useQueryQuizList = (chapterId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["quiz-list", chapterId],
    queryFn: () => getQuizList(chapterId),
  });
  return { data };
};
