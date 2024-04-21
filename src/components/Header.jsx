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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 641);
    };

    window.addEventListener("resize", handleResize);

    // 清理副作用
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);
  console.log("isOpen", isOpen);
  console.log("isMobile", isMobile);
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
            <ul className="font-medium flex flex-col sm:p-0 mt-4 border border-gray-100 rounded-lg sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0  dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={handleClick}
                  href="#about"
                  className="block p-2 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#timeline"
                  className="block p-2 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#portfolio"
                  className="block p-2 text-gray-900 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-white sm:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <div className="block w-6 bg-blac">
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

const a = {
  employeeId: "EMP001",
  assessmentDate: "2024-04-14",
  jobDescription: "Sales Manager",
  assessmentItems: [
    {
      category: "工作表現",
      items: [
        {
          description: "完成銷售目標",
          evaluation: "員工在本季度成功達成了指定的銷售目標，表現突出。",
          score: 5,
        },
        {
          description: "客戶滿意度",
          evaluation:
            "客戶對員工的服務態度和專業水平給予了高度評價，表現優秀。",
          score: 4,
        },
      ],
    },
    {
      category: "專業能力",
      items: [
        {
          description: "行業知識",
          evaluation:
            "員工對行業動態和產品知識有著深入的了解，能夠有效應對客戶提出的問題。",
          score: 5,
        },
        {
          description: "溝通能力",
          evaluation:
            "員工與同事和客戶之間的溝通暢順，能夠清晰表達自己的想法。",
          score: 4,
        },
      ],
    },
  ],
  overallEvaluation: "員工在本次考核中表現優秀，獲得了高分。",
  goals: [
    {
      description: "下季度銷售目標提升20%",
      deadline: "2024-07-01",
    },
    {
      description: "參加行業會議，提升專業知識",
      deadline: "2024-05-15",
    },
  ],
};
