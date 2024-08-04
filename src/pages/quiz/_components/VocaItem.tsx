import { useState } from "react";
import { cn } from "@ui/lib/utils";

import SubBookMarkIcon from "@/components/Icons/SubBookMarkIcon";

import { useMutationScrapWord } from "@/hooks/mutation/useMutationScrapWord";

interface VocaItemProps {
  id: number;
  isScrap: boolean;
  word: string;
  wordClass: string;
  description: string;
  example: string;
}

const VocaItem = (props: VocaItemProps) => {
  const { id, isScrap, word, wordClass, description, example } = props;

  const [isBookmarked, setIsBookmarked] = useState(isScrap);

  const mutation = useMutationScrapWord();
  const userEmail = localStorage.getItem("userEmail")!;

  const handleBookmarkClick = () => {
    if (!isBookmarked) {
      setIsBookmarked(true);

      mutation.mutate(
        { userEmail, wordId: id },
        {
          onSuccess: () => {
            return;
          },
        },
      );
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-[13px] rounded-[37px] border-2 px-5 py-[30px]",
        {
          "border-brandGray": !isBookmarked,
          "border-brand": isBookmarked,
        },
      )}
    >
      <section className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-0.5 text-brand">
          <div className="flex w-full items-center justify-between">
            <div className="text-xl font-bold">{word}</div>
            <SubBookMarkIcon
              isActive={isBookmarked}
              onClick={handleBookmarkClick}
            />
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

export default VocaItem;
