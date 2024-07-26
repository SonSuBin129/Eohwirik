import Nav from "@/components/Nav";

const Home = () => {
  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav />
      </header>
      <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
        hello
      </main>
    </main>
  );
};

export default Home;
