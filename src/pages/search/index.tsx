import { Suspense, useState } from "react";

import Nav from "@/components/Nav";

import { useMutationSearchItems } from "@/hooks/mutation/useMutationSearchItems";

import { ScrapWordDTO } from "@/types/quizType";

import SearchSection from "./_components/SearchSection";
import InputField from "./_components/InputField";
import ErrorMentBox from "./_components/ErrorMentBox";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isPass, setIsPass] = useState(false);
  const [errorMent, setErrorMent] = useState("");
  const [searchDatas, setSearchDatas] = useState<ScrapWordDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [isError, setIsError] = useState(false); //

  const [isFirst, setIsFirst] = useState(true);

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsPass(false);
      setErrorMent("검색어를 입력해주세요.");
    } else {
      setIsPass(true);
      setErrorMent("");
      setIsError(true);
    }
  };

  const userEmail = localStorage.getItem("userEmail");
  const mutation = useMutationSearchItems();

  const handleSearch = () => {
    if (userEmail) {
      setIsLoading(true); // 검색 시작 시 로딩 상태로 설정
      mutation.mutate(
        { userEmail: userEmail, keyword: searchValue },
        {
          onSuccess: data => {
            setSearchDatas(data);
            setIsLoading(false); // 데이터 로드 완료 후 로딩 상태 해제
            setIsFirst(false);
          },
          onError: () => {
            setIsLoading(false); // 에러 발생 시에도 로딩 상태 해제
            setIsFirst(false);
          },
        },
      );
    }
  };

  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav backLink="/home" NavTitle="검색" />
      </header>
      <main className="flex h-full flex-col px-4 py-10">
        <section className="flex flex-col gap-[10px]">
          <InputField
            value={searchValue}
            onChange={handleSearchValue}
            onClick={handleSearch}
          />
          <ErrorMentBox isPass={isPass} ment={errorMent} />
        </section>
        <Suspense
          fallback={<div className="text-center text-lg">Loading...</div>}
        >
          {isLoading ? (
            <div className="text-center text-lg">Loading...</div>
          ) : (
            <SearchSection
              datas={searchDatas}
              isFirst={isFirst}
              isError={isError}
            />
          )}
        </Suspense>
      </main>
    </main>
  );
};

export default SearchPage;
