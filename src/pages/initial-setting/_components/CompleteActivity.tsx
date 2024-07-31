import BackIcon from "@/components/Icons/BackIcon";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";
import NextStepButton from "@/pages/initial-setting/_components/NextStepButton";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import NumberIcon from "@/components/Icons/NumberIcon";
import BlueCharacter from "@/components/character/BlueCharacter";

type CompleteParams = {
  step: number;
  nickname: string;
};

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { step, nickname } = params;

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
        <ActivityContent>
          <ActivityHeader>
            <NumberIcon number={step} />
            <section className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-8 text-2xl font-bold">
                <div>
                  <p className="text-brand">[{nickname}]님,</p>
                  <p>입학을 축하합니다!</p>
                </div>
                <div>
                  <div>
                    <p className="inline-block">이제&nbsp;</p>
                    <p className="inline-block text-brand">[어휘릭]의</p>
                    <p className="inline-block">의&nbsp;</p>
                    <p className="inline-block text-brand">유생</p>
                    <p className="inline-block">이 되셨습니다!</p>
                  </div>
                  <div>지금부터 함께 어휘력을 키워보아요!</div>
                </div>
              </div>
              <div className="text-sm text-brandSubText">
                시작할 준비가 되셨나요? [어휘릭]과 함께 즐겁고 유익한 학습
                여정을 시작해보세요!
              </div>
            </section>
          </ActivityHeader>
          <section className="w-full grow">
            <div className="flex h-full items-center">
              <BlueCharacter size={"50%"} />
            </div>
          </section>
          <ActivityFooter>
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
