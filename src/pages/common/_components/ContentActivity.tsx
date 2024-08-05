import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BackIcon from "@/components/Icons/BackIcon";

import NextButton from "./NextButton";

import MoneyContent from "@/pages/common/_components/MoneyContent";
import ForeignContent from "@/pages/common/_components/ForeignContent";
import BusinessContent from "@/pages/common/_components/BusinessContent";
import AppleContent from "@/pages/common/_components/AppleContent";

type ContentParams = {
  commonId: number;
};

const contents = [
  { id: 1, content: AppleContent },
  { id: 2, content: MoneyContent },
  { id: 3, content: BusinessContent },
  { id: 4, content: ForeignContent },
];

const ContentActivity: ActivityComponentType<ContentParams> = ({ params }) => {
  const { commonId } = params;

  const ContentComponent =
    contents.find(item => item.id === commonId)?.content || null;

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
      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <div>해당 콘텐츠를 찾을 수 없습니다.</div>
      )}
      <footer className="sticky bottom-0 z-50">
        <NextButton
          activityName={"CompleteActivity" as never}
          commonId={commonId}
        />
      </footer>
    </AppScreen>
  );
};

export default ContentActivity;
