import { useLocation } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import Nav from "@/components/Nav";

import { useManageCategory } from "@/hooks/useManageCategory";
import { useQueryCategoryLearningRate } from "@/hooks/queries/useQueryCategoryLearningLate";

import ChapterListSection from "./ChapterListSection";
import CategoryHeader from "./CategoryHeader";

const MainActivity: ActivityComponentType = () => {
  const location = useLocation();
  const { state } = location;
  const { categoryId, categoryName } = state;
  localStorage.setItem("categoryId", categoryId);

  const { data: learningData } = useQueryCategoryLearningRate(categoryId);

  const learningTotal = learningData.전체;
  const learningLearned = learningData.학습;

  const {
    backgroundColor,
    CategoryComponent,
    categoryExplain1,
    categoryExplain2,
  } = useManageCategory(categoryId);

  return (
    <AppScreen>
      <header
        className="sticky left-0 top-0 z-10 py-2"
        style={{ backgroundColor }}
      >
        <Nav backLink="/home" />
      </header>
      <main className="flex h-full flex-col items-center justify-start gap-10">
        <CategoryHeader
          backgroundColor={backgroundColor}
          categoryName={categoryName}
          categoryExplain1={categoryExplain1}
          categoryExplain2={categoryExplain2}
          CategoryComponent={CategoryComponent}
          learningLearned={learningLearned}
          learningTotal={learningTotal}
        />
        <section className="flex w-full flex-col gap-4 px-4">
          <div className="text-xl font-bold">어휘 학습</div>

          <ChapterListSection categoryId={categoryId} />
        </section>
      </main>
    </AppScreen>
  );
};

export default MainActivity;
