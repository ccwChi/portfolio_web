import React, { useState } from "react";
import Rowlet from "../assets/images/Rowlet1.jpg";
import Jeff from "../assets/images/694167.webp";
import { useTranslation } from "react-i18next";
const About = () => {
  const [pic, setPic] = useState(1);
  const { t } = useTranslation();
  return (
    // <div data-aos="fade-up" id="about" className="container md:py-32 py-6 ">
    //   <div className="flex flex-col items-center pb-6 gap-2" id="about">
    <div className="container sm:py-16 py-12 w-full flex flex-col gap-y-6">
      <div className="flex flex-col items-center pb-6 gap-2" id="about">
        <p className="text-3xl text-gray-900 dark:text-white text-center">
          {t("aboutMe")}
        </p>
      </div>
      <div className="flex sm:flex-row flex-col px-2">
        {/* 左邊框 */}
        <div className="sm:w-[300px] w-full flex flex-col justify-center items-center relative">
          <span
            className={`absolute h-3 w-3 bg-blue-800 rounded-full ring-2 ${
              pic === 1 ? "border-emerald-400 border-2" : ""
            } top-0 left-[calc(50%+_30px)] cursor-pointer`}
            onClick={() => setPic(1)}
          ></span>
          <span
            className={`absolute h-3 w-3 bg-blue-800 rounded-full ring-2 ${
              pic === 2 ? "border-emerald-400 border-2" : ""
            } top-0 left-[calc(50%+_50px)] cursor-pointer`}
            onClick={() => setPic(2)}
          ></span>
          <img
            className="h-[280px] w-[180px] rounded-3xl ring-gray-200 border ring-4"
            src={pic === 1 ? Jeff : Rowlet}
            alt="rowletPic"
          ></img>
          <div className="py-2 px-3 text-gray-900 md:p-0 dark:text-white">
            <p className="p-2 mt-2"> {t("photoDes")}</p>
          </div>
        </div>
        {/* 右邊框 */}
        <div className="p-2 sm:p-0 flex-1 flex flex-col gap-2 items-center">
          <div className="flex flex-col pb-6 gap-2 text-center sm:text-start">
            <p className="text-2xl text-gray-900 dark:text-white pt-0  md:pt-4 ">
              {t("Iam")}
            </p>
            <p className="text-base sm:text-lg text-gray-900 dark:text-white">
              {t("nowAs")}
            </p>

            <p className="text-base sm:text-base text-gray-900 dark:text-gray-300 pt-6">
              {t("aboutDes")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
