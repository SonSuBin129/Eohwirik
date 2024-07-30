import { useEffect, useState } from "react";

//TODO: 이메일 체크 api 연결

export const useSignUp = () => {
  const UserOption1Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const Option2_Regex1 = /^(?=.*[A-Za-z])(?=.*[0-9!@#$%^&*(),.?":{}|<>])/;
  const Option2_Regex2 =
    /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Za-z])/;
  const CommonRegex = /[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,20}$/;

  const UserOption2Regex = new RegExp(
    `(${Option2_Regex1.source})|(${Option2_Regex2.source})${CommonRegex.source}`,
  );

  const [userOption1, setUserOption1] = useState("");
  const [userOption2, setUserOption2] = useState("");
  const [checkOption2, setCheckOption2] = useState("");
  const [isOption1Pass, setIsOption1Pass] = useState(false);
  const [isOption1Unique, setIsOption1Unique] = useState(false);
  const [isOption2Pass, setIsOption2Pass] = useState(false);
  const [isCheckOption2Pass, setIsCheckOption2Pass] = useState(false);

  const [AllPass, setAllPass] = useState(false);

  useEffect(() => {
    setAllPass(
      isOption1Pass && isOption2Pass && isCheckOption2Pass && isOption1Unique,
    );
  }, [isOption1Pass, isOption2Pass, isCheckOption2Pass, isOption1Unique]);

  const [errorMent, setErrorMent] = useState<{
    option1: string;
    option2: string;
  }>({ option1: "", option2: "" });

  const handleOption1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserOption1(event.target.value);
    if (
      !UserOption1Regex.test(event.target.value) ||
      event.target.value.length === 0
    ) {
      setErrorMent(prev => ({
        ...prev,
        option1: "올바른 이메일 형식을 입력해주세요",
      }));
      setIsOption1Pass(false);
      setIsOption1Unique(false);
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        option1: "",
      }));
      setIsOption1Pass(true);

      //TODO: 이메일 인증 체크하는 api 연결
    }
  };

  const handleOption2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserOption2(event.target.value);
    if (!UserOption2Regex.test(event.target.value)) {
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

  const handleUnique = () => {
    //TODO: 이메일 체크 api 연결
    setIsOption1Unique(true);
  };

  const handleSignup = () => {
    setErrorMent({ option1: "", option2: "" });
  };

  return {
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
  };
};
