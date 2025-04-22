import { BannerProps, SelectOption } from '@/type/common.ts';
import { generateFakeUUIDv4 } from '@/utils/generateUUID.ts';
import bgSlider1 from '@/assets/images/bg/bg-slide1.svg';

export const AllTicketCategory: SelectOption[] = [
  {
    name: 'فنی',
    value: '1',
  },
  {
    name: 'استعلام سجام',
    value: '۲',
  },
];

export const BannerData: BannerProps[] = [
  {
    id: generateFakeUUIDv4(),
    bgBanner: bgSlider1,
  },
  {
    id: generateFakeUUIDv4(),
    bgBanner: bgSlider1,
  },
  {
    id: generateFakeUUIDv4(),
    bgBanner: bgSlider1,
  },
];
