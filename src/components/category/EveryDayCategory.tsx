import EveryDayCategoryImage from "@/assets/EveryDayCategory.png";

const EveryDayCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={EveryDayCategoryImage}
        className="h-[70px] w-auto"
        loading="lazy"
      />
    </div>
  );
};

export default EveryDayCategory;
