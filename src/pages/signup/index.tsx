import { PWInputField } from "./_components/PWInputField";
import { MailInputField } from "./_components/MailInputField";
import Nav from "@/components/Nav";
import ErrorMentBox from "./_components/ErrorMentBox";

import { useEffect, useState } from "react";
import { Button } from "@ui/components/ui/button";
import { useNavigate } from "@/router";

const SignUp = () => {
  const navigate = useNavigate();

  const Regex1 = /^(?=.*[A-Za-z])(?=.*[0-9!@#$%^&*(),.?":{}|<>])/;
  const Regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Za-z])/;
  const CommonRegex = /[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,20}$/;

  const UserOption2Regex = new RegExp(
    `(${Regex1.source})|(${Regex2.source})${CommonRegex.source}`,
  );

  const [userOption1, setUserOption1] = useState("");
  const [userOption2, setUserOption2] = useState("");
  const [checkOption2, setCheckOption2] = useState("");
  const [isOption1Pass, setIsOption1Pass] = useState(false);
  const [isOption2Pass, setIsOption2Pass] = useState(false);
  const [isCheckOption2Pass, setIsCheckOption2Pass] = useState(false);

  const [AllPass, setAllPass] = useState(false);

  useEffect(() => {
    setAllPass(isOption1Pass && isOption2Pass && isCheckOption2Pass);
  }, [isOption1Pass, isOption2Pass, isCheckOption2Pass]);

  const [errorMent, setErrorMent] = useState<{
    option1: string;
    option2: string;
  }>({ option1: "", option2: "" });

  const handleOption1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserOption1(event.target.value);
    if (event.target.value === "") {
      setErrorMent(prev => ({
        ...prev,
        option1: "dsafsdfdf",
      }));
      return;
    }
    //TODO: 이메일 인증 체크하는 api 연결
    setIsOption1Pass(true);
  };

  const handleOption2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserOption2(event.target.value);
    if (!UserOption2Regex.test(userOption2)) {
      setErrorMent(prev => ({
        ...prev,
        option2:
          "영문 대문자와 소문자, 특수문자 중 2가지 이상을 조합하여 6~20자로 입력해주세요.",
      }));
      setIsOption2Pass(false);
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        option2: "",
      }));
      setIsOption2Pass(true);
    }
  };

  const handleCheckOption2Change = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckOption2(event.target.value);
    if (
      userOption2 === event.target.value &&
      userOption2 !== "" &&
      event.target.value !== ""
    ) {
      setErrorMent(prev => ({
        ...prev,
        option2: "비밀번호가 일치합니다.",
      }));
      setIsCheckOption2Pass(true);
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        option2: "비밀번호가 일치하지 않습니다.",
      }));
      setIsCheckOption2Pass(false);
      return;
    }
  };

  const handleSignup = () => {
    setErrorMent({ option1: "", option2: "" });
  };

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
              <div className="flex gap-[15px]">
                <MailInputField
                  placeholder="이메일"
                  value={userOption1}
                  onChange={handleOption1Change}
                  autoComplete="off"
                />
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
            className="w-full text-xl font-semibold sm:w-80"
            onClick={() => navigate("/initial-quiz", { replace: true })}
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
