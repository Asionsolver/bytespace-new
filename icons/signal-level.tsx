import { IconProps } from './icon.types';

export const SignalLevel = ({
  size = 24,
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
        d="M17 4H20V20H17V4ZM5 14H8V20H5V14ZM11 9H14V20H11V9Z"
        fill={color}
      />
    </svg>
  );
};
