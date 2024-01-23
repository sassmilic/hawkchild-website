require('dotenv').config();

const fetch = require('node-fetch');
const Redis = require('ioredis');

const redis = new Redis(process.env.REDIS_URL); 

module.exports = async (req, res) => {
  const TEN_MINUTES = 600000; // 10 minutes in milliseconds
  const currentTime = new Date().getTime();
  const cacheKey = 'weatherData';
  const cachedData = await redis.get(cacheKey);


  let data;
  if (cachedData) {
    data = JSON.parse(cachedData);
    if (cachedData && currentTime - data['time'] < TEN_MINUTES) {
      console.log("data is cached");
      return res.json(data);
    }
  }
  // otherwise, make API call
  const apiKey = process.env.WEATHER_API_KEY;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&appid=${apiKey}&units=metric`);
  data = await response.json();

  const newData = {
    temp: `${data.main.temp} °C`,
    description: data.weather[0].description,
    time: currentTime
  };

  await redis.set(cacheKey, JSON.stringify(newData));
  return res.json(newData);
};

