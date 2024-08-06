import { useEffect, useState } from "react";
import { Button } from "@ui/components/ui/button";

import LandingLogo from "@/components/LandingLogo";

import { Link } from "@/router";
import firstPageContent from "@/assets/firstPageContent.png";

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
        <LandingLogo />
      ) : (
        <div className="flex h-full flex-col items-center justify-evenly">
          <div>
            <img src={firstPageContent} loading="lazy" />
          </div>
          <footer className="w-full px-4">
            <Link to="/login" className="w-full sm:w-80">
              <Button variant="brand" className="w-full text-xl font-semibold">
                시작하기
              </Button>
            </Link>
          </footer>
        </div>
      )}
    </main>
  );
};

export default MainPage;
