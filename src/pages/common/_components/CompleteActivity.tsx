import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BackIcon from "@/components/Icons/BackIcon";

import { useManageCommonSense } from "@/hooks/useManageCommonSense";

import NextButton from "./NextButton";
import CompleteSection from "./CompleteSection";

type CompleteParams = {
  commonId: number;
};

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { commonId } = params;

  const { image, title1, title2, explain, class1, class2, backgroundColor } =
    useManageCommonSense(commonId, "complete");

  const itemStyle = {
    backgroundColor: backgroundColor.startsWith("linear-gradient")
      ? undefined
      : backgroundColor, // 단일 색상인 경우 적용
    backgroundImage: backgroundColor.startsWith("linear-gradient")
      ? backgroundColor
      : undefined, // 그라데이션인 경우 적용
  };

  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        backButton: {
          renderIcon: () => <BackIcon />,
          ariaLabel: "Go Back",
        },
        title: <div className="text-xl font-bold">매일 어휘 한 조각</div>,
      }}
    >
      <main
        className="flex h-full flex-col items-center px-4 pt-[52px]"
        style={{ height: "calc(100% - 56px)" }}
      >
        <section className="flex w-full flex-col gap-1 font-bold">
          <div className="flex flex-col gap-[6px]">
            <div className="text-2xl text-brand">축하합니다!</div>
            <div className="text-2xl">성공적으로 학습했어요.</div>
          </div>
          <div className="text-base text-[#9d9d9d]">
            스크랩하시면 다음에도 다시 보기가 가능합니다
          </div>
        </section>

        <CompleteSection
          id={commonId}
          image={image}
          title1={title1}
          title2={title2}
          explain={explain}
          class1={class1}
          class2={class2}
          itemStyle={itemStyle}
        />
      </main>
      <footer className="sticky bottom-0 z-50">
        <NextButton
          activityName={"MainActivity" as never}
          commonId={commonId}
        />
      </footer>
    </AppScreen>
  );
};

export default CompleteActivity;
