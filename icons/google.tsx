import React from 'react';
import { IconProps } from './icon.types';

export const Google = ({
  size = 20,
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
      <path
        d="M21.35 11.1H12V14.93H17.4C16.89 17.51 14.7 19.14 12 19.14C8.61 19.14 5.86 16.39 5.86 13C5.86 9.61 8.61 6.86 12 6.86C13.48 6.86 14.83 7.39 15.88 8.28L18.72 5.44C16.92 3.84 14.61 2.86 12 2.86C6.48 2.86 2 7.34 2 12.86C2 18.38 6.48 22.86 12 22.86C17.52 22.86 21.6 18.9 21.6 13.14C21.6 12.43 21.51 11.75 21.35 11.1Z"
        fill={color}
      />
    </svg>
  );
};
