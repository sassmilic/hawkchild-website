import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

// Mapping of weather codes to Unicode symbols
const weatherSymbols = {
  'Thunderstorm': '⛈',
  'Drizzle': '⛆',
  'Rain': '⛆',
  'Snow': '❄',
  'Mist': '░',
  'Smoke': '☁',
  'Haze': '░',
  'Dust': '☁',
  'Fog': '░',
  'Sand': '☁',
  'Ash': '☁',
  'Squall': '☁',
  'Tornado': '☁',
  'Clear': '☀',
  'Clouds': '☁',
};

const GlasgowInfo = ({ width }) => {
  const [currentTime, setCurrentTime] = useState(moment().tz('Europe/London'));
  const [weatherData, setWeatherData] = useState({
    date: '',
    time: '',
    temp: '',
    description: '',
    mainWeather: '',
  });

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentTime(moment().tz('Europe/London'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const weatherDataKey = 'weatherData';
      const cachedWeatherData = localStorage.getItem(weatherDataKey);
      const now = new Date();

      if (cachedWeatherData) {
        const { date, data } = JSON.parse(cachedWeatherData);
        const lastFetchedTime = new Date(date);
        const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

        if (now - lastFetchedTime < fiveMinutes) {
          console.log('Loading weather data from local cache');
          setWeatherData(data);
          return;
        } else {
          console.log('Local cache is outdated, querying from API');
        }
      } else {
        console.log('No local cache found, querying from API');
      }

      try {
        const response = await fetch('/api/weather');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Weather data queried from API');

        setWeatherData({
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString(),
          temp: data.temp,
          description: data.description,
          mainWeather: data.mainWeather,
        });

        // Cache the new data along with the current date and time
        localStorage.setItem(weatherDataKey, JSON.stringify({ date: now, data: data }));
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="glasgow-info" style={{ width: width }}>
      <div className="location">
        <p>Glasgow, Scotland</p>
        <p>⌖55.8642° N, 4.2518° W</p>
      </div>
      <div>
        <p>{currentTime.format('DD MMM YYYY')}</p>
        <p>{currentTime.format('hh:mm:ss A')}</p>
      </div>
      <div>
        <p>{weatherData.temp}</p>
        <p>{weatherData.description}</p>
      </div>
    </div>
  );
};

export default GlasgowInfo;

