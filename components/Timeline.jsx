import React from "react";

const Timeline = () => {
  return (
    <div className="container py-16 w-full ">
      <div className="flex flex-col items-center pb-6 gap-2" id="timeline">
        <p className="text-3xl text-gray-900 dark:text-white text-center">
          What are my current responsibilities
        </p>
        <p className="text-base pt-4 sm:px-20 text-center max-w-[700px] text-gray-800 dark:text-gray-200">
          I am currently developing a system interface like an ERP{" "}
          <span className="text-sm text-gray-600 dark:text-gray-400">
            (Enterprise Resource Planning)
          </span>{" "}
          system. Our team have already built modules for HR management,
          dispatch management, project management and punch in/out system.
        </p>
        <p className="text-xs pb-4 text-center max-w-[700px] text-gray-800 dark:text-gray-300">
          (The project start from 2023/08)
        </p>
      </div>
      {/* 時間軸 */}
      <div className="relative text-sm font-semibold">
        <div className="hidden absolute w-[1px] sm:block bg-indigo-100 h-full left-1/2 transform -translate-x-1/2"></div>

        {/* 1 left */}
        <div className="my-3 sm:mt-0 ">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex justify-start w-full mx-auto items-center relative">
              <div className="hidden sm:flex h-2 w-2 absolute bg-gray-900 rounded-full ring-2 ring-green-500 antialiased left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0  items-center"></div>
              <div className="w-full sm:w-1/2 sm:pr-8">
                <div
                  data-aos="fade-right"
                  className="dark:bg-gray-800 rounded-sm shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-slate-50 flex-1 p-3"
                >
                  <p className="text-xs text-gray-900 dark:text-green-50 my-1">
                    2023/02
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Try kotlin for App, Too hard for novice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 right */}
        <div className="my-3 sm:mt-0">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex justify-end w-full mx-auto items-center relative">
              <div className="hidden sm:flex h-2 w-2 absolute bg-gray-900 rounded-full ring-2 ring-green-500 antialiased left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0  items-center"></div>
              <div className="w-full sm:w-1/2 sm:pl-6">
                <div
                  data-aos="fade-left"
                  className="dark:bg-gray-800 rounded-sm shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-slate-50 flex-1 p-3"
                >
                  <p className="text-xs text-gray-900 dark:text-green-50 my-1">
                    2023/04
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Initial exposure to with html, css and javascript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 left*/}
        <div className="my-3 sm:mt-0 ">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex justify-start w-full mx-auto items-center relative">
              <div className="hidden sm:flex h-2 w-2 absolute bg-gray-900 rounded-full ring-2 ring-green-500 antialiased left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0  items-center"></div>
              <div className="w-full sm:w-1/2 sm:pr-8">
                <div
                  data-aos="fade-right"
                  className="dark:bg-gray-800 rounded-sm shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-slate-50 flex-1 p-3"
                >
                  <p className="text-xs text-gray-900 dark:text-green-50 my-1">
                    2023/07
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Learning the React.js front-end framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 right */}
        <div className="my-3 sm:mt-0">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex justify-end w-full mx-auto items-center relative">
              <div className="hidden sm:flex h-2 w-2 absolute bg-gray-900 rounded-full ring-2 ring-green-500 antialiased left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0  items-center"></div>
              <div className="w-full sm:w-1/2 sm:pl-6">
                <div
                  data-aos="fade-left"
                  className="dark:bg-gray-800 rounded-sm shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-slate-50 flex-1 p-3"
                >
                  <p className="text-xs text-gray-900 dark:text-green-50 my-1">
                    2023/08
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Serving at Current Company and handling ERP frontend
                    interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1-1 */}
        <div className="my-3 sm:mt-0 ">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex justify-start w-full mx-auto items-center relative">
              <div className="hidden sm:flex h-2 w-2 absolute bg-gray-900 rounded-full ring-2 ring-green-500 antialiased left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0  items-center"></div>
              <div className="w-full sm:w-1/2 sm:pr-8">
                <div
                  data-aos="fade-right"
                  className="dark:bg-gray-800 rounded-sm shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-slate-50 flex-1 p-3"
                >
                  <p className="text-xs text-gray-900 dark:text-green-50 my-1">
                    2024/01
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Explored learning Corona programming language out of
                    personal interest.
                  </p>
                  <p className="text-2xl text-gray-900 dark:text-white"></p>

                  <p className="text-2xl text-gray-900 dark:text-white"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1-2 */}
        <div className="my-3 sm:mt-0">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex justify-end w-full mx-auto items-center relative">
              <div className="hidden sm:flex h-2 w-2 absolute bg-gray-900 rounded-full ring-2 ring-green-500 antialiased left-1/2 transform  -translate-x-1/2 -translate-y-4 sm:translate-y-0  items-center"></div>
              <div className="w-full sm:w-1/2 sm:pl-6">
                <div
                  data-aos="fade-left"
                  className="dark:bg-gray-800 rounded-sm shadow-[1px_1px_2px_(0,0,0,0.1)] shadow-slate-50 flex-1 p-3"
                >
                  <p className="text-xs text-gray-900 dark:text-green-50 my-1">
                    2024/03
                  </p>
                  <p className="text-base text-gray-900 dark:text-white">
                    Learning C# for websocket and backend service
                  </p>
                  <p className="text-2xl text-gray-900 dark:text-white"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
