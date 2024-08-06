import { Button } from "@ui/components/ui/button";

import Logo from "@/components/Logo";
import CheckAgreeIcon from "@/components/Icons/CheckAgreeIcon";

interface AgreePageProps {
  isAllCheck: boolean;
  handleAllCheck: () => void;
  isFirstCheck: boolean;
  handleFirstCheck: () => void;
  isSecondCheck: boolean;
  handleSecondCheck: () => void;
  isThirdCheck: boolean;
  handleThirdCheck: () => void;
  handleNext: () => void;
}

const AgreePage = (props: AgreePageProps) => {
  const {
    isAllCheck,
    handleAllCheck,
    isFirstCheck,
    handleFirstCheck,
    isSecondCheck,
    handleSecondCheck,
    isThirdCheck,
    handleThirdCheck,
    handleNext,
  } = props;

  return (
    <main className="flex h-full flex-col items-center justify-between gap-10 px-4">
      <div className="flex h-full w-full flex-col gap-12">
        <header className="flex w-full flex-col items-start gap-4 pt-[72px]">
          <Logo size="50px" />
          <h1 className="text-2xl font-bold leading-tight">
            서비스 이용을 위해
            <br />
            이용약관 동의가 필요합니다.
          </h1>
        </header>
        <section className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className="flex w-full items-center justify-between">
              <p className="text-xl font-bold">전체동의</p>
              <CheckAgreeIcon isActive={isAllCheck} onClick={handleAllCheck} />
            </div>
            <div className="my-[1%] w-full border-[0.5px] border-[#C4C4C4]"></div>
          </div>
          <div className="flex flex-col gap-6 text-base text-[#1F1F1F]">
            <div className="flex w-full items-center justify-between">
              <p>서비스 이용약관 (필수)</p>
              <CheckAgreeIcon
                isActive={isFirstCheck}
                onClick={handleFirstCheck}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <p>개인정보수집/이용 동의 (필수)</p>
              <CheckAgreeIcon
                isActive={isSecondCheck}
                onClick={handleSecondCheck}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <p>개인정보 제3자 정보제공 동의 (필수)</p>
              <CheckAgreeIcon
                isActive={isThirdCheck}
                onClick={handleThirdCheck}
              />
            </div>
          </div>
        </section>
      </div>
      <footer className="flex w-full flex-col gap-6 pb-7">
        <Button
          className="w-full text-xl font-bold"
          variant={isAllCheck ? "brand" : "outline"}
          disabled={!isAllCheck}
          onClick={handleNext}
        >
          다음
        </Button>
      </footer>
    </main>
  );
};

export default AgreePage;
