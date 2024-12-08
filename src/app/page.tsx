const Home = () => {
  return (
    <div>
      <main className="flex justify-center">
        <span className="text-[60px] font-normal">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-emerald-900 via-teal-600 to-emerald-500 bg-clip-text text-transparent animate-gradient font-semibold">
            Axel!
          </span>
        </span>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
