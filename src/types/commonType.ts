export type KnowledgeDTO = {
  id: number;
  date: string;
  title: string;
};

export type ScrapKnowledgeParams = {
  userEmail: string;
  knowledgeId: number;
};
