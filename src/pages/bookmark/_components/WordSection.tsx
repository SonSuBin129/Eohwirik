import { useQueryScrapWord } from "@/hooks/queries/useQueryScrapWord";

import { ScrapWordDTO } from "@/types/quizType";

import WordItem from "./WordItem";

const WordSection = () => {
  const userEmail = localStorage.getItem("userEmail");
  const { data: scrapWords } = useQueryScrapWord(userEmail!);

  return (
    <section className="flex flex-col gap-6">
      {scrapWords.map((item: ScrapWordDTO) => (
        <WordItem
          key={item.id}
          isScrap={item.scrap}
          word={item.word}
          wordClass={item.wordClass}
          description={item.description}
          example={item.example}
        />
      ))}
    </section>
  );
};
export default WordSection;
