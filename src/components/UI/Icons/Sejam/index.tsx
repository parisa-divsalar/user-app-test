import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const SejamSvg = () => {
  const theme = useSelector(themeSelector);

  return (
    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 2.5V8.5L14.5 6.5'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 8.5L10.5 6.5'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 12.5C3.5 12.5 3.5 14.29 3.5 16.5V17.5C3.5 20.26 3.5 22.5 8.5 22.5H16.5C20.5 22.5 21.5 20.26 21.5 17.5V16.5C21.5 14.29 21.5 12.5 17.5 12.5C16.5 12.5 16.22 12.71 15.7 13.1L14.68 14.18C13.5 15.44 11.5 15.44 10.31 14.18L9.3 13.1C8.78 12.71 8.5 12.5 7.5 12.5Z'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.5 12.5V8.50004C5.5 6.49004 5.5 4.83004 8.5 4.54004'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.5 12.5V8.50004C19.5 6.49004 19.5 4.83004 16.5 4.54004'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SejamSvg;
