import { ActivityComponentType } from "@stackflow/react";

import {
  Activity,
  ActivityContent,
  ActivityHeader,
  ActivityFooter,
} from "./Activity";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import NextStepButton from "./NextStepButton";
import BackIcon from "@/components/BackIcon";
import NumberIcon from "@/components/NumberIcon";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { FormType } from "@/hooks/useInitialSettingForm";

type CategoryParams = {
  params: {
    step: number;
    form: FormType;
  };
};

const CategoryActivity: React.FC<CategoryParams> = ({ params }) => {
  const { form, step } = params;

  console.log("form 확인1:", form.control._formValues);

  console.log("CategoryActivity form:", form);
  //    form.setValue("categories", ["helloo", "suybin"]);

  const [categories, setCategories] = useState<string[]>([]);
  const [isPass, setIsPass] = useState(false);

  const handleCategoryToggle = (title: string) => {
    setCategories(prevCategories => {
      const newCategories = prevCategories.includes(title)
        ? prevCategories.filter(category => category !== title)
        : [...prevCategories, title];

      setIsPass(newCategories.length > 0);

      return newCategories;
    });
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
      }}
    >
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <NumberIcon number={step} />
            <section className="flex flex-col gap-1">
              <div className="text-2xl font-bold">
                <p className="inline-block text-brand">취약 카테고리</p>
                <p className="inline-block">를 선택해주세요!</p>
              </div>
              <div className="text-sm text-brandSubText">
                어려움을 느끼는 주제를 선택해주세요. 이 주제에 대한 기초적인
                설명과 단계별 학습 자료를 제공해 드립니다.
              </div>
            </section>
          </ActivityHeader>
          <section className="w-full grow">
            <div className="grid grid-cols-2 grid-rows-4 gap-x-3 gap-y-[6px] py-5">
              {[
                "어휘",
                "역사",
                "사회/경제",
                "의학/건강",
                "법률/제도",
                "과학",
              ].map(title => (
                <CategoryItem
                  key={title}
                  title={title}
                  isSelected={categories.includes(title)}
                  onClick={() => handleCategoryToggle(title)}
                />
              ))}
            </div>
          </section>
          <ActivityFooter>
            <NextStepButton
              activityName={"CompleteActivity" as never}
              disabled={!isPass}
              params={{
                step: step + 1,
                form,
              }}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CategoryActivity;
