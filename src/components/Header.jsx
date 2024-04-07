import React, { useEffect, useRef, useState } from "react";
import Kala from "../assets/images/cubone.webp";

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  // useEffect(() => {
  //   stickyHeaderFunc();
  //   return window.removeEventListener("scroll", stickyHeaderFunc);
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location,
      left: 0,
    });
  };

  return (
    <header
      ref={headerRef}
      className="w-full h-fit flex items-center bg-gray-100 dark:bg-gray-900 "
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="flex items-center">
            <img src={Kala} className="h-8" alt="CuboneLogo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Jeff Personal Web
            </span>
          </span>
          {/* burger icon */}
          <button
            onClick={toggleMenu}
            type="button"
            className="sm:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full sm:block sm:w-auto ${isOpen ? "absolute  top-0 w-[calc(100%-5rem)]" : "hidden"} `}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={handleClick}
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#timeline"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#portfolio"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
