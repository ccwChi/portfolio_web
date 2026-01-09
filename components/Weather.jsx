"use client";
import React, { useEffect, useRef, useState } from "react";
import { getData } from "../utils/api";
import { useTranslation } from "react-i18next";
import { contryData } from "../assets/data/ContryData";

// 天氣圖示
const WeatherIcon = ({ description, size = "text-4xl" }) => {
  const getIcon = () => {
    if (!description) return "🌤️";
    if (description.includes("雨")) return "🌧️";
    if (description.includes("雲")) return "☁️";
    if (description.includes("晴")) return "☀️";
    if (description.includes("雷")) return "⚡";
    if (description.includes("雪")) return "❄️";
    return "🌤️";
  };
  return <span className={size}>{getIcon()}</span>;
};

// 城市選擇器
const CitySelector = ({ selected, setSelected, data }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-white text-sm font-medium transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {selected || "選擇地區"}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-30 right-0 mt-2 w-44 max-h-64 overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          {data.map((item, i) => (
            <button
              key={i}
              onClick={() => { setSelected(item.value); setOpen(false); }}
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${selected === item.value
                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
            >
              {item.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Loading
const Loading = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="w-10 h-10 border-3 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
    <p className="text-gray-500 mt-4 text-sm">載入天氣資訊中...</p>
  </div>
);

// 天氣組件
const Weather = () => {
  const chartRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const { t } = useTranslation();

  // 獲取位置
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoordinates({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        () => setSelectedOption("臺北市")
      );
    } else {
      setSelectedOption("臺北市");
    }
  }, []);

  // 經緯度轉地區
  useEffect(() => {
    if (!coordinates.latitude || !coordinates.longitude) return;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.latitude}&lon=${coordinates.longitude}`)
      .then((r) => r.json())
      .then((data) => {
        const addr = data?.display_name;
        if (!addr) { setSelectedOption("臺北市"); return; }
        const cleaned = addr.split(", ").reverse().filter((p) => p !== "臺灣").join("").replace(/^\d{3,5}/, "").slice(0, 3);
        const found = contryData.some((item) => item.value.startsWith(cleaned));
        setSelectedOption(found ? cleaned : "臺北市");
      })
      .catch(() => setSelectedOption("臺北市"));
  }, [coordinates]);

  // 獲取天氣
  useEffect(() => {
    if (!selectedOption) return;
    setApiData(null);
    getData(`locationName=${selectedOption}&elementName=MinT,MaxT,Wx`)
      .then((res) => {
        if (res?.success === "true" && res?.records?.location?.[0]) {
          setApiData(res.records.location[0]);
        }
      })
      .catch(() => { });
  }, [selectedOption]);

  // 圖表
  useEffect(() => {
    if (!apiData || !chartRef.current) return;
    const minT = apiData.weatherElement?.find((e) => e.elementName === "MinT");
    const maxT = apiData.weatherElement?.find((e) => e.elementName === "MaxT");
    if (!minT || !maxT) return;

    const isDark = document.documentElement.classList.contains("dark");
    const textColor = isDark ? "#9ca3af" : "#6b7280";
    const gridColor = isDark ? "#374151" : "#e5e7eb";

    const options = {
      chart: {
        height: 280,
        type: "line",
        toolbar: { show: false },
        fontFamily: "Inter, sans-serif",
        background: "transparent",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.1,
        },
      },
      stroke: { width: 3, curve: "smooth" },
      colors: ["#ef4444", "#3b82f6"],
      markers: {
        size: 6,
        strokeWidth: 2,
        strokeColors: isDark ? "#1f2937" : "#fff",
        hover: { size: 8 },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}°`,
        offsetY: -8,
        style: { fontSize: "12px", colors: [textColor] },
        background: { enabled: false },
      },
      series: [
        { name: "最高溫", data: maxT.time.map((t) => parseInt(t.parameter.parameterName)) },
        { name: "最低溫", data: minT.time.map((t) => parseInt(t.parameter.parameterName)) },
      ],
      xaxis: {
        categories: minT.time.map((t) => {
          const d = new Date(t.startTime);
          return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:00`;
        }),
        labels: { style: { colors: textColor, fontSize: "11px" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: {
          formatter: (val) => `${val}°C`,
          style: { colors: textColor },
        },
      },
      grid: {
        borderColor: gridColor,
        strokeDashArray: 4,
        padding: { left: 10, right: 10 },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        labels: { colors: textColor },
        markers: { radius: 12 },
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
        y: { formatter: (val) => `${val}°C` },
      },
    };

    let chart;
    import("apexcharts").then((mod) => {
      const ApexCharts = mod.default;
      chart = new ApexCharts(chartRef.current, options);
      chart.render();
    });

    return () => {
      if (chart) chart.destroy();
    };
  }, [apiData]);

  // 當前天氣資訊
  const currentWeather = (() => {
    if (!apiData?.weatherElement) return null;
    const minT = apiData.weatherElement.find((e) => e.elementName === "MinT");
    const maxT = apiData.weatherElement.find((e) => e.elementName === "MaxT");
    const wx = apiData.weatherElement.find((e) => e.elementName === "Wx");
    if (!minT || !maxT) return null;
    return {
      minTemp: minT.time[0]?.parameter.parameterName,
      maxTemp: maxT.time[0]?.parameter.parameterName,
      description: wx?.time[0]?.parameter.parameterName,
    };
  })();

  return (
    <div className="container sm:py-16 py-12 w-full">
      <div className="relative w-full rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {currentWeather && <WeatherIcon description={currentWeather.description} size="text-5xl" />}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t("weathertitle")}</h2>
              {selectedOption && (
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{selectedOption}</p>
              )}
            </div>
          </div>
          <CitySelector selected={selectedOption} setSelected={setSelectedOption} data={contryData} />
        </div>

        {/* 溫度顯示 */}
        {currentWeather && (
          <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
            <span className="text-5xl font-light text-gray-800 dark:text-white">
              {currentWeather.maxTemp}°
            </span>
            <span className="text-2xl text-gray-400">
              / {currentWeather.minTemp}°
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              {currentWeather.description}
            </span>
          </div>
        )}

        {/* Content */}
        {!apiData ? (
          <Loading />
        ) : (
          <div ref={chartRef} />
        )}

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-400 text-right">
            資料來源：中央氣象局
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
