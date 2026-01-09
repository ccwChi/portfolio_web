"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Biography = () => {
  const { t } = useTranslation();

  return (
    <div className="container sm:py-16 py-12 w-full flex flex-col gap-y-6">
      <div className="flex flex-col items-center pb-6 gap-2" id="biography">
        <p className="text-3xl text-gray-900 dark:text-white text-center">
          {t("biography")}
        </p>
      </div>

      {/* 求職條件 */}
      <div className="px-4">
        <div
          data-aos="fade-up"
          className="dark:bg-gray-800 bg-slate-100 rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
            💼 {t("jobRequirements")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">{t("desiredPosition")}：</span>
                {t("desiredPositionValue")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">{t("desiredIndustry")}：</span>
                {t("desiredIndustryValue")}
              </p>
            </div>
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">{t("expectedSalary")}：</span>
                {t("expectedSalaryValue")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">{t("availableDate")}：</span>
                {t("availableDateValue")}
              </p>
            </div>
          </div>
        </div>

        {/* 學歷 */}
        <div
          data-aos="fade-up"
          className="dark:bg-gray-800 bg-slate-100 rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-green-500 pb-2">
            🎓 {t("education")}
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("educationPhD")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("educationPhDPeriod")}
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("educationMaster")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("educationMasterPeriod")}
              </p>
            </div>
            <div className="border-l-4 border-blue-300 pl-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("educationBachelor")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("educationBachelorPeriod")}
              </p>
            </div>
          </div>
        </div>

        {/* 自傳 */}
        <div
          data-aos="fade-up"
          className="dark:bg-gray-800 bg-slate-100 rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-purple-500 pb-2">
            📖 {t("autobiography")}
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="indent-8">{t("autobiographyP1")}</p>
            <p className="indent-8">{t("autobiographyP2")}</p>
            <p className="indent-8">{t("autobiographyP3")}</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>{t("autobiographyAchievement1")}</li>
              <li>{t("autobiographyAchievement2")}</li>
              <li>{t("autobiographyAchievement3")}</li>
            </ul>
            {/* <p className="indent-8">{t("autobiographyP4")}</p> */}
          </div>
        </div>

        {/* 工作經歷 */}
        <div
          data-aos="fade-up"
          className="dark:bg-gray-800 bg-slate-100 rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-orange-500 pb-2">
            🏢 {t("workExperience")}
          </h2>

          {/* 第一份工作 */}
          <div className="mb-6">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                👨‍💻 {t("job1Title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {t("job1Period")} | {t("job1Company")}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">{t("techStack")}：</span>
                {t("job1TechStack")}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">{t("role")}：</span>
                {t("job1Role")}
              </p>
            </div>

            <div className="space-y-3 pl-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  🔹{t("job1Project1Title")}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 pl-4 space-y-1">
                  <li>{t("job1Project1Detail1")}</li>
                  <li>{t("job1Project1Detail2")}</li>
                  <li>{t("job1Project1Detail3")}</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  🔹{t("job1Project2Title")}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 pl-4 space-y-1">
                  <li>{t("job1Project2Detail1")}</li>
                  <li>{t("job1Project2Detail2")}</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  🔹{t("job1Project3Title")}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 pl-4 space-y-1">
                  <li>{t("job1Project3Detail1")}</li>
                  <li>{t("job1Project3Detail2")}</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  🔹{t("job1Project4Title")}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 pl-4 space-y-1">
                  <li>{t("job1Project4Detail1")}</li>
                  <li>{t("job1Project4Detail2")}</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  🔹{t("job1Project5Title")}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 pl-4 space-y-1">
                  <li>{t("job1Project5Detail1")}</li>
                  <li>{t("job1Project5Detail2")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 第二份工作 */}
          <div className="mb-6">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 mb-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                👨‍💻 {t("job2Title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {t("job2Period")} | {t("job2Company")}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">{t("techStack")}：</span>
                {t("job2TechStack")}
              </p>
            </div>

            <div className="space-y-2 pl-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  🔹{t("job2ProjectTitle")}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 pl-4 space-y-1">
                  <li>{t("job2ProjectDetail1")}</li>
                  <li>{t("job2ProjectDetail2")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 專業技能 */}
        <div
          data-aos="fade-up"
          className="dark:bg-gray-800 bg-slate-100 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-red-500 pb-2">
            🛠️ {t("coreSkills")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t("backendFullStack")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>{t("skillBackend1")}</li>
                <li>{t("skillBackend2")}</li>
                <li>{t("skillBackend3")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t("frontend")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>{t("skillFrontend1")}</li>
                <li>{t("skillFrontend2")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t("manufacturingIntegration")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>{t("skillManufacturing1")}</li>
                <li>{t("skillManufacturing2")}</li>
                <li>{t("skillManufacturing3")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t("engineeringPractice")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>{t("skillEngineering1")}</li>
                <li>{t("skillEngineering2")}</li>
                <li>{t("skillEngineering3")}</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("continuousLearning")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t("skillLearning")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

