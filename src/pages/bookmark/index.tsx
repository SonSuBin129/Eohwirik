import { Suspense, useState } from "react";
import { cn } from "@ui/lib/utils";

import SubNav from "@/components/SubNav";
import BottomNav from "@/components/BottomNav";

import WordSection from "@/pages/bookmark/_components/WordSection";
import KnowledgeSection from "@/pages/bookmark/_components/KnowledgeSection";

const BookMarkPage = () => {
  const [activeSection, setActiveSection] = useState<"word" | "knowledge">(
    "word",
  );

  const handleClick = (section: "word" | "knowledge") => {
    setActiveSection(section);
  };

  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-50 bg-white py-2">
        <SubNav NavTitle="책갈피" />
      </header>
      <main className="flex h-full flex-col items-center justify-start">
        <header className="grid w-full grid-cols-2 text-base font-bold">
          <div
            className={cn(
              "border-b-[3px] py-2 text-center",
              activeSection === "word"
                ? "border-brand text-brand"
                : "border-brandGray text-brandGray",
            )}
            onClick={() => handleClick("word")}
          >
            어휘
          </div>
          <div
            className={cn(
              "border-b-[3px] py-2 text-center",
              activeSection === "knowledge"
                ? "border-brand text-brand"
                : "border-brandGray text-brandGray",
            )}
            onClick={() => handleClick("knowledge")}
          >
            매일 어휘
          </div>
        </header>
        <section className="px-4 py-10">
          <Suspense fallback={<div>Loading...</div>}>
            {activeSection === "word" ? <WordSection /> : <KnowledgeSection />}
          </Suspense>
        </section>
      </main>
      <footer className="sticky bottom-0 left-0 z-50 border-t-[1px] border-solid border-brandGray bg-white py-2">
        <BottomNav />
      </footer>
    </main>
  );
};

export default BookMarkPage;
