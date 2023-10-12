import { getAxiosInstance } from 'src/boot/axios';
import { CityParams, WeatherNowParams } from 'src/model/service/weatherModels';

const weatherAxiosInstance = getAxiosInstance(process.env.weatherApi!)

export const weatherService = {
  defaultParams: {
    key: '8719da4ab566422ab70a73b9b6b1edc9',
  },
  getCities: (params: CityParams) => {
    return weatherAxiosInstance.get('/v2/city/lookup', { params });
  },
  getWeatherNow: (params: WeatherNowParams) => {
    return weatherAxiosInstance.get('/v7/weather/now', { params });
  },
};
