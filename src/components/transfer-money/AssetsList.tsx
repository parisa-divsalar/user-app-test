import { ReactNode } from 'react';
import { AssetItem } from './AssetItem';
import useStyles from './useStyles';
import { GoldenMackIcon } from '../UI/Icons/transferMoney/GoldenMackIcon';
import { SavingMackIcon } from '../UI/Icons/transferMoney/SavingMackIcon';
import { HouseMackIcon } from '../UI/Icons/transferMoney/HouseMackIcon';
import { StockMarketIcon } from '../UI/Icons/transferMoney/StockMarketIcon';

export interface AssetsList {
  id: number;
  title: string;
  uniteNumber: number;
  inventory: string;
  progressValue: number;
  backgroundColor: string;
  maskIcon: ReactNode;
}
const ASSETS_LIST_MOCK_DATA: AssetsList[] = [
  {
    id: 1,
    title: 'طلا',
    uniteNumber: 16,
    inventory: '555 ت',
    progressValue: 50,
    backgroundColor: '#3032AD',
    maskIcon: <GoldenMackIcon />,
  },
  {
    id: 2,
    title: 'پس انداز',
    uniteNumber: 16,
    inventory: '555 ت',
    progressValue: 50,
    backgroundColor: '#E56523',
    maskIcon: <SavingMackIcon />,
  },
  {
    id: 3,
    title: 'مسکن',
    uniteNumber: 16,
    inventory: '555 ت',
    progressValue: 50,
    backgroundColor: '#A3AC4D',
    maskIcon: <HouseMackIcon />,
  },
  {
    id: 4,
    title: 'بورس',
    uniteNumber: 16,
    inventory: '16 ت',
    progressValue: 50,
    backgroundColor: '#2283AD',
    maskIcon: <StockMarketIcon />,
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
