import { ServicesType } from '@/type/common.ts';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import arrowUp from '@/assets/images/icon/arrow-up.svg';
import invest from '@/assets/images/icon/invest.svg';
import receipt from '@/assets/images/icon/receipt.svg';
import wallet from '@/assets/images/icon/wallet.svg';
import globe from '@/assets/images/icon/globe.svg';
import simcard from '@/assets/images/icon/simcard.svg';
import ghabz from '@/assets/images/icon/ghabz.svg';
import charity from '@/assets/images/icon/charity.svg';
import { PrivateRoutes } from '@/config/routes.ts';

export const ServiceList: ServicesType[] = [
  {
    id: generateFakeUUIDv4(),
    title: 'برداشت ',
    href: '/transferMoney',
    icon: arrowUp,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'معاملات',
    href: PrivateRoutes.invest,
    icon: invest,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'تراکنش ها',
    href: PrivateRoutes.transaction,
    icon: receipt,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'کارت',
    icon: wallet,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'اینترنت ',
    icon: globe,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'شارژ',
    icon: simcard,
  },
  {
    id: generateFakeUUIDv4(),
    title: ' قبض',
    icon: ghabz,
  },
  {
    id: generateFakeUUIDv4(),
    title: 'نیکوکاری',
    icon: charity,
  },
];
