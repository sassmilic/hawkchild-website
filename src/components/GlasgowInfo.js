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
      try {
        const response = await fetch('/api/weather'); // Adjust the URL to your API endpoint
        const data = await response.json();
        console.log('Raw response:', response);

        // Assuming the API returns date and time in a format that needs processing
        const dateTime = new Date();
        setWeatherData({
          date: dateTime.toLocaleDateString(),
          time: dateTime.toLocaleTimeString(),
          temp: data.temp,
          description: data.description,
          mainWeather: data.mainWeather,
        });
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchData();
  }, []);

  // Get the symbol for the current weather condition
  const weatherSymbol = weatherSymbols[weatherData.mainWeather] || '';
  console.log(weatherData.mainWeather);
  console.log(weatherSymbol);

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
        <p>{weatherSymbol}</p>
        <p>{weatherData.description}</p>
      </div>
    </div>
  );
};

export default GlasgowInfo;

