import { IconProps } from './icon.types';

export const ChevronRight = ({
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
        d="M6.11523 20.23L7.88523 22L17.8852 12L7.88523 2L6.11523 3.77L14.3452 12L6.11523 20.23Z"
        fill={color}
      />
    </svg>
  );
};

export const ChevronRightIcon = ChevronRight;
