import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@ui/components/ui/carousel";

import { useQueryCommonList } from "@/hooks/queries/useQueryCommonList";

import CommonSenseItem from "./CommonSenseItem";

const CommonSenseSection = () => {
  const { data: commonList } = useQueryCommonList();

  return (
    <section className="flex w-full flex-col gap-[10px]">
      <div className="pl-px text-xl font-bold">휘릭! 매일 어휘 한 조각</div>
      <Carousel className="w-full max-w-full">
        <CarouselContent className="-ml-4">
          {commonList.map(({ id, date }) => (
            <CarouselItem key={id} className="basis-5/6 pl-4">
              <CommonSenseItem id={id} date={date} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CommonSenseSection;
