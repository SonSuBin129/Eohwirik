import { cn } from "@ui/lib/utils";

import SubBookMarkIcon from "@/components/Icons/SubBookMarkIcon";

interface WordItemProps {
  isScrap: boolean;
  word: string;
  wordClass: string;
  description: string;
  example: string;
}

const WordItem = (props: WordItemProps) => {
  const { isScrap, word, wordClass, description, example } = props;

  return (
    <div
      className={cn(
        "flex flex-col gap-[13px] rounded-[37px] border-2 border-brandGray px-5 py-[30px]",
      )}
    >
      <section className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-0.5 text-brand">
          <div className="flex w-full items-center justify-between">
            <div className="text-xl font-bold">{word}</div>
            <SubBookMarkIcon isActive={isScrap} />
          </div>

          <div className="flex w-fit items-center justify-center rounded-[36px] border border-brand px-[5px] py-px text-center text-[10px] font-bold">
            {wordClass}
          </div>
        </div>
        <div className="text-base font-semibold">{description}</div>
      </section>
      <section className="text-[15px] text-brandSubText">{example}</section>
    </div>
  );
};

export default WordItem;
