import React from "react";
import tempPic1 from "../assets/images/portfolio-01.jpg";
import tempPic2 from "../assets/images/portfolio-02.jpg";
import { GitIcon, LinkIcon, NotionIcon } from "../assets/iconData";

const Protfolio = () => {
  return (
    <div className="container sm:py-16 py-12 w-full flex flex-col">
      <div className="flex flex-col items-center pb-6 gap-2" id="portfolio">
        <p className="text-3xl text-gray-900 dark:text-white">Protfolio</p>
        <p className="text-base pt-4 px-20 text-center max-w-[700px] text-gray-800 dark:text-gray-200"></p>
      </div>
      {/* 作品區域，上面是title */}
      <div className="flex flex-col gap-y-6">
        <div
          data-aos="fade-up"
          className="sm:px-4 p-0 flex flex-col md:flex-row gap-x-2 justify-center items-center"
        >
          <div className="h-fit min-w-[320px]">
            <img src={tempPic1} className="h-48" alt="tempic1" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 md:p-0">
            <div className="flex flex-col flex-1 py-2 gap-2 overflow-y-auto">
              <p className="text-xl w-full md:text-start text-center text-gray-900 dark:text-white">
                Pomodoro + ToDo list
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                Many online Pomodoro clock templates lack a mechanism to avoid
                resetting after refreshing the page. To prevent the time from
                resetting upon refresh, I specifically implemented local storage
                to disable the reset.
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                + normal dragable todolist
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              <span className="cursor-pointer">
                <GitIcon />
              </span>
              <span className="cursor-pointer">
                <LinkIcon />
              </span>
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
            <img src={tempPic2} className="h-48" alt="tempic1" />
          </div>
          <div className="flex flex-col justify-center items-center p-4 md:p-0">
            <div className="flex flex-col flex-1 pb-6 pt-4 gap-2 overflow-y-auto">
              <p className="text-xl w-full md:text-start text-center text-gray-900 dark:text-white">
                Boardgame Support Recorder
              </p>
              <p className="text-base text-center md:text-start  text-gray-900 dark:text-gray-300">
                This this for help me to record boardgame state, using websocket
                on azure, more displays and presentations are available in the
                Notion link below.
              </p>
            </div>
            <div className="flex w-full justify-center md:justify-start md:text-start text-center gap-x-2">
              <span className="cursor-pointer">
                <GitIcon />
              </span>
              <span className="cursor-pointer">
                <LinkIcon />
              </span>
              <span className="cursor-pointer">
                <NotionIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
