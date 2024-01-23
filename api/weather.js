const fetch = require('node-fetch');

let cachedData;
let lastApiCallTime;

module.exports = async (req, res) => {
  const TEN_MINUTES = 600000; // 10 minutes in milliseconds
  const currentTime = new Date().getTime();

  if (cachedData && currentTime - lastApiCallTime < TEN_MINUTES) {
    return res.json(cachedData);
  }

  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&appid=${apiKey}&units=metric`);
  const data = await response.json();

  cachedData = {
    temp: `${data.main.temp} °C`,
    description: data.weather[0].description,
    time: currentTime
  };
  lastApiCallTime = currentTime;

  res.json(cachedData);
};

