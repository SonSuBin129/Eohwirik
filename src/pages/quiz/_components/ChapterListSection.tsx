import { useQueryChapterStatus } from "@/hooks/queries/useQueryChapterStatus";

import ChapterItem from "@/pages/quiz/_components/ChapterItem";

interface ChapterListSectionProps {
  categoryId: number;
}

const ChapterListSection = (props: ChapterListSectionProps) => {
  const { categoryId } = props;

  const { data: chapters } = useQueryChapterStatus(categoryId);

  return (
    <div className="flex w-full flex-col gap-[14px]">
      {chapters.map(({ chapterId, chapterName, learned }) => (
        <ChapterItem
          key={chapterId}
          chapterId={chapterId}
          chapterName={chapterName}
          isLearned={learned}
        />
      ))}
    </div>
  );
};

export default ChapterListSection;
