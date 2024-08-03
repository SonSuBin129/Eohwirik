import BusinessCategoryImage from "@/assets/BusinessCategory.png";

const BusinessCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={BusinessCategoryImage}
        className="h-[70px] w-auto"
        loading="lazy"
      />
    </div>
  );
};

export default BusinessCategory;
