import LegalLanguageImage from "@/assets/LegalLanguage.png";

const LegalLanguage = () => {
  return (
    <div className="itmes-center flex justify-center">
      <img
        src={LegalLanguageImage}
        className="h-[198px] w-auto"
        loading="lazy"
        alt="legal"
      />
    </div>
  );
};

export default LegalLanguage;
