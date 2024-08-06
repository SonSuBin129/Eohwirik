import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@ui/components/ui/carousel";

import { useQueryCommonList } from "@/hooks/queries/useQueryCommonList";

import CommonSenseItem from "./CommonSenseItem";

const CommonSenseSection = () => {
  const { data: commonList } = useQueryCommonList();
  console.log(commonList);

  return (
    <section className="flex w-full flex-col gap-[10px]">
      <div className="pl-[17px] text-xl font-bold">휘릭! 매일 어휘 한 조각</div>
      <Carousel className="w-full max-w-full">
        <CarouselContent className="ml-0 mr-4">
          {commonList && commonList.length > 0 ? (
            commonList.map(({ id, date }) => (
              <CarouselItem key={id} className="basis-[310px] pl-4">
                <CommonSenseItem id={id} date={date} />
              </CarouselItem>
            ))
          ) : (
            <div className="flex w-full justify-center pl-4">
              오늘의 어휘가 없어요 😓
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CommonSenseSection;
