import CloseIcon from "@/components/Icons/CloseIcon";

import { useLevelFlow } from "@/utils/useLevelFlow";

const LevelNav = () => {
  const { pop } = useLevelFlow();
  const handleClick = () => {
    pop();
  };

  return (
    <nav className="flex h-10 w-full items-center justify-center px-4">
      <div className="ml-[18px] flex-1 text-center text-xl font-bold leading-10">
        관직 설명
      </div>
      <div onClick={handleClick}>
        <CloseIcon />
      </div>
    </nav>
  );
};

export default LevelNav;
