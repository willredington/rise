import { WeatherResponse } from '@/model/weather';
import React from 'react';

type Props = {
  temperature: number;
  unit: string;
};

export const CurrentTemperature: React.FC<Props> = ({ temperature, unit }) => {
  return <p>current temp</p>;
};

export default CurrentTemperature;
