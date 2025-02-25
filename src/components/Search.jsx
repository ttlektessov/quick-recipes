import { useEffect, useState, useRef } from "react";
const URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    if (foodData.length === 0) {
      async function fetchData() {
        const response = await fetch(
          `${URL}/complexSearch?query=${query}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setFoodData(data.results);
      }
      fetchData();
    }
  }, [query, foodData, setFoodData]);
  return (
    <div className="m-[20px_auto] w-full max-w-xs relative">
      <input
        className="border-b-1 border-[#393e46] p-[10px] w-full outline-none text-base font-semibold text-[#393e46]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
      ></input>
    </div>
  );
}
