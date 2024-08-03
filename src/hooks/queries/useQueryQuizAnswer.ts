import { useSuspenseQuery } from "@tanstack/react-query";

import { getQuizAnswer } from "@/api/quiz";

export const useQueryQuizAnswer = (quizId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["quiz-answer", quizId],
    queryFn: () => getQuizAnswer(quizId),
  });
  return { data };
};
