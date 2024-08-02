import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NumberIcon from "@/components/Icons/NumberIcon";
import BackIcon from "@/components/Icons/BackIcon";

import {
  Activity,
  ActivityContent,
  ActivityHeader,
  ActivityFooter,
} from "./Activity";

import QuizAnswerItem from "@/pages/quiz/_components/QuizAnswerItem";
import NextButton from "@/pages/quiz/_components/NextButton";

type QuizAnswerParams = {
  chapterId: number;
  chapterName: string;
  quizId: number;
  quizAnswer: string;
  step: number;
};

const QuizAnswerActivity: ActivityComponentType<QuizAnswerParams> = ({
  params,
}) => {
  const { chapterId, chapterName, quizId, quizAnswer, step } = params;

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
              <NumberIcon number={1} />
              <h1 className="flex gap-2 text-2xl font-bold">
                <div>학력/경력을</div>
                <div className="text-brand">[&emsp;&emsp;&emsp;]</div>
                <div>한 의원</div>
              </h1>
            </ActivityHeader>
            <section className="flex flex-col gap-[23px]">
              <QuizAnswerItem
                isAnswer={true}
                word={"날조"}
                wordClass={"품사"}
                description={"예시문장"}
                example="예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문"
                explanation="설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명"
              />
              <QuizAnswerItem
                word={"날조"}
                wordClass={"품사"}
                description={"예시문장"}
                example="예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문"
              />
              <QuizAnswerItem
                word={"날조"}
                wordClass={"품사"}
                description={"예시문장"}
                example="예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문"
              />
              <div>chapterId: {chapterId}</div>
              <div>chapterName: {chapterName}</div>
              <div>quizId: {quizId}</div>
              <div>quizAnswer: {quizAnswer}</div>
            </section>
          </main>
          <ActivityFooter>
            <NextButton
              activityName={
                step >= 7
                  ? ("CompleteActivity" as never)
                  : ("QuizActivity" as never)
              }
              params={{
                step: step + 1,
              }}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizAnswerActivity;
