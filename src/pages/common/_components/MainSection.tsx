import ClassComponent from "@/components/ClassComponent";

interface MainSectionProps {
  image: string;
  title1: string;
  title2: string;
  explain: string;
  class1: string;
  class2: string;
}

const MainSection = (props: MainSectionProps) => {
  const { image, title1, title2, explain, class1, class2 } = props;

  // 조건에 따른 클래스명 설정
  // 조건에 따른 클래스명 설정
  let divClassName = image.includes("Foreign")
    ? "relative flex flex-grow justify-evenly overflow-hidden"
    : "relative flex flex-grow justify-end overflow-hidden";

  // 'Apple'이 포함된 경우 -mr-3 추가
  if (image.includes("Apple")) {
    divClassName += " -mr-5";
  }

  return (
    <section className="flex h-full w-full flex-col justify-between">
      <div className="z-30 flex flex-1 flex-col gap-[14px]">
        <div className="flex gap-2">
          <ClassComponent title={class1} />
          <ClassComponent title={class2} />
        </div>
        <h1 className="text-[36px] font-extrabold leading-tight">
          {title1}
          <br />
          {title2}
        </h1>
        <p className="text-base font-extrabold text-brandSubText">{explain}</p>
      </div>
      <div className={divClassName}>
        <img
          src={image}
          loading="lazy"
          className="h-full w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default MainSection;
