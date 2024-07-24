import Characters from "@/components/Characters";
import Logo from "@/components/Logo";
import { Link } from "@/router";
import { Button } from "@ui/components/ui/button";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3초 후 로딩 완료 설정
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      {isLoading ? (
        <Logo size={"25%"} />
      ) : (
        <div className="flex h-full flex-col justify-between px-4 py-20">
          <div className="flex grow flex-col justify-center gap-5">
            <Characters size={"70%"} />
            <div className="text-center text-lg font-semibold">
              <p>서비스명과 함께</p>
              <p>뫔뫔마마마마를 같이 해보아요!</p>
            </div>
          </div>
          <footer className="flex flex-col items-center gap-4">
            <Link to="/" className="w-full sm:w-80">
              <Button variant="brand" className="w-full text-xl font-semibold">
                시작하기
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-80">
              <Button
                variant="outline"
                className="w-full text-xl font-semibold"
              >
                로그인
              </Button>
            </Link>
          </footer>
        </div>
      )}
    </main>
  );
};

export default MainPage;
