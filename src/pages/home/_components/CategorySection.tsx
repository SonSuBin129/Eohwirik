interface CategoryItemProps {
  title: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { title } = props;
  return (
    <div className="flex h-44 w-44 items-center justify-center text-center text-xl font-bold">
      {title}
    </div>
  );
};

const CategorySection = () => {
  return (
    <section className="flex w-full flex-col gap-1">
      <div className="pl-px text-xl font-bold">카테고리별 어휘 학습</div>
      <section className="mx-auto grid grid-cols-2 grid-rows-3 gap-x-[9px] gap-y-2.5">
        <CategoryItem title="일상 어휘" />
        <CategoryItem title="업무 어휘" />
        <CategoryItem title="전문 어휘" />
        <CategoryItem title="법률 어휘" />
        <CategoryItem title="뉴스 어휘" />
        <CategoryItem title="학술 어휘" />
      </section>
    </section>
  );
};

export default CategorySection;
