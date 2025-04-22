import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const TicketSvg = () => {
  const theme = useSelector(themeSelector);

  return (
    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.3496 4.75049V7.17049'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14.3496 18.2603V20.2843'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14.3496 14.8249V10.0039'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M19.2021 20.5C21.0242 20.5 22.5 19.0426 22.5 17.2431V14.6506C21.2943 14.6506 20.3233 13.6917 20.3233 12.501C20.3233 11.3104 21.2943 10.3504 22.5 10.3504L22.499 7.75686C22.499 5.95745 21.0221 4.5 19.2011 4.5H5.79892C3.97789 4.5 2.50104 5.95745 2.50104 7.75686L2.5 10.4349C3.70567 10.4349 4.67668 11.3104 4.67668 12.501C4.67668 13.6917 3.70567 14.6506 2.5 14.6506V17.2431C2.5 19.0426 3.9758 20.5 5.79787 20.5H19.2021Z'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default TicketSvg;
