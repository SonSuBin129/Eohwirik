import { ScrapWordDTO } from "@/types/quizType";

import SearchItem from "@/pages/search/_components/SearchItem";

interface SearchSectinProps {
  datas: ScrapWordDTO[];
  isFirst: boolean;
}

const SearchSection = (props: SearchSectinProps) => {
  const { datas, isFirst } = props;
  return (
    <section className="flex w-full flex-col gap-6">
      {datas && datas.length > 0 ? (
        datas.map((item: ScrapWordDTO) => (
          <SearchItem
            key={item.id}
            wordId={item.id}
            isScrap={item.scrap}
            word={item.word}
            wordClass={item.wordClass}
            description={item.description}
            example={item.example}
          />
        ))
      ) : (
        <div className="text-center text-lg">
          {isFirst ? "" : "입력하신 검색어를 포함하는 어휘가 없어요 😓"}
        </div>
      )}
    </section>
  );
};

export default SearchSection;
