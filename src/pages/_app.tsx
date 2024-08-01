import { Outlet } from "react-router-dom";
import { Toaster } from "@ui/components/ui/toaster";

const App = () => {
  return (
    <section className="relative flex h-dvh w-screen flex-col">
      <Toaster className="top-5" isDestructive />
      <section className="relative flex h-dvh w-screen flex-col">
        <main className="w-full grow">
          <Outlet />
        </main>
      </section>
    </section>
  );
};

export default App;
