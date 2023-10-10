export interface CityParams {
  key: string;
  location: string;
  adm?: string;
  range?: string;
  number?: number;
  lang?: string;
}
export interface CityDto {
  adm1: string;
  adm2: string;
  country: string;
  fxLink: string;
  id: string;
  isDst: number;
  lat: number;
  lon: number;
  name: string;
  rank: number;
  type: string;
  tz: string;
  utcOffset: string;
}

export interface WeatherNowParams {
  key: string;
  location: string;
  lang?: string;
  unit?: 'm' | 'i';
}

export interface WeatherNowDto {
  obsTime: string;
  temp: number;
  feelsLike: number;
  icon: number;
  text: string;
  wind360: number;
  windDir: string;
  windScale: number;
  windSpeed: number;
  humidity: number;
  precip: number;
  pressure: number;
  vis: number;
  cloud: number;
  dew: number;
}
