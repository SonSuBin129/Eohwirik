import { useMemo } from "react";

import TransitionalLanguage from "@/components/category/TransitionalLanguage";
import NewsLanguage from "@/components/category/NewsLanguage";
import LegalLanguage from "@/components/category/LegalLanguage";
import EveryDayLanguage from "@/components/category/EveryDayLanguage";
import BusinessLanguage from "@/components/category/BusinessLanguage";
import AcademyLanguage from "@/components/category/AcademyLanguage";

const categoryCharacters = [
  {
    id: 1,
    categoryName: "일상 용어",
    CategoryComponent: EveryDayLanguage,
    backgroundColor: "#FFFCDD",
    categoryExplain1: "일상 생활에서 자주 쓰는 어휘를 배우고,",
    categoryExplain2: "다양한 상황에서 자연스럽게 표현해보세요!",
  },
  {
    id: 2,
    categoryName: "업무 용어",
    CategoryComponent: BusinessLanguage,
    backgroundColor: "#EFFFEE",
    categoryExplain1: "직장에서 꼭 필요한 어휘와 표현을 익히고,",
    categoryExplain2: "프로페셔널하게 소통해보세요!",
  },
  {
    id: 3,
    categoryName: "전통 어휘",
    CategoryComponent: TransitionalLanguage,
    backgroundColor: "#E4FFFF",
    categoryExplain1: "사자성어, 한자어, 순우리말을 재미있게 배우고,",
    categoryExplain2: "우리말의 깊이를 느껴보세요!",
  },
  {
    id: 4,
    categoryName: "학술 용어",
    CategoryComponent: AcademyLanguage,
    backgroundColor: "#DAF2FF",
    categoryExplain1: "연구와 논의에서 사용되는 전문용어를 배우고,",
    categoryExplain2: "논문 작성이나 학술 토론에 자신감을 가져보세요!",
  },
  {
    id: 5,
    categoryName: "법률 용어",
    CategoryComponent: LegalLanguage,
    backgroundColor: "#FFF6F6",
    categoryExplain1: "법률 용어를 쉽게 배우고,",
    categoryExplain2: "계약서나 법률 문서를 더 잘 이해해보세요!",
  },
  {
    id: 6,
    categoryName: "뉴스 용어",
    CategoryComponent: NewsLanguage,
    backgroundColor: "#EEEFFF",
    categoryExplain1: "일상 생활에서 자주 쓰는 어휘를 배우고,",
    categoryExplain2: "다양한 상황에서 자연스럽게 표현해보세요!",
  },
];

export const useManageCategory = (categoryId: number) => {
  const {
    backgroundColor,
    CategoryComponent,
    categoryExplain1,
    categoryExplain2,
  } = useMemo(() => {
    const category = categoryCharacters.find(cat => cat.id === categoryId);
    return (
      category || {
        id: -1,
        backgroundColor: "#ffffff",
        CategoryComponent: EveryDayLanguage,
        categoryExplain1: "",
        categoryExplain2: "",
      }
    );
  }, [categoryId]);

  return {
    backgroundColor,
    CategoryComponent,
    categoryExplain1,
    categoryExplain2,
  };
};
