import { FunctionComponent } from 'react';

interface DepositSvgProps {
  color?: string;
}

const DepositSvg: FunctionComponent<DepositSvgProps> = (props) => {
  const { color = '#fff' } = props;

  return (
    <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21.6712 14.6755H17.7845C16.3693 14.6755 15.2217 13.5279 15.2217 12.1117C15.2217 10.6964 16.3693 9.54883 17.7845 9.54883H21.6407'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M18.2221 12.0527H17.9249'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8.5 8H12.5'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.5 10L10.5 6'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.21411 12.253C3.21411 5.84816 5.53887 3.71387 12.5151 3.71387C19.4903 3.71387 21.8151 5.84816 21.8151 12.253C21.8151 18.6568 19.4903 20.792 12.5151 20.792C5.53887 20.792 3.21411 18.6568 3.21411 12.253Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default DepositSvg;
