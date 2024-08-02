import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";
import Nav from "@/components/Nav";
import DountChart from "@/components/DountChart";

import ChapterComponent from "@/pages/quiz/_components/ChapterComponent";

// TODO: API 연결 후 학습률 & 학습 단어수 계산해서 적용
const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav backLink="/home" />
      </header>
      <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
        <section className="flex w-full flex-col">
          quizPage임
          <DountChart percent={0.65} />
          <ProgressBar percent={70} />
        </section>
        <section className="flex w-full flex-col gap-4">
          <div className="text-xl font-bold">어휘 학습</div>
          <ChapterComponent
            isLearned={true}
            chapterId={1}
            chapterName="어쩌구저쩌구"
          />
          <ChapterComponent
            isLearned={false}
            chapterId={2}
            chapterName="어쩌구저쩌구2"
          />
        </section>
      </main>
    </AppScreen>
  );
};

export default MainActivity;
