import React from "react";
import tempPic1 from "../assets/images/todo.webp";
import tempPic2 from "../assets/images/gloomhaven.webp";
import { GitIcon, LinkIcon, NotionIcon } from "../assets/iconData";
import { useTranslation } from "react-i18next";

const Protfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="container sm:py-16 py-12 w-full flex flex-col">
      <div className="flex flex-col items-center pb-6 gap-2" id="portfolio">
        <p className="text-3xl text-gray-900 dark:text-white">
          {t("protfolio")}
        </p>
        <p className="text-base pt-4 px-20 text-center max-w-[700px] text-gray-800 dark:text-gray-200"></p>
      </div>
      {/* 作品區域，上面是title */}
      <div className="flex flex-col gap-y-6">
        <div
          data-aos="fade-up"
          className="sm:px-4 p-0 flex flex-col md:flex-row gap-x-2 justify-center items-center"
        >
          <div className="h-fit min-w-[320px]">
            <img src={tempPic1} className="h-48 aspect-[3/2]" alt="tempic1" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 md:p-0">
            <div className="flex flex-col flex-1 py-2 gap-2 overflow-y-auto">
              <p className="text-xl w-full md:text-start text-center text-gray-900 dark:text-white">
                {t("project01")}
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                {t("project01des1")}
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                {t("project01des2")}
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              <a
                href="https://github.com/ccwChi/todolist"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitIcon />
              </a>
              <a
                href="https://ccwchi.github.io/todolist/"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
              </a>
            </div>
          </div>
        </div>
        <hr
          data-aos="fade-up"
          className="w-full border-gray-200 sm:mx-auto dark:border-gray-700  "
        />
        <div
          data-aos="fade-up"
          className="sm:px-4 p-0 flex flex-col md:flex-row gap-x-2 justify-center items-center"
        >
          <div className="h-fit min-w-[320px]">
            <img src={tempPic2} className="h-48 aspect-[3/2]" alt="tempic1" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 md:p-0">
            <div className="flex flex-col flex-1 pb-6 pt-4 gap-2 overflow-y-auto">
              <p className="text-xl w-full md:text-start text-center text-gray-900 dark:text-white">
                {t("project02")}
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                {t("project02des1")}
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              <a
                href="https://github.com/ccwChi/gloomhaven"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitIcon />
              </a>
              <a
                href="https://ccwchi.github.io/gloomhaven/"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
              </a>
              <a
                href="https://ccwchi.github.io/todolist/"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NotionIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
