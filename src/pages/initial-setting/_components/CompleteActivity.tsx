import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import CompleteIcon from "@/components/Icons/CompleteIcon";
import BackIcon from "@/components/Icons/BackIcon";

import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

import NextStepButton from "@/pages/initial-setting/_components/NextStepButton";
import initialSettingComplete from "@/assets/initialSettingComplete.png";

type CompleteParams = {
  nickname: string;
};

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { nickname } = params;

  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        backButton: {
          renderIcon: () => <BackIcon />,
          ariaLabel: "Go Back",
        },
      }}
    >
      <Activity>
        <ActivityContent className="justify-between px-0 pb-0">
          <main className="flex h-full flex-col items-center justify-evenly px-4">
            <ActivityHeader>
              <CompleteIcon />
              <section className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-8 text-2xl font-bold">
                  <div>
                    <p className="text-brand">[{nickname}]님,</p>
                    <p>입학을 축하합니다!</p>
                  </div>
                  <div>
                    <div>
                      <p className="inline-block">이제&nbsp;</p>
                      <p className="inline-block text-brand">[어휘릭]</p>
                      <p className="inline-block">의&nbsp;</p>
                      <p className="inline-block text-brand">유생</p>
                      <p className="inline-block">이 되셨습니다!</p>
                    </div>
                    <div>지금부터 함께 어휘력을 키워보아요!</div>
                  </div>
                </div>
                <div className="text-sm text-brandSubText">
                  [어휘릭]과 함께 즐겁고 유익한 학습 여정을 시작해보세요!
                </div>
              </section>
            </ActivityHeader>
            <div className="flex w-full grow items-center justify-center">
              <img
                src={initialSettingComplete}
                className="w-[361]"
                loading="lazy"
                alt="Complete"
              />
            </div>
          </main>
          <ActivityFooter className="sticky bottom-0">
            <NextStepButton
              activityName={"MainActivity" as never}
              disabled={false}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;
