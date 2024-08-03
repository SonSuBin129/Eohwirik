import EveryDayLanguageImage from "@/assets/EveryDayLanguage.png";

const EveryDayLanguage = () => {
  return (
    <div className="itmes-center flex justify-center">
      <img
        src={EveryDayLanguageImage}
        className="h-[199px] w-auto"
        loading="lazy"
        alt="everyday"
      />
    </div>
  );
};

export default EveryDayLanguage;
