import Header from '@/component/layout/Header';
import { WeatherResponse } from '@/model/weather';
import { getWeatherForecast } from '@/service/weather';
import { GetServerSideProps } from 'next';
import React from 'react';

type Props = {
  weather: WeatherResponse;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { zipCode } = context.query;
  const response = await getWeatherForecast(zipCode as string);
  return {
    props: {
      weather: response.data,
    },
  };
};

export const ForecastPage: React.FC<Props> = ({ weather }) => {
  console.log('forecast', weather);

  return (
    <div className="flex justify-center bg-gray-800 h-screen text-white">
      <Header />
    </div>
  );
};

export default ForecastPage;
