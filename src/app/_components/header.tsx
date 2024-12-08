"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const styles = {
    headerFont: "font-medium ",
  };
  const options = ["Inicio", "Experiencia", "Conocimientos", "Tecnologías"];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth > 1050);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isVisible) return <MobileHeader options={options}></MobileHeader>;

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-2/3 flex justify-center items-center gap-[120px] py-5 transition-colors duration-250 rounded-br-xl rounded-bl-xl ${
        isScrolled ? "bg-stone-700 shadow-md bg-opacity-45" : "bg-transparent"
      }`}
    >
      {options.map((type, _index) => (
        <div className="cursor-pointer hover:text-lime-600 flex items-center justify-center">
          <h1 className={styles.headerFont} key={type}>
            {type}
          </h1>
        </div>
      ))}
    </header>
  );
};

const MobileHeader = ({ options }: { options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsOpen(false);
      }, 300);
    }
  };

  return (
    <div>
      <span
        className="icon-[rivet-icons--menu] bg-emerald-500 size-5 py-5 px-1 cursor-pointer mt-[10px] ml-[20px]"
        onClick={toggleMenu}
      ></span>
      {(isOpen || isClosing) && (
        <div
          className={`fixed inset-0 z-10 bg-transparent transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeMenu}
        >
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-stone-700 shadow-md bg-opacity-45 text-white transform transition-transform duration-300 ease-in-out z-20 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-4 mt-32 px-4">
              {options.map((item, index) => (
                <li key={index} className="hover:text-lime-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
