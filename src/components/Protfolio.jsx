import React from "react";
import tempPic1 from "../assets/images/portfolio-01.jpg";
import tempPic2 from "../assets/images/portfolio-02.jpg";
const Protfolio = () => {
  return (
    <div className="container sm:py-16 py-0 w-full flex flex-col gap-y-6">
      <div className="flex flex-col items-center pb-6 gap-2" id="portfolio">
        <p className="text-3xl text-gray-900 dark:text-white">Protfolio</p>
        <p className="text-base pt-4 px-20 text-center max-w-[700px] text-gray-800 dark:text-gray-200"></p>
      </div>
      {/* 作品區域，上面是title */}
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
              + normal todolist
            </p>
          </div>
          <div className="flex w-full md:text-start text-center gap-x-2">
            <span className="cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="cursor-pointer">
              {" "}
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-200 sm:mx-auto dark:border-gray-700  " />
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
          <div className="flex w-full md:text-start text-center gap-x-2">
            <span className="cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="cursor-pointer">
              {" "}
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                />
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 192 192"
                className="w-6 h-6 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m138.462 21.522 27.784 19.588.044.033.275.201c1.713 1.256 3.349 2.455 4.452 3.83 1.411 1.76 1.884 3.644 1.884 5.877v104.706c0 3.587-.635 7.178-3.058 9.934-2.451 2.789-6.145 4.067-10.732 4.394l-.018.001-98.629 5.971-.021.001c-3.242.154-6.094.035-8.669-.907-2.688-.984-4.719-2.727-6.604-5.129l-.01-.012-19.979-25.979-.012-.017c-3.81-5.086-5.723-9.348-5.723-14.509V34.509c0-3.12.688-6.394 2.745-9.033 2.124-2.727 5.356-4.328 9.503-4.686l.058-.005 84.854-4.344c5.192-.445 8.938-.576 12.286.185 3.459.787 6.208 2.452 9.57 4.896ZM56.43 157.336h.002v3.3c0 1.904.47 2.337.613 2.452.296.235 1.203.652 3.642.518l97.449-5.371c1.928-.106 2.256-.649 2.348-.801l.005-.008c.29-.476.486-1.407.486-3.357V60.001c0-1.635-.334-2.218-.421-2.327l-.005-.007-.002-.003-.006-.002a.117.117 0 0 1-.012-.004c-.053-.019-.263-.078-.724-.037l-.057.005-101.622 5.668c-.624.056-.973.163-1.152.242-.142.062-.173.104-.181.116l-.002.002c-.066.085-.36.586-.36 2.321v91.361Zm9.085-106.705 87.074-4.506-21.028-15.375-.039-.031c-1.259-.98-2.507-1.854-4.12-2.46-1.588-.597-3.695-.993-6.669-.734l-.05.005-87.009 4.898h-.01a6.453 6.453 0 0 0-.893.116L49.934 48.56c2.037 1.646 3.109 2.146 4.337 2.367 1.538.277 3.52.167 7.722-.115l3.522-.237v.056Zm-34.231-3.586v83.893c0 .538.175 1.061.498 1.49l13.174 17.464V61.224a2.47 2.47 0 0 0-.877-1.889l-.08-.068-12.715-12.222Zm109.871 35.062c.451 2.04 0 4.082-2.041 4.315l-3.393.673v49.881c-2.947 1.586-5.66 2.492-7.927 2.492-3.622 0-4.528-1.134-7.239-4.53l-.003-.003L98.36 100.02v33.78l7.02 1.59s0 4.082-5.664 4.082l-15.615.906c-.455-.91 0-3.176 1.582-3.627l4.078-1.131V90.955l-5.66-.459c-.454-2.04.677-4.987 3.85-5.216l16.754-1.128 23.09 35.367V88.231l-5.885-.677c-.455-2.499 1.356-4.315 3.618-4.536l15.627-.91v-.001Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
