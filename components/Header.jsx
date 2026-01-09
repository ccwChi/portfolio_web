"use client";
import React, { useEffect, useRef, useState } from "react";
import Kala from "../assets/images/cubone.webp";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { BurgerIcon, GitIcon } from "../assets/iconData";
import { useTranslation } from "react-i18next";

// Languages List
const languagesList = [
  { code: "zh", country: "tw", label: "繁體中文" },
  { code: "en", country: "us", label: "English" }, // Assuming "us" for English
];

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const modelRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 639);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // 清理副作用
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modelRef]);

  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  useEffect(() => {
    localStorage.setItem("selectedLanguage", language);
  }, [language]);

  const handleChangeLanguage = (lag) => {
    // const selectedLanguage = event.target.value;
    console.log(lag);
    changeLanguage(lag);
    localStorage.setItem("selectedLanguage", lag);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky_header");
      } else {
        headerRef.current?.classList.remove("sticky_header");
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

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] min-h-[80px] flex  bg-gray-200 dark:bg-gray-900 "
    >
      <div className="container">
        <div className="flex flex-wrap justify-between mx-auto p-4 ">
          <div className="flex items-center justify-center gap-x-2 ">
            <a
              href="https://github.com/ccwChi"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitIcon />
            </a>
            <p className="text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">
              {t("webTitile")}
            </p>
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
            ref={modelRef}
            className={`w-full sm:w-fit ${!isMobile
              ? "flex justify-center items-center "
              : isOpen
                ? "fixed w-full z-[1000] rounded-lg right-0 top-16 px-4"
                : "hidden"
              } `}
            id="navbar-default"
          >
            <ul
              className={`font-medium flex flex-col sm:p-0 mt-4 p-4 w-full border border-gray-100 rounded-lg sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 bg-gray-100 dark:bg-gray-800 sm:bg-transparent sm:dark:bg-gray-900 dark:border-gray-700 shadow-lg sm:shadow-none`}
            >
              <li>
                <a
                  onClick={handleClick}
                  href="#about"
                  className="block p-1 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  {t("headerAbout")}
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#timeline"
                  className="block p-1 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  {t("headerTimeline")}
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#biography"
                  className="block p-1 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  {t("headerBiography")}
                </a>
              </li>
              {/* <li>
                <a
                  onClick={handleClick}
                  href="#portfolio"
                  className="block p-1 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  {t("headerPortfolio")}
                </a>
              </li> */}
              <div className="block w-4 bg-blac">
                <button
                  type="button"
                  className="border-black px-2  text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900 focus:outline-none text-sm "
                  onClick={(e) => handleChangeLanguage(e.target.dataset.code)}
                >
                  {language === "en" ? (
                    <span data-code="zh">中</span>
                  ) : (
                    <span data-code="en">En</span>
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
