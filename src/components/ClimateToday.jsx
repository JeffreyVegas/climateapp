function ClimateToday({ data, city }) {
  if (data === null || city === null) return;
  return (
    <div className=" flex flex-col md:flex-row justify-around items-center gap-10 px-2 ">
      <div className="flex flex-col ">
        <p className="text-4xl lg:text-4xl">
          {city.name}, {city.country}
        </p>
        <div className="flex items-center ">
          <p className="text-5xl lg:text-6xl">{parseInt(data.main.temp)}°</p>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              className=""
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-6 py-6 ">
        <div className="text-center rounded bg-[#1E213B] py-6 px-6 lg:px-16">
          <p>humidity</p>
          <p className="text-3xl lg:text-4xl mt-3 flex justify-center items-center gap-1">
            {data.main.humidity}
            <span className="lg:text-2xl text-gray-400 ">%</span>
          </p>
        </div>
        <div className="text-center rounded bg-[#1E213B] py-6 px-6 lg:px-16 ">
          <p>pressure</p>
          <p className="text-3xl lg:text-4xl mt-3 flex gap-1  justify-center items-center">
            {data.main.pressure}
            <span className="lg:text-3xl text-gray-400"> mb</span>
          </p>
        </div>
        <div className="text-center rounded bg-[#1E213B] py-4 px-6 lg:px-16 ">
          <p>windSpeed</p>
          <p className="text-3xl lg:text-4xl mt-3  flex justify-center items-center gap-1">
            {data.wind.speed}
            <span className="lg:text-2xl text-gray-400"> k/h</span>
          </p>
        </div>
        <div className="text-center rounded bg-[#1E213B] py-4 px-6 lg:px-16 ">
          <p>weather</p>
          <p className="text-3xl lg:text-4xl mt-3  flex justify-center">
            <span className="lg:text-2xl ">{data.weather[0].description}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClimateToday;
