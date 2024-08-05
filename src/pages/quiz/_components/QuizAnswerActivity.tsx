import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";
import NumberIcon from "@/components/Icons/NumberIcon";
import BackIcon from "@/components/Icons/BackIcon";

import { useQueryQuizAnswer } from "@/hooks/queries/useQueryQuizAnswer";

import { QuizDTO, WordDTO } from "@/types/quizType";

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
  step: number;
  quizList: QuizDTO[];
};

const QuizAnswerActivity: ActivityComponentType<QuizAnswerParams> = ({
  params,
}) => {
  const { chapterId, chapterName, step, quizList } = params;

  const quiz = quizList.find(q => q.id === step);
  const { data: quizAnswer } = useQueryQuizAnswer(step);

  // 퀴즈 답안 항목 배열 생성
  const answerItems = [
    quizAnswer?.answerWord,
    quizAnswer?.wrongWord1,
    quizAnswer?.wrongWord2,
    quizAnswer?.wrongWord3,
  ].filter(Boolean);

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
            <section className="flex flex-col gap-[50px]">
              <ProgressBar percent={step / quizList.length} />
              <ActivityHeader>
                <NumberIcon number={step} />
                <h1 className="text-2xl font-bold">
                  {quiz?.question1}
                  <span className="text-brand">
                    [&emsp;{quiz?.answer}&emsp;]
                  </span>
                  {quiz?.question2}
                </h1>
              </ActivityHeader>
            </section>
            <section className="flex flex-col gap-[23px] py-3">
              {answerItems.map((item, index) => (
                <QuizAnswerItem
                  key={index}
                  isAnswer={item === quizAnswer?.answerWord}
                  word={item.word}
                  wordClass={item.wordClass}
                  description={item.description}
                  example={item.example}
                  explanation={
                    (item as WordDTO).explanation
                      ? (item as WordDTO).explanation
                      : undefined
                  }
                />
              ))}
            </section>
          </main>
          <ActivityFooter>
            <NextButton
              activityName={
                step >= quizList.length
                  ? ("CompleteActivity" as never)
                  : ("QuizActivity" as never)
              }
              chapterId={chapterId}
              chapterName={chapterName}
              params={{
                step: step + 1,
                quizList: quizList,
              }}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizAnswerActivity;
