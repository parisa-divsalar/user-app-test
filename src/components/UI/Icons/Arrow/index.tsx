import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';
import { FunctionComponent } from 'react';

interface ArrowSvgProps {
  color?: string;
}

const ArrowSvg: FunctionComponent<ArrowSvgProps> = (props) => {
  const { color } = props;
  const theme = useSelector(themeSelector);

  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.13089 10.2951C9.09209 10.2564 9.0613 10.2104 9.0403 10.1598C9.01929 10.1092 9.00848 10.0549 9.00848 10.0001C9.00848 9.9453 9.01929 9.89103 9.0403 9.84041C9.0613 9.78979 9.09209 9.74381 9.13089 9.70511L12.9526 5.88427C13.187 5.64989 13.3188 5.33195 13.3189 5.0004C13.319 4.66885 13.1874 4.35085 12.953 4.11636C12.7186 3.88186 12.4006 3.75008 12.0691 3.75C11.7376 3.74992 11.4196 3.88155 11.1851 4.11594L7.3634 7.93761C6.81737 8.48514 6.51074 9.22684 6.51074 10.0001C6.51074 10.7734 6.81737 11.5151 7.3634 12.0626L11.1851 15.8843C11.4196 16.1187 11.7376 16.2503 12.0691 16.2502C12.4006 16.2501 12.7186 16.1184 12.953 15.8839C13.1874 15.6494 13.319 15.3314 13.3189 14.9998C13.3188 14.6683 13.187 14.3503 12.9526 14.1159L9.13089 10.2951Z'
        fill={color ? color : theme === 'dark' ? '#F5F9FC' : '#0D446B'}
      />
    </svg>
  );
};

export default ArrowSvg;
