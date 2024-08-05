import { useMemo } from "react";

import SecondMoney from "@/assets/commonknowledge/SecondMoney.png";
import SecondForeign from "@/assets/commonknowledge/SecondForeign.png";
import SecondBusiness from "@/assets/commonknowledge/SecondBusiness.png";
import SecondApple from "@/assets/commonknowledge/SecondApple.png";
import FirstMoney from "@/assets/commonknowledge/FirstMoney.png";
import FirstForeign from "@/assets/commonknowledge/FirstForeign.png";
import FirstBusiness from "@/assets/commonknowledge/FirstBusiness.png";
import FirstApple from "@/assets/commonknowledge/FirstApple.png";
import CompleteMoney from "@/assets/commonknowledge/CompleteMoney.png";
import CompleteForeign from "@/assets/commonknowledge/CompleteForeign.png";
import CompleteBusiness from "@/assets/commonknowledge/CompleteBusiness.png";
import CompleteApple from "@/assets/commonknowledge/CompleteApple.png";
import BigMoney from "@/assets/commonknowledge/BigMoney.png";
import BigForeign from "@/assets/commonknowledge/BigForeign.png";
import BigBusiness from "@/assets/commonknowledge/BigBusiness.png";
import BigApple from "@/assets/commonknowledge/BigApple.png";

const commonKnowledges = [
  {
    id: 1,
    firstImage: FirstApple,
    secondImage: SecondApple,
    completeImage: CompleteApple,
    bigImage: BigApple,
    title1: "'심심한 사과'가",
    title2: "\u00A0지루한 사과?", // \u00A0는 공백을 의미하는 Unicode
    explain: "일상 속 헷갈리는 관용구, 한 방에 정리!",
    class1: "일상",
    class2: "관용구",
    backgroundColor: "#FFEBE7",
  },
  {
    id: 2,
    firstImage: FirstMoney,
    secondImage: SecondMoney,
    completeImage: CompleteMoney,
    bigImage: BigMoney,
    title1: "배임? 횡령? 같은 듯",
    title2: "다른 어휘 파헤치기",
    explain: "뉴스에서 많이 나오는 법률 용어",
    class1: "법률",
    class2: "뉴스",
    backgroundColor: "#DCEDE6",
  },
  {
    id: 3,
    firstImage: FirstBusiness,
    secondImage: SecondBusiness,
    completeImage: CompleteBusiness,
    bigImage: BigBusiness,
    title1: "회사원 필수",
    title2: "직장 용어 모음 zip",
    explain: "회사원이라면 알아야할 용어 정리",
    class1: "업무",
    class2: "일상",
    backgroundColor: "#DAF2FF",
  },
  {
    id: 4,
    firstImage: FirstForeign,
    secondImage: SecondForeign,
    completeImage: CompleteForeign,
    bigImage: BigForeign,
    title1: "한국인도 헷갈리는",
    title2: "한국어, 완벽 이해하자!",
    explain: "자주 틀리는 맞춤법 총정리",
    class1: "일상",
    class2: "맞춤법",
    backgroundColor: "linear-gradient(180deg, #D2C9D6 50%, #543C3C 100%)",
  },
];

const defaultValues = commonKnowledges.find(k => k.id === 1) || {
  id: 1,
  firstImage: "",
  secondImage: "",
  completeImage: "",
  bigImage: "",
  title1: "",
  title2: "",
  explain: "",
  class1: "",
  class2: "",
  backgroundColor: "",
};

export const useManageCommonSense = (id: number, keyword: string) => {
  const knowledge = useMemo(() => {
    return commonKnowledges.find(k => k.id === id) || defaultValues;
  }, [id]);

  const image = useMemo(() => {
    switch (keyword) {
      case "first":
        return knowledge.firstImage;
      case "second":
        return knowledge.secondImage;
      case "complete":
        return knowledge.completeImage;
      case "big":
        return knowledge.bigImage;
      default:
        return knowledge.firstImage;
    }
  }, [knowledge, keyword]);

  return {
    image,
    title1: knowledge.title1,
    title2: knowledge.title2,
    explain: knowledge.explain,
    class1: knowledge.class1,
    class2: knowledge.class2,
    backgroundColor: knowledge.backgroundColor,
  };
};
