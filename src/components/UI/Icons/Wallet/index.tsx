import { FunctionComponent } from 'react';

interface WalletSvgProps {
  color?: string;
}

const WalletSvg: FunctionComponent<WalletSvgProps> = (props) => {
  const { color = '#fff' } = props;

  return (
    <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.5 16L18.5 9'
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
      <circle cx='10' cy='11.5' r='2.45' stroke={color} stroke-width='2.1' />
      <path
        d='M14.5 23H18.5'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.5 23H10.5'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default WalletSvg;
