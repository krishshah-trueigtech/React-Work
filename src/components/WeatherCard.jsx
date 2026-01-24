import React, { useMemo } from "react";
import "../Styles/WeatherApp.css";

const getWeatherStatus = (code) => {
  if (code === 0) return { label: "Clear Sky", icon: "☀️" };
  if (code >= 1 && code <= 3) return { label: "Partly Cloudy", icon: "⛅" };
  if (code >= 45 && code <= 48) return { label: "Foggy", icon: "🌫️" };
  if (code >= 51 && code <= 67) return { label: "Rainy", icon: "🌧️" };
  if (code >= 71) return { label: "Snow", icon: "❄️" };
  return { label: "Unknown", icon: "🌡️" };
};

const WeatherCard = ({ weatherData }) => {
  const { label, icon } = useMemo(() => {
    return getWeatherStatus(weatherData.weathercode);
  }, [weatherData.weathercode]);

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>Ujjain, India</h2>
        <span className="weather-coords">23.17°N, 75.78°E</span>
      </div>

      <div className="weather-body">
        <div className="weather-icon">{icon}</div>
        <div className="weather-temp">
          {weatherData.temperature}
          <span className="weather-unit">°C</span>
        </div>
        <div className="weather-status">{label}</div>
      </div>

      <div className="weather-footer">
        <div className="stat-item">
          <span className="stat-label">Wind</span>
          <span className="stat-value">{weatherData.windspeed} km/h</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Direction</span>
          <span className="stat-value">{weatherData.winddirection}°</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WeatherCard);
