import { useLocation } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import Nav from "@/components/Nav";

import { useManageCommonSense } from "@/hooks/useManageCommonSense";

import NextButton from "./NextButton";
import MainSection from "./MainSection";

const MainActivity: ActivityComponentType = () => {
  //오늘의 어휘 id (api 연결용)
  const location = useLocation();
  const { state } = location;
  const { commonId } = state;

  const { image, title1, title2, explain, class1, class2, backgroundColor } =
    useManageCommonSense(commonId, "big");

  const itemStyle = {
    backgroundColor: backgroundColor.startsWith("linear-gradient")
      ? undefined
      : backgroundColor, // 단일 색상인 경우 적용
    backgroundImage: backgroundColor.startsWith("linear-gradient")
      ? backgroundColor
      : undefined, // 그라데이션인 경우 적용
  };

  return (
    <AppScreen>
      <main style={itemStyle} className="h-full">
        <header className="sticky left-0 top-0 z-50 py-2">
          <Nav backLink="/home" NavTitle="매일 어휘 한 조각" />
        </header>
        <main
          className="flex px-4 pt-7"
          style={{ height: "calc(100% - 112px)" }}
        >
          <MainSection
            image={image}
            title1={title1}
            title2={title2}
            explain={explain}
            class1={class1}
            class2={class2}
          />
        </main>
        <footer className="sticky bottom-0 z-50">
          <NextButton
            activityName={"ContentActivity" as never}
            commonId={commonId}
          />
        </footer>
      </main>
    </AppScreen>
  );
};

export default MainActivity;
