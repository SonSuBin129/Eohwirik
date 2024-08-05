import SubBookMarkIcon from "@/components/Icons/SubBookMarkIcon";
import ClassComponent from "@/components/ClassComponent";

import { useManageCommonSense } from "@/hooks/useManageCommonSense";

interface KnowledgeItemProps {
  id: number;
  date: string;
}

const size = [
  { id: 1, width: 250 },
  { id: 2, width: 318 },
  { id: 3, width: 278 },
  { id: 4, width: 293 },
];

const KnowledgeItem = (props: KnowledgeItemProps) => {
  const { id, date } = props;

  const width = size.find(s => s.id === id)?.width || "100%";

  const { image, title1, title2, explain, class1, class2, backgroundColor } =
    useManageCommonSense(id, "second");

  const itemStyle = {
    backgroundColor: backgroundColor.startsWith("linear-gradient")
      ? undefined
      : backgroundColor, // 단일 색상인 경우 적용
    backgroundImage: backgroundColor.startsWith("linear-gradient")
      ? backgroundColor
      : undefined, // 그라데이션인 경우 적용
  };

  return (
    <section className="flex flex-col gap-[5px]">
      <div className="text-sm text-brandSubText">{date}</div>

      <div
        className="relative flex h-[271px] w-[361px] flex-col gap-[9px] rounded-[37px] border-2 border-brandGray px-[18px] py-[22px]"
        style={itemStyle}
      >
        <div className="absolute right-[18px] top-6 z-30">
          <SubBookMarkIcon isActive />
        </div>

        <div className="z-20 flex gap-2">
          <ClassComponent title={class1} />
          <ClassComponent title={class2} />
        </div>

        <div className="z-20 flex flex-col gap-1">
          <h1 className="text-[26px] font-bold leading-tight">
            {id === 4 ? (
              <>
                한국인도
                <br />
                헷갈리는 한국어,
                <br />
                완벽 이해하자!
              </>
            ) : (
              <>
                {title1}
                <br />
                {title2}
              </>
            )}
          </h1>
          <p className="text-sm font-bold leading-tight text-brandSubText">
            {id === 1 ? (
              <>
                일상 속 헷갈리는 관용구,
                <br />한 방에 정리!
              </>
            ) : (
              <>{explain}</>
            )}
          </p>
        </div>

        <div className="absolute bottom-1 right-1 z-10" style={{ width }}>
          <img src={image} loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default KnowledgeItem;
