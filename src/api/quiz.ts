import {
  QuizDTO,
  QuizResponseDTO,
  setCompleteParams,
  getAllQuizzesParams,
  ScrapWordDTO,
} from "@/types/quizType";

import { instance } from "@/api/instance";

export const getQuizList = async (chapterId: number) => {
  const { data } = await instance.get<QuizDTO[]>(
    `/quiz/quizzes?chapterId=${chapterId}`,
  );
  return data;
};

export const getQuizAnswer = async (quizId: number) => {
  const { data } = await instance.get<QuizResponseDTO>(
    `/quiz/details?quizId=${quizId}`,
  );

  return data;
};

export const setCompleteQuiz = async ({
  userEmail,
  chapterId,
}: setCompleteParams) => {
  const { data } = await instance.post(
    `/quiz/complete-chapter?userEmail=${userEmail}&chapterId=${chapterId}`,
  );
  return data;
};

export const getAllQuizzes = async ({
  userEmail,
  chapterId,
}: getAllQuizzesParams) => {
  const { data } = await instance.get<ScrapWordDTO[]>(
    `/quiz/words?chapterId=${chapterId}&userEmail=${userEmail}`,
  );
  return data;
};
