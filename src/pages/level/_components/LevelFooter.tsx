import ProgressBar from "@/components/ProgressBar";

const LevelFooter = () => {
  return (
    <section className="relative flex h-[180px] w-full flex-col justify-between rounded-2xl border-2 border-brandGray px-4 py-[17px]">
      <h1 className="text-base font-bold text-brand">나의 습득 어휘</h1>
      <div
        className="absolute bottom-14 left-4 flex justify-between font-extrabold"
        style={{ width: "calc(100% - 32px)" }}
      >
        <div className="flex w-fit gap-1">
          <h1 className="self-end text-[65px] leading-[65px] text-[#547AFF]">
            {10}
          </h1>
          <p className="mb-[10px] self-end text-base text-brandSubText">
            /{42}개
          </p>
        </div>
        <div className="self-end text-[32px] text-[#547AFF]">60%</div>
      </div>
      <div className="flex flex-col gap-2">
        <ProgressBar percent={0.7} />
        <div className="flex w-full justify-between font-medium text-brandSubText">
          <p>유생</p>
          <p>문서</p>
        </div>
      </div>
    </section>
  );
};

export default LevelFooter;
