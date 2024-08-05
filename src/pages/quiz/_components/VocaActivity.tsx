import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BackIcon from "@/components/Icons/BackIcon";

import { useManageUser } from "@/hooks/useManageUser";
import { useQueryAllQuizzes } from "@/hooks/queries/useQueryAllQuizzes";

import { ScrapWordDTO } from "@/types/quizType";

import VocaItem from "./VocaItem";
import NextButton from "./NextButton";
import { Activity, ActivityFooter, ActivityContent } from "./Activity";

type VocaParams = {
  chapterId: number;
  chapterName: string;
};

const VocaActivity: ActivityComponentType<VocaParams> = ({ params }) => {
  const { chapterId, chapterName } = params;

  const { userLevel } = useManageUser();
  const OldUserLevel = localStorage.getItem("OldUserLevel");

  const userEmail = localStorage.getItem("userEmail");
  const { data: scrapQuizList } = useQueryAllQuizzes({
    userEmail: userEmail!,
    chapterId: chapterId,
  });

  const nextActivityName =
    userLevel !== OldUserLevel ? "LevelUpActivity" : "MainActivity";

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
            <section className="flex flex-col gap-[23px] py-4">
              {scrapQuizList.map((item: ScrapWordDTO) => (
                <VocaItem
                  key={item.id}
                  id={item.id}
                  isScrap={item.scrap}
                  word={item.word}
                  wordClass={item.wordClass}
                  description={item.description}
                  example={item.example}
                />
              ))}
            </section>
          </main>
          <ActivityFooter>
            <NextButton
              activityName={nextActivityName as never}
              chapterId={chapterId}
              chapterName={chapterName}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default VocaActivity;
