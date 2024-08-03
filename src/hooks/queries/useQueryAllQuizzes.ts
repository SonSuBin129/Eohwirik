import { useSuspenseQuery } from "@tanstack/react-query";

import { getAllQuizzesParams } from "@/types/quizType";

import { getAllQuizzes } from "@/api/quiz";

export const useQueryAllQuizzes = ({
  userEmail,
  chapterId,
}: getAllQuizzesParams) => {
  const { data } = useSuspenseQuery({
    queryKey: ["scrap-quiz-list", userEmail, chapterId],
    queryFn: () => getAllQuizzes({ userEmail, chapterId }),
  });

  return { data };
};
