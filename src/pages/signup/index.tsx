import { PWInputField } from "./_components/PWInputField";
import { MailInputField } from "./_components/MailInputField";
import Nav from "@/components/Nav";
import ErrorMentBox from "./_components/ErrorMentBox";

import { Button } from "@ui/components/ui/button";
import { useNavigate } from "@/router";
import { useSignUp } from "@/hooks/useSignUp";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    userOption1,
    userOption2,
    checkOption2,
    isOption1Pass,
    isOption1Unique,
    isOption2Pass,
    isCheckOption2Pass,
    AllPass,
    errorMent,
    handleOption1Change,
    handleOption2Change,
    handleCheckOption2Change,
    handleUnique,
    handleSignup,
  } = useSignUp();

  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav backLink="/login" NavTitle="회원가입" />
      </header>
      <main className="flex h-full flex-col items-center justify-between gap-10 px-4">
        <main className="flex w-full grow flex-col gap-12 pt-14">
          <div className="flex w-full flex-col gap-[7px]">
            <div className="pl-[2px] text-xl font-bold">이메일</div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <div className="w-full">
                  <MailInputField
                    placeholder="이메일"
                    value={userOption1}
                    onChange={handleOption1Change}
                    autoComplete="off"
                  />
                </div>
                <Button
                  variant={isOption1Pass ? "brand" : "outline"}
                  className="h-full w-fit rounded-[9px]"
                  onClick={handleUnique}
                >
                  중복 확인
                </Button>
              </div>
              <ErrorMentBox ment={errorMent.option1} isPass={isOption1Pass} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[7px]">
            <div className="pl-[2px] text-xl font-bold">비밀번호</div>
            <div className="flex flex-col gap-4">
              <PWInputField
                placeholder="비밀번호"
                value={userOption2}
                onChange={handleOption2Change}
                isPass={isOption2Pass}
                autoComplete="off"
              />
              <div className="flex flex-col gap-[10px]">
                <PWInputField
                  placeholder="비밀번호 확인"
                  doubleCheck
                  value={checkOption2}
                  onChange={handleCheckOption2Change}
                  autoComplete="off"
                />
                <ErrorMentBox
                  ment={errorMent.option2}
                  isPass={isCheckOption2Pass}
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="flex w-full flex-col gap-6 pb-7">
          <Button
            variant={AllPass ? "brand" : "outline"}
            disabled={!AllPass}
            className="w-full text-xl font-semibold"
            onClick={() => navigate("/initial-setting", { replace: true })}
          >
            가입하기
          </Button>
          <div className="flex justify-center gap-1 text-center text-[13px]">
            <p>이미 회원이신가요?</p>
            <p
              className="text-brand underline"
              onClick={() => navigate("/login", { replace: true })}
            >
              로그인
            </p>
            <p>하기</p>
          </div>
        </footer>
      </main>
    </main>
  );
};

export default SignUp;
