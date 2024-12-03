export default function Home() {
  const Header = () => {
    const styles = {
      headerFont: "font-medium ",
      headbox: "flex justify-center align-middle p-5 w-full",
    };

    return (
      <header className="flex justify-center align-middle p-6 gap-[120px] ">
        {["Inicio", "Experiencia", "Conocimientos", "Tecnologías"].map(
          (type, _index) => (
            <div className="cursor-pointer hover:text-lime-600 h-14 w-14flex">
              <h1 className={styles.headerFont} key={type}>
                {type}
              </h1>
            </div>
          )
        )}
      </header>
    );
  };

  return (
    <div className="bg-gradient-to-b from-black to-lime-800 h-screen">
      <Header />
      <main className="flex justify-center">
        <span className="text-[100px] font-semibold">
          Hola. esto es un test.
        </span>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
