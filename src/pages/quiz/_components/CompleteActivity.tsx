import { useEffect, useState } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ProgressBar from "@/components/ProgressBar";
import CompleteIcon from "@/components/Icons/CompleteIcon";
import BackIcon from "@/components/Icons/BackIcon";

import { useMutationCompleteQuiz } from "@/hooks/mutation/useMutationCompleteQuiz";

import { useQuizFlow } from "@/utils/useQuizFlow";

import {
  Activity,
  ActivityHeader,
  ActivityFooter,
  ActivityContent,
} from "./Activity";

import NextButton from "@/pages/quiz/_components/NextButton";
import TransitionalComplete from "@/assets/TransitionalComplete.png";
import NewsComplete from "@/assets/NewsComplete.png";
import LegalComplete from "@/assets/LegalComplete.png";
import EveryDayComplete from "@/assets/EveryDayComplete.png";
import BusinessComplete from "@/assets/BusinessComplete.png";
import AcademyComplete from "@/assets/AcademyComplete.png";

type CompleteParams = {
  chapterId: number;
  chapterName: string;
};

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { chapterId, chapterName } = params;
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

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

  const { push } = useQuizFlow();
  const handleNext = () => {
    setIsLoading(true); // 로딩 시작
    push("VocaActivity", {
      chapterId: chapterId,
      chapterName: chapterName,
    });
  };

  const categoryId = localStorage.getItem("categoryId");

  const images = [
    { id: 1, img: EveryDayComplete },
    { id: 2, img: BusinessComplete },
    { id: 3, img: TransitionalComplete },
    { id: 4, img: AcademyComplete },
    { id: 5, img: LegalComplete },
    { id: 6, img: NewsComplete },
  ];

  useEffect(() => {
    if (categoryId) {
      const image = images.find(image => image.id.toString() === categoryId);
      if (image) {
        setImageSrc(image.img);
      }
    }
  }, [categoryId]);

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
              <ProgressBar percent={1} />
              <ActivityHeader>
                <CompleteIcon />
                <section className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-8">
                    <div className="text-2xl font-bold">
                      <p className="text-brand">수고하셨습니다!</p>
                      <div>
                        <p className="inline-block text-brand">
                          [{chapterName}]
                        </p>
                        <p className="inline-block">&nbsp;학습을 완료했어요!</p>
                      </div>
                    </div>
                    <div className="text-sm text-brandSubText">
                      [어휘릭]과 함께 계속 어휘력을 향상시켜보세요!
                    </div>
                  </div>
                </section>
              </ActivityHeader>
            </section>
            <div className="flex w-full items-center justify-center">
              {imageSrc && (
                <img
                  src={imageSrc}
                  className="w-[361]"
                  loading="lazy"
                  alt="Complete"
                />
              )}
            </div>
          </main>
          <ActivityFooter>
            <NextButton
              activityName={"VocaActivity" as never}
              chapterId={chapterId}
              chapterName={chapterName}
              isLoading={isLoading}
              onClick={handleNext}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;
