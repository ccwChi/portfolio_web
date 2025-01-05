import React from "react";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <div className="container sm:py-16 py-12 w-full flex flex-col gap-y-6">
      <div className="flex flex-col items-center pb-6 gap-2" id="timeline">
        <p className="text-3xl text-gray-900 dark:text-white text-center">
          {t("timeline")}
        </p>
        <p className="text-lg pt-4 sm:px-20 text-center max-w-[700px] text-gray-800 dark:text-gray-200">
          {t("currentDes1")}
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {t("currentDes2")}
          </span>
          {t("currentDes3")}
        </p>
        <p className="text-xs pb-4 text-center max-w-[700px] text-gray-800 dark:text-gray-300">
          {t("currentDesEnd")}
        </p>
      </div>
      {/* 時間軸 */}
      <TimelinePart timelineData={timelineData} />
    </div>
  );
};

export default Timeline;

const TimelinePart = ({ timelineData }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative text-sm font-semibold">
        <div className="hidden absolute w-[1px] sm:block dark:bg-indigo-100 bg-indigo-400 h-full left-1/2 transform -translate-x-1/2"></div>

        {timelineData.map((data, i) => (
          <div className="my-3 sm:mt-0 " key={i}>
            <div className="flex items-center flex-col sm:flex-row">
              <div
                className={`flex ${
                  i % 2 === 1 ? " justify-end " : " justify-start "
                } w-full mx-auto items-center relative`}
              >
                <div className="hidden sm:block h-2 w-2 absolute bg-gray-900 rounded-full border-2 border-green-500 antialiased left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0  items-center"></div>
                <div
                  className={`w-full sm:w-1/2 ${
                    i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"
                  } `}
                >
                  <div
                    // data-aos="fade-right"
                    data-aos={i % 2 === 1 ? "fade-left" : "fade-right"}
                    className="dark:bg-gray-800 bg-slate-100 rounded-md shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-gray-300 flex-1 p-3"
                  >
                    <p className="text-xs text-gray-900 dark:text-green-50 my-1">
                      {data.date}
                    </p>
                    <p className="text-lg font-thin text-gray-900 dark:text-white">
                      {t(data.date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <div className={`flex w-full mx-auto items-center relative`}>
          <div className={`w-full`}>
            <div
              // data-aos="fade-right"
              data-aos={"fade-up"}
              className="dark:bg-gray-800 bg-slate-100 rounded-md shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-gray-300 flex-1 p-3"
            >
              <p className="text-lg text-gray-900 dark:text-green-50 my-1">
                {t("aboutnow-1")}
              </p>
              <p className="text-lg text-gray-900 dark:text-green-50 my-1">
                {t("aboutnow-2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const timelineData = [
  {
    date: "2023.02",
  },
  {
    date: "2023.04",
  },
  {
    date: "2023.07",
  },
  {
    date: "2023.08",
  },
  {
    date: "2024.01",
  },
  {
    date: "2024.03",
  },
  {
    date: "2024.07",
  },
];
