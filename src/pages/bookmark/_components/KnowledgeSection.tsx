import { useQueryScrapKnowledge } from "@/hooks/queries/useQueryScrapKnowledge";

import { KnowledgeDTO } from "@/types/commonType";

import KnowledgeItem from "@/pages/bookmark/_components/KnowledgeItem";

const KnowledgeSection = () => {
  const userEmail = localStorage.getItem("userEmail");
  const { data: scrapKnowledges } = useQueryScrapKnowledge(userEmail!);

  return (
    <section className="flex flex-col gap-6">
      {scrapKnowledges && scrapKnowledges.length > 0 ? (
        scrapKnowledges.map((item: KnowledgeDTO) => (
          <KnowledgeItem key={item.id} id={item.id} date={item.date} />
        ))
      ) : (
        <div className="text-center text-lg">스크랩한 단어가 없어요 😓</div>
      )}
    </section>
  );
};

export default KnowledgeSection;
