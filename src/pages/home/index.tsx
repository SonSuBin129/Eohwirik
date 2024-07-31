import BottomNav from "@/components/BottomNav";
import Nav from "@/components/Nav";
import CommonSenseSection from "./_components/CommonSenseSection";
import CategorySection from "@/pages/home/_components/CategorySection";

const Home = () => {
  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav />
      </header>
      <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
        <CommonSenseSection />
        <CategorySection />
      </main>
      <header className="sticky bottom-0 left-0 z-10 border-t-[1px] border-solid border-brandGray bg-white py-2">
        <BottomNav />
      </header>
    </main>
  );
};

export default Home;
