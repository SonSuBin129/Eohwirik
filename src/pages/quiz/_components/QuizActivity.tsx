import { useState, useMemo } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NumberIcon from "@/components/Icons/NumberIcon";
import BackIcon from "@/components/Icons/BackIcon";

import { QuizDTO } from "@/types/quizType";

import { useQuizFlow } from "@/utils/useQuizFlow";

import QuizItem from "./QuizItem";
import NextButton from "./NextButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

type QuizParams = {
  chapterId: number;
  chapterName: string;
  quizList: QuizDTO[];
  step: number;
};

const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { chapterId, chapterName, quizList, step } = params;
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(
    null,
  );
  const [buttonCheck, setButtonCheck] = useState(false); //버튼으로 정답확인을 했는가?
  const [buttonLoading, setButtonLoading] = useState(false); // 버튼 로딩 상태 추가

  const quiz = quizList.find(q => q.id === step);

  const shuffledAnswers = useMemo(() => {
    const answers = [
      quiz?.answer,
      quiz?.wrongAnswer1,
      quiz?.wrongAnswer2,
      quiz?.wrongAnswer3,
    ].filter(answer => answer !== undefined);
    return shuffleArray(answers);
  }, [quiz]);

  const handleQuizItemClick = (index: number) => {
    setSelectedQuizIndex(index);
  };

  const { push } = useQuizFlow();
  const handleNextButtonClick = () => {
    if (selectedQuizIndex === null) return; // 선택된 항목이 없으면 아무 것도 하지 않음

    setButtonCheck(true);
    setButtonLoading(true);
    setTimeout(() => {
      // QuizAnswerActivity로 이동
      push("QuizAnswerActivity", {
        chapterId,
        chapterName,
        step,
        quizList,
      });
      setButtonCheck(false);
      setButtonLoading(false);
    }, 2000); // 2초 후에 QuizAnswerActivity로 이동
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
        title: <div className="text-xl font-bold">{chapterName}</div>,
      }}
    >
      <Activity>
        <ActivityContent>
          <main className="flex h-full flex-col justify-between px-4">
            <ActivityHeader>
              <NumberIcon number={step} />
              <h1 className="flex text-2xl font-bold">
                <div>{quiz?.question1}</div>
                <div className="text-brand">[&emsp;&emsp;&emsp;]</div>
                <div>{quiz?.question2}</div>
              </h1>
            </ActivityHeader>
            <section className="pb-48">
              <section className="flex flex-col gap-2">
                {shuffledAnswers.map((title, index) => (
                  <QuizItem
                    key={index}
                    title={title}
                    isAnswer={title === quiz?.answer}
                    isSelected={selectedQuizIndex === index}
                    onClick={() => handleQuizItemClick(index)}
                    buttonCheck={buttonCheck}
                  />
                ))}
              </section>
            </section>
          </main>
          <ActivityFooter>
            <NextButton
              activityName={"QuizAnswerActivity" as never}
              chapterId={chapterId}
              chapterName={chapterName}
              disabled={selectedQuizIndex === null}
              onClick={handleNextButtonClick}
              isLoading={buttonLoading}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
