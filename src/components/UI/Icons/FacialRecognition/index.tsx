import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const FacialRecognitionSvg = () => {
  const theme = useSelector(themeSelector);

  return (
    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.5 3.5H8.3C6.61984 3.5 5.77976 3.5 5.13803 3.82698C4.57354 4.1146 4.1146 4.57354 3.82698 5.13803C3.5 5.77976 3.5 6.61984 3.5 8.3V8.5M8.5 21.5H8.3C6.61984 21.5 5.77976 21.5 5.13803 21.173C4.57354 20.8854 4.1146 20.4265 3.82698 19.862C3.5 19.2202 3.5 18.3802 3.5 16.7V16.5M21.5 8.5V8.3C21.5 6.61984 21.5 5.77976 21.173 5.13803C20.8854 4.57354 20.4265 4.1146 19.862 3.82698C19.2202 3.5 18.3802 3.5 16.7 3.5H16.5M21.5 16.5V16.7C21.5 18.3802 21.5 19.2202 21.173 19.862C20.8854 20.4265 20.4265 20.8854 19.862 21.173C19.2202 21.5 18.3802 21.5 16.7 21.5H16.5M8 8.5V10M17 8.5V10M11.5 13.1001C12.3 13.1001 13 12.4001 13 11.6001V8.5M15.7002 15.7C13.9002 17.5 11.0002 17.5 9.2002 15.7'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default FacialRecognitionSvg;
