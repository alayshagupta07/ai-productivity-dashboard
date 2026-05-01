import { useState } from "react";
import useWeather from "../hooks/useWeather";

export default function Weather() {
  const [inputCity, setInputCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const weather = useWeather(selectedCity);

  const handleSearch = (e) => {
    e.preventDefault();

    if (inputCity.trim() === "") {
      alert("Please enter a city name");
      return;
    }

    setSelectedCity(inputCity.trim());
  };

  return (
    <div className="panel weather">
      <h2>Weather Widget</h2>
      <p>Search weather for any city using your API.</p>

      <form className="weather-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {!selectedCity ? (
        <p>Enter a city name to check live weather.</p>
      ) : weather.loading ? (
        <p>Loading weather...</p>
      ) : weather.error ? (
        <div className="weather-error">
          <h3>Weather not found</h3>
          <p>{weather.error}</p>
        </div>
      ) : (
        <div className="weather-result">
          <h1>{weather.temp}°C</h1>
          <p>{weather.city} • {weather.condition}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind: {weather.wind}</p>
        </div>
      )}
    </div>
  );
}
