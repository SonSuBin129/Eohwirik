import { WordScrapParams } from "@/types/scrapType";

import { instance } from "@/api/instance";

export const scrapWord = async ({ userEmail, wordId }: WordScrapParams) => {
  const { data } = await instance.post(
    `/scrap/word-save?userEmail=${userEmail}&wordId=${wordId}`,
  );
  return data;
};
