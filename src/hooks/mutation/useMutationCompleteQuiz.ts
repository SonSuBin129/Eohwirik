import { useMutation } from "@tanstack/react-query";

import { setCompleteParams } from "@/types/quizType";

import { setCompleteQuiz } from "@/api/quiz";

export const useMutationCompleteQuiz = () => {
  const mutation = useMutation({
    mutationFn: ({ userEmail, chapterId }: setCompleteParams) =>
      setCompleteQuiz({ userEmail, chapterId }),
    onSuccess: (response: string) => {
      return response;
    },
  });
  return mutation;
};
