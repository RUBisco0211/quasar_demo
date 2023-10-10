import { axiosInstance } from 'src/boot/axios';
import { CityParams, WeatherNowParams } from 'src/model/service/weatherModels';

export const weatherService = {
  defaultParams: {
    key: '8719da4ab566422ab70a73b9b6b1edc9',
  },
  getCities: (params: CityParams) => {
    return axiosInstance.get('/v2/city/lookup', { params });
  },
  getWeatherNow: (params: WeatherNowParams) => {
    return axiosInstance.get('/v7/weather/now', { params });
  },
};
