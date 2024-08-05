import ClassComponent from "@/components/ClassComponent";

import { useManageCommonSense } from "@/hooks/useManageCommonSense";

import { useNavigate } from "@/router";

interface CommonSenseItemProps {
  id: number;
  date: string;
}

// 현재 날짜를 YYYY.MM.DD 형식으로 변환하는 함수
const getCurrentDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줌
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const CommonSenseItem = (props: CommonSenseItemProps) => {
  const { id, date } = props;
  const navigate = useNavigate();

  // 오늘 날짜와 비교
  const currentDateString = getCurrentDateString();
  const displayDate = date === currentDateString ? "오늘" : date;

  const { image, title1, title2, explain, class1, class2, backgroundColor } =
    useManageCommonSense(id, "first");

  const itemStyle = {
    backgroundColor: backgroundColor.startsWith("linear-gradient")
      ? undefined
      : backgroundColor, // 단일 색상인 경우 적용
    backgroundImage: backgroundColor.startsWith("linear-gradient")
      ? backgroundColor
      : undefined, // 그라데이션인 경우 적용
  };

  const handleClick = () => {
    navigate("/common", { state: { commonId: id } });
  };

  return (
    <section className="flex flex-col gap-[5px]" onClick={handleClick}>
      <div className="text-sm">{displayDate}</div>
      <div
        className="relative flex h-[347px] w-[292px] flex-col gap-4 rounded-[34px] px-4 pt-10 font-bold"
        style={itemStyle}
      >
        <div className="z-20 flex flex-col gap-[10px]">
          <h1 className="text-[27px] leading-tight">
            {title1}
            <br />
            {title2}
          </h1>
          <p className="text-base text-[#8c8c8c]">{explain}</p>
        </div>
        <div className="z-20 flex gap-2">
          <ClassComponent title={class1} />
          <ClassComponent title={class2} />
        </div>
        <div className="absolute bottom-2 right-2 z-10">
          <img
            src={image}
            alt="First Apple"
            className="h-[202px] w-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CommonSenseItem;
