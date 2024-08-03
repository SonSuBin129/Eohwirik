export type QuizDTO = {
  id: number;
  question1: string;
  question2: string;
  answer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
};

export type WrongWordDTO = {
  id: number;
  word: string;
  wordClass: string;
  description: string;
  example: string;
};

export type WordDTO = WrongWordDTO & {
  explanation: string;
};

export type QuizResponseDTO = {
  answerWord: WordDTO;
  wrongWord1: WrongWordDTO;
  wrongWord2: WrongWordDTO;
  wrongWord3: WrongWordDTO;
};

export type setCompleteParams = {
  userEmail: string;
  chapterId: number;
};

export type getAllQuizzesParams = setCompleteParams;

export type ScrapWordDTO = WrongWordDTO & {
  scrap: boolean;
};
