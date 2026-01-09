"use client";
import React from "react";
import tempPic1 from "../assets/images/mynote.webp";
import tempPic2 from "../assets/images/gloomhaven.webp";
import tempPic3 from "../assets/images/accountApi.webp";
import tempPic4 from "../assets/images/WPFDataRecord.webp";
import tempPic5 from "../assets/images/twosholder.jpg";
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
      {/* 雿????銝?眩itle */}
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
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              {/* <a
                href="https://github.com/ccwChi/todolist"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitIcon />
              </a> */}
              <a
                href="https://ccw-chi.notion.site/1722a733fb1280448620dc81dc76a61b"
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
                href="https://ccwchi.github.io/gloomhaven/"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
              </a>
              <a
                href="https://ccw-chi.notion.site/3dfb74e3657d47b7b92c5a47bb32627d"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NotionIcon />
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
            <img src={tempPic3} className="h-48 aspect-[3/2]" alt="tempic1" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 md:p-0">
            <div className="flex flex-col flex-1 pb-6 pt-4 gap-2 overflow-y-auto">
              <p className="text-xl w-full md:text-start text-center text-gray-900 dark:text-white">
                {t("project03")}
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                {t("project03des1")}
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              <a
                href="https://github.com/ccwChi/accountAPI"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitIcon />
              </a>
              <a
                href="https://accountapibuild.azurewebsites.net/index.html"
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
            <img src={tempPic4} className="h-48 aspect-[3/2]" alt="tempic1" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 md:p-0">
            <div className="flex flex-col flex-1 pb-6 pt-4 gap-2 overflow-y-auto">
              <p className="text-xl w-full md:text-start text-center text-gray-900 dark:text-white">
                {t("project04")}
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                {t("project04des1")}
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              <a
                href="https://github.com/ccwChi/DataRecord"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitIcon />
              </a>
              <a
                href="https://ccw-chi.notion.site/WPF-APP-f612d13ca25242419b0f824caaaed98a?pvs=4"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NotionIcon />
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
            <img src={tempPic5} className="h-48 aspect-[3/2]" alt="tempic1" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 md:p-0">
            <div className="flex flex-col flex-1 pb-6 pt-4 gap-2 overflow-y-auto">
              <p className="text-xl w-full md:text-start text-center text-gray-900 dark:text-white">
                {t("project05")}
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                {t("project05des1")}
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              <a
                href="https://ccwchi.github.io/twoshoulder/"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;

