import LoadingButton from "@/components/LoadingButton";

import { useSignUp } from "@/hooks/useSignUp";

import { PWInputField } from "./PWInputField";
import { MailInputField } from "./MailInputField";
import ErrorMentBox from "./ErrorMentBox";

import { useNavigate } from "@/router";

const InputPage = () => {
  const navigate = useNavigate();

  const {
    checkmailMutation,
    signupMutation,
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
    <>
      <main className="flex h-full flex-col items-center justify-between gap-10 px-4">
        <main className="flex w-full grow flex-col gap-12 pt-14">
          <div className="flex w-full flex-col gap-[7px]">
            <div className="pl-[2px] text-lg font-bold">이메일</div>
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
                <LoadingButton
                  className="h-full w-28 rounded-[9px] font-normal"
                  isLoading={checkmailMutation.isPending}
                  disabled={!isOption1Pass}
                  handleClick={handleUnique}
                  buttonText="중복 확인"
                />
              </div>
              <ErrorMentBox ment={errorMent.option1} isPass={isOption1Unique} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[7px]">
            <div className="pl-[2px] text-lg font-bold">비밀번호</div>
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
          <LoadingButton
            isLoading={signupMutation.isPending}
            disabled={!AllPass}
            handleClick={handleSignup}
            buttonText="가입하기"
          />
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
    </>
  );
};

export default InputPage;
