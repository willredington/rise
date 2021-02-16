export type WeatherResponse = {
  current: {
    observation_time: string;
    temperature: number;
    weather_code: number;
    weather_icons: string[];
    weather_descriptions: string[];
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: number;
    uv_index: number;
    visibility: number;
  };
  forecast: {
    [key: string]: {
      date: string;
      date_epoch: string;
      mintemp: number;
      maxtemp: number;
      avgtemp: number;
      totalsnow: number;
      sunhour: number;
      uv_index: number;
      hourly: Array<{
        time: string;
        temperature: number;
        weather_code: number;
        weather_icons: string[];
        weather_descriptions: string[];
        wind_speed: number;
        wind_degree: number;
        wind_dir: string;
        pressure: number;
        precip: number;
        humidity: number;
        cloudcover: number;
        feelslike: number;
        uv_index: number;
        visibility: number;
        chanceofrain: number;
        chanceofremdry: number;
        chanceofwindy: number;
        chanceofovercast: number;
        chanceofsunshine: number;
        chanceoffrost: number;
        chanceofhightemp: number;
        chanceoffog: number;
        chanceofsnow: number;
        chanceofthunder: number;
      }>;
    };
  };
};
