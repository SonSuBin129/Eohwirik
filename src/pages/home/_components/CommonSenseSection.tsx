import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@ui/components/ui/carousel";

const CommonSenseSection = () => {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="-ml-1">
        <CarouselItem key={1} className="basis-2/3 pl-2">
          <div className="flex h-full items-center justify-center bg-brand text-center font-bold text-white">
            흠..테스트
          </div>
        </CarouselItem>
        <CarouselItem key={2} className="basis-2/3 pl-2">
          <div className="flex h-full items-center justify-center bg-brand text-center font-bold text-white">
            흠..테스트
          </div>
        </CarouselItem>
        <CarouselItem key={3} className="basis-2/3 pl-2">
          <div className="flex h-full items-center justify-center bg-brand text-center font-bold text-white">
            흠..테스트
          </div>
        </CarouselItem>
        <CarouselItem key={4} className="basis-2/3 pl-2">
          <div className="flex h-full items-center justify-center bg-brand text-center font-bold text-white">
            흠..테스트
          </div>
        </CarouselItem>
        <CarouselItem key={5} className="basis-2/3 pl-2">
          <div className="flex h-full items-center justify-center bg-brand text-center font-bold text-white">
            흠..테스트
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CommonSenseSection;
