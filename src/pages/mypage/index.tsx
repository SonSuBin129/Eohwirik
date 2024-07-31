import BottomNav from "@/components/BottomNav";
import SubNav from "@/components/SubNav";

const MyPage = () => {
  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <SubNav NavTitle="마이페이지" />
      </header>
      <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
        마이페이지
      </main>
      <header className="sticky bottom-0 left-0 z-10 border-t-[1px] border-solid border-brandGray bg-white py-2">
        <BottomNav />
      </header>
    </main>
  );
};

export default MyPage;
