import PassIconImage from "@/assets/PassIcon.png";

const PassIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={PassIconImage}
        className="h-auto w-[18px]"
        loading="lazy"
        alt="PassIcon"
      />
    </div>
  );
};

export default PassIcon;
