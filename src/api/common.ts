import { KnowledgeDTO } from "@/types/commonType";

import { instance } from "@/api/instance";

export const getCommonList = async () => {
  const { data } = await instance.get<KnowledgeDTO[]>("/knowledge/today");

  return data;
};
