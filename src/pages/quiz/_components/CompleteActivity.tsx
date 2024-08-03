import { useEffect } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import CompleteIcon from "@/components/Icons/CompleteIcon";
import BackIcon from "@/components/Icons/BackIcon";

import { useMutationCompleteQuiz } from "@/hooks/mutation/useMutationCompleteQuiz";

import {
  Activity,
  ActivityHeader,
  ActivityFooter,
  ActivityContent,
} from "./Activity";

import NextButton from "@/pages/quiz/_components/NextButton";

type CompleteParams = {
  chapterId: number;
  chapterName: string;
};

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { chapterId, chapterName } = params;

  const mutation = useMutationCompleteQuiz();
  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    if (userEmail) {
      mutation.mutate({
        userEmail: userEmail,
        chapterId: chapterId,
      });
    }
  }, [userEmail, chapterId]);

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
            <ActivityHeader>
              <CompleteIcon />
              <section className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-8">
                  <div className="text-2xl font-bold">
                    <p className="text-brand">수고하셨습니다!</p>
                    <div>
                      <p className="inline-block text-brand">[{chapterName}]</p>
                      <p className="inline-block">&nbsp;학습을 완료했어요!</p>
                    </div>
                  </div>
                  <div className="text-sm text-brandSubText">
                    [어휘릭]과 함께 계속 어휘력을 향상시켜보세요!
                  </div>
                </div>
              </section>
            </ActivityHeader>
          </main>
          <ActivityFooter>
            <NextButton
              activityName={"VocaActivity" as never}
              chapterId={chapterId}
              chapterName={chapterName}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;
