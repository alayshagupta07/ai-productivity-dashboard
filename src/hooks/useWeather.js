import { useEffect, useState } from "react";

export default function useWeather(city) {
  const [weather, setWeather] = useState({
    city: "",
    temp: null,
    condition: "",
    humidity: "--",
    wind: "--",
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!city) return;

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    async function fetchWeather() {
      try {
        setWeather((prev) => ({
          ...prev,
          loading: true,
          error: null,
        }));

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch weather data");
        }

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
          condition: "",
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
