import {
  CategoryDTO,
  CategoryLearningRateDTO,
  ChapterStatusDTO,
} from "@/types/categoryType";

import { instance } from "@/api/instance";

export const getCategoryList = async () => {
  const { data } = await instance.get<CategoryDTO[]>("/category");
  return data;
};

export const getCategoryLearningRate = async (categoryId: number) => {
  const userEmail = localStorage.getItem("userEmail");
  const { data } = await instance.get<CategoryLearningRateDTO>(
    `/quiz/words-count?categoryId=${categoryId}&userEmail=${userEmail}`,
  );
  return data;
};

export const getChapterStatus = async (categoryId: number) => {
  const userEmail = localStorage.getItem("userEmail");
  const { data } = await instance.get<ChapterStatusDTO[]>(
    `/quiz/status?categoryId=${categoryId}&userEmail=${userEmail}`,
  );
  return data;
};
