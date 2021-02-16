import env from '@/env';
import { WeatherResponse } from '@/model/weather';
import axios from 'axios';

export function getWeatherForecast(zipCode: string) {
  return axios.get<WeatherResponse>('http://api.weatherstack.com/forecast', {
    params: {
      access_key: env.WEATHER_API_KEY,
      query: zipCode,
      units: 'f',
      forecast_days: 5,
      hourly: 1,
    },
  });
}
