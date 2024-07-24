import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <section className="relative flex h-dvh w-screen flex-col">
      <main className="w-full grow">
        <Outlet />
      </main>
    </section>
  );
};

export default App;
