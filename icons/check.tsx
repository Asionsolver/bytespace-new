import { IconProps } from './icon.types';

export const Check = ({
  size = 16,
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
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export const CheckIcon = Check;
