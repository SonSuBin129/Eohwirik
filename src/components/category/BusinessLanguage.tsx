import BusinessLanguageImage from "@/assets/BusinessLanguage.png";

const BusinessLanguage = () => {
  return (
    <div className="itmes-center flex justify-center">
      <img
        src={BusinessLanguageImage}
        className="h-[199px] w-auto"
        loading="lazy"
        alt="business"
      />
    </div>
  );
};

export default BusinessLanguage;
