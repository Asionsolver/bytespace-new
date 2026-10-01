import { IconProps } from './icon.types';

export const ChevronLeft = ({
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
        d="M17.8852 3.77L16.1152 2L6.11523 12L16.1152 22L17.8852 20.23L9.65523 12L17.8852 3.77Z"
        fill={color}
      />
    </svg>
  );
};

export const ChevronLeftIcon = ChevronLeft;
