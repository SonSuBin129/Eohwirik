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
  return (
    <section className="flex h-full w-full flex-col justify-between">
      <div className="flex flex-col gap-[14px]">
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
      <div className="w-full pb-8">
        <img src={image} loading="lazy" />
      </div>
    </section>
  );
};

export default MainSection;
