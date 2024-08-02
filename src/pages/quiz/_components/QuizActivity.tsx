import { useState, useEffect } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NumberIcon from "@/components/Icons/NumberIcon";
import BackIcon from "@/components/Icons/BackIcon";

import { Activity, ActivityContent, ActivityHeader } from "./Activity";

import QuizItem from "@/pages/quiz/_components/QuizItem";

type QuizParams = {
  chapterId: number;
  chapterName: string;
};

const QuizActivity: ActivityComponentType<QuizParams> = ({ params }) => {
  const { chapterId, chapterName } = params;
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(
    null,
  );

  const handleQuizItemClick = (index: number) => {
    setSelectedQuizIndex(index);
  };

  // 상태가 변경될 때마다 컴포넌트가 리렌더링 되도록 하기 위해 useEffect 사용
  useEffect(() => {}, [selectedQuizIndex]);

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
        <ActivityContent className="px-4">
          <ActivityHeader>
            <NumberIcon number={1} />
            <h1 className="flex gap-2 text-2xl font-bold">
              <div>학력/경력을</div>
              <div className="text-brand">[&emsp;&emsp;&emsp;]</div>
              <div>한 의원</div>
            </h1>
          </ActivityHeader>
          <section>
            <section className="flex flex-col gap-2 pb-48">
              {["예시1", "예시2", "예시3", "예시4"].map((title, index) => (
                <QuizItem
                  key={index}
                  title={title}
                  isAnswer={index === 0} // 예시로 첫 번째 항목을 정답으로 설정
                  isSelected={selectedQuizIndex === index}
                  onClick={() => handleQuizItemClick(index)} // 클릭 핸들러 전달
                  disabled={selectedQuizIndex !== null} // 한 개라도 선택되면 비활성화
                  chapterId={chapterId}
                  chapterName={chapterName}
                />
              ))}
            </section>
          </section>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizActivity;
