import { useQueryScrapKnowledge } from "@/hooks/queries/useQueryScrapKnowledge";

import { KnowledgeDTO } from "@/types/commonType";

import KnowledgeItem from "@/pages/bookmark/_components/KnowledgeItem";

const KnowledgeSection = () => {
  const userEmail = localStorage.getItem("userEmail");
  const { data: scrapKnowledges } = useQueryScrapKnowledge(userEmail!);

  return (
    <section className="flex flex-col gap-6">
      {scrapKnowledges.map((item: KnowledgeDTO) => (
        <KnowledgeItem key={item.id} id={item.id} date={item.date} />
      ))}
    </section>
  );
};

export default KnowledgeSection;
