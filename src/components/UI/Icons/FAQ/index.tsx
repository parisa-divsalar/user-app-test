import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const FAQSvg = () => {
  const theme = useSelector(themeSelector);

  return (
    <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.499 15V15.0396M8.25 7.72999C8.25 6.46388 9.25736 5.4375 10.5 5.4375C11.7426 5.4375 12.75 6.46388 12.75 7.72999C12.75 8.9961 11.7426 10.0225 10.5 10.0225C10.5 10.0225 10.499 10.7067 10.499 11.5508M19.5 10.5C19.5 15.4706 15.4706 19.5 10.5 19.5C5.52944 19.5 1.5 15.4706 1.5 10.5C1.5 5.52944 5.52944 1.5 10.5 1.5C15.4706 1.5 19.5 5.52944 19.5 10.5Z'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default FAQSvg;
