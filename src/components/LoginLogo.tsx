import loginLogoImage from "@/assets/loginLogo.png";

const LoginLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={loginLogoImage}
        className="h-auto w-1/4"
        loading="lazy"
        alt="로고"
      />
    </div>
  );
};

export default LoginLogo;
