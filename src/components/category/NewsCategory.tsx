import NewsCategoryImage from "@/assets/NewsCategory.png";

const NewsCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={NewsCategoryImage} className="h-[70px] w-auto" loading="lazy" />
    </div>
  );
};

export default NewsCategory;
