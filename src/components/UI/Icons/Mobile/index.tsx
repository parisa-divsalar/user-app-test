import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const MobileSvg = () => {
  const theme = useSelector(themeSelector);

  return (
    <svg width='17' height='23' viewBox='0 0 17 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.5 17H8.51M4.7 21.5H12.3C13.4201 21.5 13.9802 21.5 14.408 21.282C14.7843 21.0903 15.0903 20.7843 15.282 20.408C15.5 19.9802 15.5 19.4201 15.5 18.3V4.7C15.5 3.57989 15.5 3.01984 15.282 2.59202C15.0903 2.21569 14.7843 1.90973 14.408 1.71799C13.9802 1.5 13.4201 1.5 12.3 1.5H4.7C3.5799 1.5 3.01984 1.5 2.59202 1.71799C2.21569 1.90973 1.90973 2.21569 1.71799 2.59202C1.5 3.01984 1.5 3.5799 1.5 4.7V18.3C1.5 19.4201 1.5 19.9802 1.71799 20.408C1.90973 20.7843 2.21569 21.0903 2.59202 21.282C3.01984 21.5 3.57989 21.5 4.7 21.5ZM9 17C9 17.2761 8.77614 17.5 8.5 17.5C8.22386 17.5 8 17.2761 8 17C8 16.7239 8.22386 16.5 8.5 16.5C8.77614 16.5 9 16.7239 9 17Z'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MobileSvg;
