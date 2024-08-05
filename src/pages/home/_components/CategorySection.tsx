import { useMemo } from "react";

import TransitionalCategory from "@/components/category/TransitionalCategory";
import NewsCategory from "@/components/category/NewsCategory";
import LegalCategory from "@/components/category/LegalCategory";
import EveryDayCategory from "@/components/category/EveryDayCategory";
import BusinessCategory from "@/components/category/BusinessCategory";
import AcademyCategory from "@/components/category/AcademyCategory";

import { useQueryCategoryList } from "@/hooks/queries/useQueryCategoryList";

import { useNavigate } from "@/router";

const categoryImages = [
  {
    id: 1,
    CategoryImage: EveryDayCategory,
    categoryExplain1: "일상 생활에서 자주",
    categoryExplain2: "사용하는 단어와 표현",
  },
  {
    id: 2,
    CategoryImage: BusinessCategory,
    categoryExplain1: "직장에서 꼭 필요한",
    categoryExplain2: "어휘와 표현",
  },
  {
    id: 3,
    CategoryImage: TransitionalCategory,
    categoryExplain1: "사자성어, 한자어,",
    categoryExplain2: "순우리말",
  },
  {
    id: 4,
    CategoryImage: AcademyCategory,
    categoryExplain1: "연구와 논의에서",
    categoryExplain2: "사용되는 전문용어",
  },
  {
    id: 5,
    CategoryImage: LegalCategory,
    categoryExplain1: "법적 문서와 논의에서",
    categoryExplain2: "사용되는 용어",
  },
  {
    id: 6,
    CategoryImage: NewsCategory,
    categoryExplain1: "뉴스에서 자주 쓰이는",
    categoryExplain2: "어휘와 표현",
  },
];

interface CategoryItemProps {
  categoryId: number;
  categoryName: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { categoryId, categoryName } = props;

  const navigate = useNavigate();

  const { CategoryImage, categoryExplain1, categoryExplain2 } = useMemo(() => {
    const category = categoryImages.find(item => item.id === categoryId);
    if (category) {
      return category;
    }
    return {
      CategoryImage: EveryDayCategory,
      categoryExplain1: "",
      categoryExplain2: "",
    };
  }, [categoryId]);

  const handleClick = () => {
    navigate("/quiz", { state: { categoryId, categoryName } });
  };

  return (
    <div
      onClick={handleClick}
      className="flex h-44 w-44 flex-col justify-end gap-[7px] rounded-[25px] border border-[#B2B3B4] px-[13px] py-3"
    >
      <CategoryImage />
      <div className="flex flex-col gap-0.5">
        <div className="text-xl font-bold">{categoryName}</div>
        <div className="text-[14px] font-medium leading-tight">
          <p>{categoryExplain1}</p>
          <p>{categoryExplain2}</p>
        </div>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const { data: categories } = useQueryCategoryList();

  return (
    <section className="flex w-full flex-col gap-[10px]">
      <div className="pl-px text-xl font-bold">카테고리별 어휘 학습</div>
      <section className="mx-auto grid grid-cols-2 grid-rows-3 gap-x-[9px] gap-y-2.5">
        {categories.map(({ id, category }) => (
          <CategoryItem key={id} categoryId={id} categoryName={category} />
        ))}
      </section>
    </section>
  );
};

export default CategorySection;
