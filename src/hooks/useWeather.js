// src/hooks/useWeather.js
import { useEffect, useState } from "react";

export default function useWeather(city = "Jaipur") {
  const [weather, setWeather] = useState({
    city,
    temp: null,
    condition: "Loading...",
    humidity: "--",
    wind: "--",
    loading: true,
    error: null,
  });

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
          condition: data.weather[0].main,
          humidity: `${data.main.humidity}%`,
          wind: `${data.wind.speed} m/s`,
          loading: false,
          error: null,
        });
      } catch (error) {
        setWeather({
          city,
          temp: null,
          condition: "Weather unavailable",
          humidity: "--",
          wind: "--",
          loading: false,
          error: error.message,
        });
      }
    }

    fetchWeather();
  }, [city]);

  return weather;
}
