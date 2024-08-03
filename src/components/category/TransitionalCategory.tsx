import TransitionalCategoryImage from "@/assets/TransitionalCategory.png";

const TransitionalCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={TransitionalCategoryImage}
        className="h-[70px] w-auto"
        loading="lazy"
      />
    </div>
  );
};

export default TransitionalCategory;
