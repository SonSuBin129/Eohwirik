import { SearchParams } from "@/types/searchType";
import { ScrapWordDTO } from "@/types/quizType";

import { instance } from "@/api/instance";

export const getSearchItems = async ({ userEmail, keyword }: SearchParams) => {
  const { data } = await instance.get<ScrapWordDTO[]>(
    `/words/search?userEmail=${userEmail}&keyword=${keyword}`,
  );
  return data;
};
