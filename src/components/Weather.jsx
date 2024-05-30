import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { getData } from "../utils/api";
import LoadingSpinner from "../assets/images/loading";
import { useTranslation } from "react-i18next";
import { contryData } from "../assets/data/ContryData";
const Weather = () => {
  const chartRef = useRef(null);
  const [apiData, setApiData] = useState(null);

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  // 取得使用者位置
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("目前設定/瀏覽器不支援取得位置");
    }
  };

  // 開啟網頁就先取得座標位置
  useEffect(() => {
    handleGetLocation();
  }, []);

  // 當取得瀏覽器座標後，打 api 取得當前座標的台灣地址。然後取"縣市"之後要打天氣 api
  useEffect(() => {
    if (coordinates !== null) {
      const baseUrl = "https://nominatim.openstreetmap.org/reverse?format=json";
      const apiUrl = `${baseUrl}&lat=${coordinates.latitude}&lon=${coordinates.longitude}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const address = data.display_name;
          console.log("address", address);

          const reorderAddress = (apiResult) => {
            const addressArray = apiResult.split(", ").reverse();
            const reorderedAddressArray = addressArray.filter(
              (part) => part !== "臺灣"
            );
            const reorderedAddress = reorderedAddressArray.join("");

            return reorderedAddress;
          };
          const reorderedAddress = reorderAddress(address);

          const cleanedAddress = reorderedAddress
            .replace(/^\d{3,5}/, "")
            .slice(0, 3);

          // 檢查cleanedAddress是否在data清單中
          const isInData = contryData.some((item) =>
            item.value.startsWith(cleanedAddress)
          );
          if (isInData) {
            setSelectedOption(cleanedAddress);
          } else {
            setSelectedOption("臺南市");
          }
        })
        .catch((error) => {
          console.error("Error:", "呼叫次數/頻率過高，導致呼叫已受到限制");
          console.error("Error:", error);
        });
    }
  }, [coordinates]);

  // 當有選擇縣市時，打氣象局 api 取得資料
  useEffect(() => {
    if (selectedOption) {
      let weatherUrl = `locationName=${selectedOption}&elementName=MinT,MaxT`;
      getData(weatherUrl).then((result) => {
        if (result.result) {
          const [data] = result.records?.location;
          setApiData(data);
        } else {
          setApiData({});
        }
      });
    }
  }, [selectedOption]);

  // 下面這串是取得氣象局資料後，將資料代入圖表中
  useEffect(() => {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "line",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: 6,
        curve: "smooth",
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 40,
          right: 40,
          top: 0,
        },
      },
      series: [
        {
          name: "最高溫",
          data: [
            apiData
              ? apiData.weatherElement[1]?.time[0]?.parameter?.parameterName
              : "",
            apiData
              ? apiData.weatherElement[1]?.time[1]?.parameter?.parameterName
              : "",
            apiData
              ? apiData.weatherElement[1]?.time[2]?.parameter?.parameterName
              : "",
          ],
          color: "#E0550D",
        },
        {
          name: "最低溫",
          data: [
            apiData
              ? apiData.weatherElement[0]?.time[0]?.parameter?.parameterName
              : "",
            apiData
              ? apiData.weatherElement[0]?.time[1]?.parameter?.parameterName
              : "",
            apiData
              ? apiData.weatherElement[0]?.time[2]?.parameter?.parameterName
              : "",
          ],
          color: "gray",
        },
      ],
      legend: {
        show: true,
      },
      xaxis: {
        categories: [
          apiData
            ? apiData.weatherElement[0].time[0].startTime
                .slice(5, 11)
                .replace("-", "/") +
              apiData.weatherElement[0].time[0].startTime.slice(11, 16)
            : "",
          apiData
            ? apiData.weatherElement[0].time[1].startTime
                .slice(5, 11)
                .replace("-", "/") +
              apiData.weatherElement[0].time[1].startTime.slice(11, 16)
            : "",
          apiData
            ? apiData.weatherElement[0].time[2].startTime
                .slice(5, 11)
                .replace("-", "/") +
              apiData.weatherElement[0].time[2].startTime.slice(11, 16)
            : "",
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [apiData]);

  return (
    <div className="container sm:py-16 py-12 w-full flex flex-col ">
      <div className=" w-full  relative bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        {!apiData && (
          <>
            <div className="absolute w-full inset-0 h-full flex items-center justify-center gap-x-4">
              <LoadingSpinner />{" "}
              <p className="text-sm text-gray-900 dark:text-white pt-0  md:pt-4 z-10">
                {t("loadingWeatherAPI")}
              </p>
            </div>
          </>
        )}
        <div className="flex flex-col-reverse  sm:justify-between sm:flex-row">
          <p className="text-base text-gray-900 dark:text-white pt-2  md:pt-2 ">
            {t("weathertitle")} {selectedOption && "- " + selectedOption}
          </p>
          <DropdownButton
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            contryData={contryData}
          />
        </div>

        <div id="line-chart" ref={chartRef}></div>
        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-2.5"></div>
      </div>
    </div>
  );
};

export default Weather;

const DropdownButton = ({ selectedOption, setSelectedOption, contryData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="h-10 text-black bg-transparent hover:bg-gray-200 border font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:text-white"
        type="button"
      >
        {selectedOption || "選擇縣市"}
      </button>
      {isOpen && (
        <div className="z-10 absolute h-52 mt-1 w-36  overflow-y-scroll bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {contryData.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleOptionClick(item.value)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
