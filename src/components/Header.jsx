import React, { useEffect, useRef, useState } from "react";
import Kala from "../assets/images/cubone.webp";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { BurgerIcon } from "../assets/iconData";
import { useTranslation } from "react-i18next";

// Languages List
const languagesList = [
	{ code: "zh", country: "tw", label: "繁體中文" },
	{ code: "en", country: "us", label: "English" }, // Assuming "us" for English
];

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

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      window.scrollTo({
        top: location - 100,
        left: 0,
      });
    } else {
      window.scrollTo({
        top: location - 180,
        left: 0,
      });
    }
  };


  const {
		i18n: { changeLanguage, language },
	} = useTranslation();

	useEffect(() => {
		localStorage.setItem("selectedLanguage", language);
	}, [language]);

	const handleChangeLanguage = (lag) => {
		// const selectedLanguage = event.target.value;
    console.log(lag)
		changeLanguage(lag);
		localStorage.setItem("selectedLanguage", lag);
	};


  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] min-h-[80px] flex  bg-gray-200 dark:bg-gray-900 "
    >
      <div className="container">
        <div className="flex flex-wrap justify-between mx-auto p-4 ">
          <div className="flex items-center justify-center gap-x-2 ">
            <img src={Kala} className="h-8" alt="CuboneLogo" />
            <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white ">
              Jeff Personal Web
            </span>
            <span className="flex justify-center items-center">
              <ThemeSwitcher />
            </span>
          </div>

          {/* burger icon */}
          <button
            onClick={toggleMenu}
            type="button"
            className="sm:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <BurgerIcon />
          </button>
          <div
            className={`w-full sm:block sm:w-auto ${
              isOpen
                ? "fixed z-[1000] rounded-lg w-[calc(100%)-10rem] left-0 p-10"
                : "hidden"
            } `}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0  dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
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
              <div className="flex gap-2 ml-4">
					<select
						value={language}
						onChange={handleChangeLanguage}
						size="small"
						className="!h-9 "
						>
						{languagesList.map((obj) => (
							<option key={obj.code} value={obj.code}>
								
								{` ${obj.label}`}
							</option>
						))}
					</select>
          <button
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-900 focus:outline-none focus:ring-0 rounded-full text-sm p-2.5"
      onClick={(e)=>handleChangeLanguage(e.target.dataset.code)}
    >
      {true ? (
        <span data-code="zh">中</span>
      ) : (
        <span>En</span>
      )}
    </button>
				</div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
