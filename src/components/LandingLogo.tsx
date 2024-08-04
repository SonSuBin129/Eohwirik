import landingLogoImage from "@/assets/landingLogo.png";

const LandingLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={landingLogoImage}
        className="h-auto w-1/4"
        loading="lazy"
        alt="로고"
      />
    </div>
  );
};

export default LandingLogo;
