import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const InfoSvg = () => {
  const theme = useSelector(themeSelector);

  return (
    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 16.5V12.5M12.5 8.5H12.51M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5Z'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default InfoSvg;
