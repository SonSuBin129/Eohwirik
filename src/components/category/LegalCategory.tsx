import LegalCategoryImage from "@/assets/LegalCategory.png";

const LegalCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={LegalCategoryImage}
        className="h-[70px] w-auto"
        loading="lazy"
      />
    </div>
  );
};

export default LegalCategory;
