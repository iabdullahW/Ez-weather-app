import axios from "axios";
import { useState } from "react";
import Weather from "./Weather";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "9e476a6befe2321dc3bf29a3289f8995";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="h-full w-full relative bg-gradient-to-r from-blue-300 to-green-200">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold text-white mb-8">Weather App</h1>
        <input
          type="text"
          placeholder="Enter Location"
          className="w-[500px] py-3 px-6 text-center text-lg border border-gray-200 placeholder:text-gray-400 text-gray-600 rounded-3xl focus:outline-none bg-white bg-opacity-60 shadow-md"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
};

export default App;
