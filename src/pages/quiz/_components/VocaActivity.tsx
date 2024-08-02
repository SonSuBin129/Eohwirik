import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import CompleteIcon from "@/components/Icons/CompleteIcon";
import BackIcon from "@/components/Icons/BackIcon";

import {
  Activity,
  ActivityHeader,
  ActivityFooter,
  ActivityContent,
} from "./Activity";

import NextButton from "@/pages/quiz/_components/NextButton";

type VocaParams = {
  chapterId: number;
  chapterName: string;
};

const VocaActivity: ActivityComponentType<VocaParams> = ({ params }) => {
  const { chapterId, chapterName } = params;

  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        backButton: {
          renderIcon: () => <BackIcon />,
          ariaLabel: "Go Back",
        },
        title: <div className="text-xl font-bold">{chapterName}</div>,
      }}
    >
      <Activity>
        <ActivityContent>
          <main className="flex flex-col gap-5 px-4">
            <div>지금 voca</div>
            <section className="flex flex-col gap-[23px]">
              <div>chapterId: {chapterId}</div>
              <div>chapterName: {chapterName}</div>
            </section>
          </main>
          <ActivityFooter>
            <NextButton activityName={"MainActivity" as never} />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default VocaActivity;
