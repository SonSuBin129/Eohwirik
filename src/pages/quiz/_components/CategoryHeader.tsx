import ProgressBar from "@/components/ProgressBar";
import DoughnutChart from "@/components/DoughnutChart";

interface CategoryHeaderProps {
  backgroundColor: string;
  categoryName: string;
  categoryExplain1: string;
  categoryExplain2: string;
  CategoryComponent: React.ComponentType;
  learningLearned: number;
  learningTotal: number;
}

const CategoryHeader = (props: CategoryHeaderProps) => {
  const {
    backgroundColor,
    categoryName,
    categoryExplain1,
    categoryExplain2,
    CategoryComponent,
    learningLearned,
    learningTotal,
  } = props;
  const learningRate = learningLearned / learningTotal;

  return (
    <section
      className="h-90 relative flex h-[330px] w-full flex-col justify-between px-4 pb-8 pt-5"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col gap-[7px]">
        <div className="flex w-full justify-between">
          <h1 className="text-[32px] font-bold">{categoryName}</h1>
          <DoughnutChart percent={learningRate} />
        </div>
        <div className="text-sm font-medium leading-tight text-brandSubText">
          <p>{categoryExplain1}</p>
          <p>{categoryExplain2}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="absolute bottom-[37px] left-4 z-30 flex w-fit gap-1 font-extrabold">
            <h1 className="self-end text-[75px] leading-[75px] text-[#547AFF]">
              {learningLearned}
            </h1>
            <p className="mb-[11px] self-end text-base text-brandSubText">
              /{learningTotal}개
            </p>
          </div>
          <div className="absolute bottom-[50px] right-4">
            <CategoryComponent />
          </div>
        </div>
        <ProgressBar percent={learningRate} />
      </div>
    </section>
  );
};

export default CategoryHeader;
