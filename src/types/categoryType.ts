export type CategoryDTO = {
  id: number;
  category: string;
  categoryExplain: string;
};

export type CategoryLearningRateDTO = {
  학습: number;
  전체: number;
};

export type ChapterStatusDTO = {
  chapterId: number;
  chapterName: string;
  learned: boolean;
};
