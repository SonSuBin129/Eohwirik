import NewsLanguageImage from "@/assets/NewsLanguage.png";

const NewsLanguage = () => {
  return (
    <div className="itmes-center flex justify-center">
      <img
        src={NewsLanguageImage}
        className="h-[206px] w-auto"
        loading="lazy"
        alt="news"
      />
    </div>
  );
};

export default NewsLanguage;
