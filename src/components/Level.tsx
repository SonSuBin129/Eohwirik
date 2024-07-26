import LevelIconImage from "@/assets/Level.png";

const LevelIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={LevelIconImage}
        className="h-auto w-[21px]"
        loading="lazy"
        alt="LevelIcon"
      />
    </div>
  );
};

export default LevelIcon;
