import { useState } from "react";

import SubBookMarkIcon from "@/components/Icons/SubBookMarkIcon";
import ClassComponent from "@/components/ClassComponent";

import { useMutationScrapKnowledge } from "@/hooks/mutation/useMutationScrapKnowledge";
import { useMutationCancelKnowledge } from "@/hooks/mutation/useMutationCancelKnowledge";

interface CompleteSectionProps {
  id: number;
  image: string;
  title1: string;
  title2: string;
  explain: string;
  class1: string;
  class2: string;
  itemStyle: React.CSSProperties;
}

const CompleteSection = (props: CompleteSectionProps) => {
  const { id, image, title1, title2, explain, class1, class2, itemStyle } =
    props;

  const [isScrap, setIsScrap] = useState(false);

  const mutation = useMutationScrapKnowledge();
  const cancelMutation = useMutationCancelKnowledge();
  const userEmail = localStorage.getItem("userEmail");

  const handleScrapClick = () => {
    if (!isScrap && userEmail) {
      setIsScrap(true);

      mutation.mutate(
        {
          userEmail,
          knowledgeId: id,
        },
        {
          onSuccess: () => {
            return;
          },
        },
      );
    } else if (userEmail) {
      setIsScrap(false);

      cancelMutation.mutate(
        {
          userEmail,
          knowledgeId: id,
        },
        {
          onSuccess: () => {
            return;
          },
        },
      );
    }
  };

  return (
    <section
      className="relative mb-auto mt-7 flex h-auto w-4/5 flex-col justify-evenly rounded-[41px] border-[3px] border-brandGray px-6 py-4"
      style={itemStyle}
    >
      <div className="absolute right-8 top-5 z-30 flex items-center gap-[6px]">
        <div className="text-base font-bold text-brand">스크랩하기</div>
        <SubBookMarkIcon isActive={isScrap} onClick={handleScrapClick} />
      </div>
      <div className="z-20 flex flex-col gap-[14px]">
        <div className="flex gap-2">
          <ClassComponent title={class1} />
          <ClassComponent title={class2} />
        </div>
        <h1 className="text-[27px] font-extrabold leading-tight">
          {title1}
          <br />
          {title2}
        </h1>
        <p className="text-base font-extrabold text-brandSubText">{explain}</p>
      </div>
      <div className="z-10 flex w-full justify-end pr-3">
        <img
          src={image}
          alt="First Apple"
          loading="lazy"
          className="h-auto w-4/5 object-contain"
        />
      </div>
    </section>
  );
};

export default CompleteSection;
