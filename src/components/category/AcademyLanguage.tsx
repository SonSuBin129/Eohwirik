import AcademyLanguageImage from "@/assets/AcademyLanguage.png";

const AcademyLanguage = () => {
  return (
    <div className="itmes-center flex justify-center">
      <img
        src={AcademyLanguageImage}
        className="h-[209px] w-auto"
        loading="lazy"
        alt="academy"
      />
    </div>
  );
};

export default AcademyLanguage;
