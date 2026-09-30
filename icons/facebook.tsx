import React from 'react';
import { IconProps } from './icon.types';

export const Facebook = ({
  size = 22,
  color = 'currentColor',
  ...props
}: IconProps) => {
  const numericSize = typeof size === 'number' ? size : Number(size);

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill={color} />
      <path
        d="M13.5 12H15.5L16 9.5H13.5V8C13.5 7.3 13.8 6.7 14.8 6.7H16V4.4C15.8 4.4 14.9 4.3 13.9 4.3C11.8 4.3 10.5 5.6 10.5 8V9.5H8.5V12H10.5V19.5C11 19.6 11.5 19.7 12 19.7C12.5 19.7 13 19.6 13.5 19.5V12Z"
        fill="white"
      />
    </svg>
  );
};
