import React from "react";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function ClimateWeek({ data }) {
  if (data === null) return;
  return (
    <>
      <h4 className="text-center py-6">NEXT DAYS</h4>
      <div className="flex justify-around flex-wrap gap-y-4 pb-7">
        {data.map((el) => (
          <div className="w-28 h-38 flex py-4 flex-col justify-center rounded  items-center bg-[#1E213B]">
            <h4>{days[new Date(el.dt_txt).getDay()]}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@4x.png`}
              className="h-24 w-24 "
              alt=""
            />
            <div>
              {parseInt(el.main.temp_min)}{" "}
              <span className="text-gray-400">°c</span> -{" "}
              {parseInt(el.main.temp_max)}{" "}
              <span className="text-gray-400">°c</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ClimateWeek;
