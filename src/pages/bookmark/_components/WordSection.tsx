import { useQueryScrapWord } from "@/hooks/queries/useQueryScrapWord";

import { ScrapWordDTO } from "@/types/quizType";

import WordItem from "./WordItem";

const WordSection = () => {
  const userEmail = localStorage.getItem("userEmail");
  const { data: scrapWords } = useQueryScrapWord(userEmail!);

  return (
    <section className="flex flex-col gap-6">
      {scrapWords && scrapWords.length > 0 ? (
        scrapWords.map((item: ScrapWordDTO) => (
          <WordItem
            key={item.id}
            isScrap={item.scrap}
            word={item.word}
            wordClass={item.wordClass}
            description={item.description}
            example={item.example}
          />
        ))
      ) : (
        <div className="text-center text-lg">스크랩한 단어가 없어요 😓</div>
      )}
    </section>
  );
};
export default WordSection;
