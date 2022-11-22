import ClimateToday from "./components/ClimateToday";
import ClimateHours from "./components/ClimateHours";
import ClimateWeek from "./components/ClimateWeek";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cityData, setCityData] = useState(null);
  const [today, setToday] = useState(null);
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [city, setCity] = useState("lima");
  const [search, setSearch] = useState("lima");

  function getDays(array) {
    let listDays = [];
    listDays.push(array[0]);
    array.forEach((element, index) => {
      const dateA = element.dt_txt.split(" ");
      if (index + 1 !== array.length) {
        const dateB = array[index + 1].dt_txt.split(" ");
        if (dateA[0] !== dateB[0]) listDays.push(array[index + 1]);
      }
    });
    return listDays;
  }
  function getHours(data) {
    const newData = data.slice(0, 5);
    return newData;
  }

  useEffect(() => {
    async function name() {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_KEY_ID
        }&units=metric`
      );
      console.log(data);
      setCityData(data.city);
      setToday(data.list[0]);
      setDays(getDays(data.list));
      setHours(getHours(data.list));
    }
    name();
  }, [city]);

  return (
    <div className=" 2xl:container mx-auto grid grid-cols-1 lg:grid-cols-4  gap-y-3  bg-[#100E1C] text-[#E3E8E9] font-ubuntu">
      <div className=" px-2 py-4 lg:bg-[#1E213B] bg-[#100E1C]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCity(search);
          }}
        >
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-[#E3E8E9] bg-[#1E213B] rounded border border-[#E3E8E9]"
              placeholder="Search City ..."
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="space-y-6 list-none px-5 mt-8 hidden lg:block">
          <li
            className="border border-[#1E213B] rounded hover:border-[#E3E8E9] p-3 cursor-pointer"
            onClick={() => {
              setCity("lima");
            }}
          >
            Lima
          </li>
          <li
            className="border border-[#1E213B] rounded hover:border-[#E3E8E9] p-3 cursor-pointer"
            onClick={() => {
              setCity("barcelona");
            }}
          >
            Barcelona
          </li>
          <li
            className="border border-[#1E213B] rounded hover:border-[#E3E8E9] p-3 cursor-pointer"
            onClick={() => {
              setCity("new york");
            }}
          >
            New York
          </li>
        </div>
      </div>
      <div className=" col-span-3  lg:px-24 ">
        <ClimateToday data={today} city={cityData} />

        <ClimateHours data={hours} />

        <ClimateWeek data={days} />
      </div>
    </div>
  );
}

export default App;
