import { ReactNode } from 'react';
import { AssetItem } from './AssetItem';
import useStyles from './useStyles';
import { GoldenMackIcon } from '../UI/Icons/transferMoney/GoldenMackIcon';
import { SavingMackIcon } from '../UI/Icons/transferMoney/SavingMackIcon';
import { HouseMackIcon } from '../UI/Icons/transferMoney/HouseMackIcon';
import { StockMarketIcon } from '../UI/Icons/transferMoney/StockMarketIcon';
import s1 from '@/assets/images/bg/Group1.png';
import s2 from '@/assets/images/bg/Group2.png';
import s3 from '@/assets/images/bg/Group3.png';
import s4 from '@/assets/images/bg/Group4.png';


export interface AssetsList {
  id: number;
  title: string;
  uniteNumber: number;
  inventory: string;
  progressValue: number;
  backgroundColor: string;
  maskIcon: ReactNode;
  img:string;
}
const ASSETS_LIST_MOCK_DATA: AssetsList[] = [
  {
    id: 1,
    title: 'طلا',
    uniteNumber: 0,
    inventory: '0',
    progressValue: 50,
    backgroundColor: '#6F71D2',
    maskIcon: <GoldenMackIcon />,
    img: s1,
  },
  {
    id: 2,
    title: 'پس انداز',
    uniteNumber: 16,
    inventory: ' 0',
    progressValue: 50,
    backgroundColor: '#f19667',
    maskIcon: <SavingMackIcon />,
    img: s2,

  },
  {
    id: 3,
    title: 'مسکن',
    uniteNumber: 0,
    inventory: '0',
    progressValue: 50,
    backgroundColor: '#767e24',
    maskIcon: <HouseMackIcon />,
    img: s3,

  },
  {
    id: 4,
    title: 'بورس',
    uniteNumber: 0,
    inventory: '0 ت',
    progressValue: 50,
    backgroundColor: '#0d446b',
    maskIcon: <StockMarketIcon />,
    img: s4,

  },
];

export const AssetsList = () => {
  const { assetsList } = useStyles();
  return (
    <ul className={assetsList}>
      {ASSETS_LIST_MOCK_DATA.map((item) => (
        <AssetItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
