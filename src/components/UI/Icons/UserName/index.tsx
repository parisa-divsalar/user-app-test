import { useSelector } from 'react-redux';
import { themeSelector } from '@/store/common/commonSelector.ts';

const UserNameSvg = () => {
  const theme = useSelector(themeSelector);

  return (
    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.5 16H8C6.60444 16 5.90665 16 5.33886 16.1722C4.06045 16.56 3.06004 17.5605 2.67224 18.8389C2.5 19.4067 2.5 20.1044 2.5 21.5M15 8C15 10.4853 12.9853 12.5 10.5 12.5C8.01472 12.5 6 10.4853 6 8C6 5.51472 8.01472 3.5 10.5 3.5C12.9853 3.5 15 5.51472 15 8ZM11.5 21.5L14.6014 20.6139C14.7499 20.5715 14.8241 20.5502 14.8934 20.5184C14.9549 20.4902 15.0134 20.4558 15.0679 20.4158C15.1293 20.3707 15.1839 20.3161 15.2932 20.2068L21.75 13.75C22.4404 13.0597 22.4404 11.9403 21.75 11.25C21.0597 10.5596 19.9404 10.5596 19.25 11.25L12.7932 17.7068C12.6839 17.8161 12.6293 17.8707 12.5842 17.9321C12.5442 17.9866 12.5098 18.0451 12.4816 18.1066C12.4497 18.1759 12.4285 18.2501 12.3861 18.3987L11.5 21.5Z'
        stroke={theme === 'dark' ? '#F5F9FC' : '#0D446B'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UserNameSvg;
