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
