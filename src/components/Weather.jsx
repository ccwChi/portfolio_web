import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { getData } from "../utils/api";
import LoadingSpinner from "../assets/images/loading";
import { useTranslation } from "react-i18next";

const Weather = () => {
  const chartRef = useRef(null);
  const [apiData, setApiData] = useState(null);

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const [location, setLocation] = useState(null);
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
  useEffect(() => {
    handleGetLocation();
  }, []);

  useEffect(() => {
    if (coordinates !== null) {
      const baseUrl = "https://nominatim.openstreetmap.org/reverse?format=json";
      const apiUrl = `${baseUrl}&lat=${coordinates.latitude}&lon=${coordinates.longitude}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const address = data.display_name;

          const reorderAddress = (apiResult) => {
            const addressArray = apiResult.split(", ").reverse();
            const reorderedAddressArray = addressArray.filter(
              (part) => part !== "臺灣"
            );
            const reorderedAddress = reorderedAddressArray.join("");

            return reorderedAddress;
          };
          const reorderedAddress = reorderAddress(address);

          setLocation(reorderedAddress.slice(3, 6));
        })
        .catch((error) => {
          console.error("Error:", "呼叫次數/頻率過高，導致呼叫已受到限制");
          console.error("Error:", error);
        });
    }
  }, [coordinates]);

  useEffect(() => {
    if (location) {
      let weatherUrl = `locationName=${location}&elementName=MinT,MaxT`;
      getData(weatherUrl).then((result) => {
        if (result.result) {
          const [data] = result.records?.location;
          setApiData(data);
        } else {
          setApiData({});
        }
      });
    }
  }, [location]);

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
        <div>
          <p className="text-base text-gray-900 dark:text-white pt-0  md:pt-4 ">
            {t("weathertitle")} {location && "- " + location}
          </p>
        </div>

        <div id="line-chart" ref={chartRef}></div>
        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-2.5"></div>
      </div>
    </div>
  );
};

export default Weather;

// <div>
//         <h1>Geolocation Example</h1>
//         <button onClick={handleGetLocation}>Get Location</button>
//         {coordinates.latitude && coordinates.longitude && (
//           <div>
//             <p className="text-3xl text-gray-900 dark:text-white">
//               Latitude: {coordinates.latitude ? coordinates.latitude : ""}
//             </p>
//             <p className="text-3xl text-gray-900 dark:text-white">
//               Longitude: {coordinates.longitude ? coordinates.longitude : ""}
//             </p>
//             <p className="text-3xl text-gray-900 dark:text-white">
//               Addrss:{location || ""}
//             </p>
//           </div>
//         )}
//         {error && <p>Error: {error}</p>}
//       </div>
