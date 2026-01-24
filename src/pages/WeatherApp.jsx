import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/WeatherApp.css";

const getWeatherStatus = (code) => {
  if (code === 0) return { label: "Clear Sky", icon: "☀️" };
  if (code >= 1 && code <= 3) return { label: "Partly Cloudy", icon: "⛅" };
  if (code >= 45 && code <= 48) return { label: "Foggy", icon: "🌫️" };
  if (code >= 51 && code <= 67) return { label: "Rainy", icon: "🌧️" };
  if (code >= 71) return { label: "Snow", icon: "❄️" };
  return { label: "Unknown", icon: "🌡️" };
};

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=23.17&longitude=75.78&current_weather=true",
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="loading-state">Loading weather data...</div>;
  if (error) return <div className="error-state">Error: {error}</div>;

  const { current_weather } = data;
  const { label, icon } = getWeatherStatus(current_weather.weathercode);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="weather-header">
          <h2>Ujjain, India</h2>
          <span className="weather-coords">23.17°N, 75.78°E</span>
        </div>

        <div className="weather-body">
          <div className="weather-icon">{icon}</div>
          <div className="weather-temp">
            {current_weather.temperature}
            <span className="weather-unit">°C</span>
          </div>
          <div className="weather-status">{label}</div>
        </div>

        <div className="weather-footer">
          <div className="stat-item">
            <span className="stat-label">Wind</span>
            <span className="stat-value">{current_weather.windspeed} km/h</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Direction</span>
            <span className="stat-value">{current_weather.winddirection}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
