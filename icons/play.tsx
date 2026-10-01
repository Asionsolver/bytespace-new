import { IconProps } from './icon.types';

export const Play = ({
  size = 72,
  color = 'currentColor',
  ...props
}: IconProps) => {
  const numericSize = typeof size === 'number' ? size : Number(size);

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36 6C19.44 6 6 19.44 6 36C6 52.56 19.44 66 36 66C52.56 66 66 52.56 66 36C66 19.44 52.56 6 36 6ZM30 49.5V22.5L48 36L30 49.5Z"
        fill={color}
      />
    </svg>
  );
};
