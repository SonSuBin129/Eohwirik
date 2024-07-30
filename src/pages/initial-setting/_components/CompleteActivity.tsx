import BackIcon from "@/components/BackIcon";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";
import NextStepButton from "@/pages/initial-setting/_components/NextStepButton";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import NumberIcon from "@/components/NumberIcon";
import Characters from "@/components/Characters";

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
              <div className="flex flex-col gap-11 text-2xl font-bold">
                <div>
                  <p className="inline-block text-brand">입학 준비</p>
                  <p className="inline-block">가 완료되었어요!</p>
                </div>
                <div>
                  <div>
                    <p className="inline-block">그럼 이제&nbsp;</p>
                    <p className="inline-block text-brand">[{nickname}]님</p>
                    <p className="inline-block">의</p>
                  </div>
                  <div>
                    <p className="inline-block text-brand">어휘력 점검</p>
                    <p className="inline-block">을 시작할게요.</p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-brandSubText">
                여러분의 지식 건강을 바탕으로 맞춤형 학습 경로를 제공합니다.
                [앱이름]이 단계별로 성장할 수 있도록 도와드릴게요!
              </div>
            </section>
          </ActivityHeader>
          <section className="w-full grow">
            <div className="flex h-full items-center">
              <Characters size={"90%"} />
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
