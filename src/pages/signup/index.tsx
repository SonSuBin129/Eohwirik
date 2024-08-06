import { useEffect, useState } from "react";

import Nav from "@/components/Nav";

import InputPage from "./_components/InputPage";
import AgreePage from "./_components/AgreePage";

const SignUp = () => {
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isFirstCheck, setIsFirstCheck] = useState(false);
  const [isSecondCheck, setIsSecondCheck] = useState(false);
  const [isThirdCheck, setIsThirdCheck] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const handleAllCheck = () => {
    const newCheckState = !isAllCheck;
    setIsAllCheck(newCheckState);
    setIsFirstCheck(newCheckState);
    setIsSecondCheck(newCheckState);
    setIsThirdCheck(newCheckState);
  };

  useEffect(() => {
    setIsAllCheck(isFirstCheck && isSecondCheck && isThirdCheck);
  }, [isFirstCheck, isSecondCheck, isThirdCheck]);

  const handleFirstCheck = () => {
    setIsFirstCheck(!isFirstCheck);
  };
  const handleSecondCheck = () => {
    setIsSecondCheck(!isSecondCheck);
  };

  const handleThirdCheck = () => {
    setIsThirdCheck(!isThirdCheck);
  };

  const handleNext = () => {
    setIsNext(true);
  };

  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav backLink="/login" NavTitle="회원가입" />
      </header>
      {isNext ? (
        <InputPage />
      ) : (
        <AgreePage
          isAllCheck={isAllCheck}
          handleAllCheck={handleAllCheck}
          isFirstCheck={isFirstCheck}
          handleFirstCheck={handleFirstCheck}
          isSecondCheck={isSecondCheck}
          handleSecondCheck={handleSecondCheck}
          isThirdCheck={isThirdCheck}
          handleThirdCheck={handleThirdCheck}
          handleNext={handleNext}
        />
      )}
    </main>
  );
};

export default SignUp;
