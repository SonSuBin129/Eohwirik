import AcademyCategoryImage from "@/assets/AcademyCategory.png";

const AcademyCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={AcademyCategoryImage}
        className="h-[70px] w-auto"
        loading="lazy"
      />
    </div>
  );
};

export default AcademyCategory;
