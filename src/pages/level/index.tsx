import { Suspense } from "react";

import { Stack } from "@/utils/levelflow";

const LevelPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Suspense fallback={<div className="text-3xl font-bold">Loading...</div>}>
        <Stack />
      </Suspense>
    </main>
  );
};

export default LevelPage;
