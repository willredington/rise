import React from 'react';
import { format } from 'date-fns';

export const Header: React.FC = () => {
  const now = format(new Date(), 'EEE, MMMM d');
  return <p className="text-xl my-4">{now}</p>;
};

export default Header;
