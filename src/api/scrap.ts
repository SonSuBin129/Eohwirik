import { WordScrapParams } from "@/types/scrapType";
import { ScrapWordDTO } from "@/types/quizType";
import { KnowledgeDTO, ScrapKnowledgeParams } from "@/types/commonType";

import { instance } from "@/api/instance";

export const scrapWord = async ({ userEmail, wordId }: WordScrapParams) => {
  const { data } = await instance.post(
    `/scrap/word-save?userEmail=${userEmail}&wordId=${wordId}`,
  );
  return data;
};

export const getScrapWord = async (userEmail: string) => {
  const { data } = await instance.get<ScrapWordDTO[]>(
    `/scrap/word-check?userEmail=${userEmail}`,
  );
  return data;
};

export const scrapKnowledge = async ({
  knowledgeId,
  userEmail,
}: ScrapKnowledgeParams) => {
  const { data } = await instance.post(
    `/scrap/knowledge-save?knowledgeId=${knowledgeId}&userEmail=${userEmail}`,
  );

  return data;
};

export const getScrapKnowledge = async (userEmail: string) => {
  const { data } = await instance.get<KnowledgeDTO[]>(
    `/scrap/knowledge-check?userEmail=${userEmail}`,
  );

  return data;
};
