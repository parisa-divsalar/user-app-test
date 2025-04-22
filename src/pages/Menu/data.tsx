import { MenuListItemType } from '@/type/common.ts';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import AccountSvg from '@/components/UI/Icons/Account';
import SejamSvg from '@/components/UI/Icons/Sejam';
import ShieldSvg from '@/components/UI/Icons/Shield';
import TermsSvg from '@/components/UI/Icons/Terms';
import InfoSvg from '@/components/UI/Icons/Info';
import SupportSvg from '@/components/UI/Icons/Support';

export const MenuListItems: MenuListItemType[] = [
  {
    id: generateFakeUUIDv4(),
    title: 'حساب کاربری',
    code: 'PROFILE',
    icon: <AccountSvg />,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'دریافت اطلاعات از سجام',
    code: 'SEJAM',
    icon: <SejamSvg />,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'امنیت و حریم خصوصی',
    code: 'SECURITY',
    icon: <ShieldSvg />,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'قوانین و مقررات',
    code: 'TERMS',
    icon: <TermsSvg />,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'درباره بنکس',
    code: 'ABOUT',
    icon: <InfoSvg />,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'پشتیبانی',
    code: 'SUPPORT',
    icon: <SupportSvg />,
  },
];
