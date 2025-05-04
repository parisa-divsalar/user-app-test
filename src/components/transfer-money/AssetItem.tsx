import { FC } from 'react';
import { AssetsList } from './AssetsList';
import useStyles from './useStyles';
import { GoldenMackIcon } from '../UI/Icons/transferMoney/GoldenMackIcon';
import { SavingMackIcon } from '../UI/Icons/transferMoney/SavingMackIcon';

export const AssetItem: FC<AssetsList> = ({
  backgroundColor,
  inventory,
  progressValue,
  title,
  uniteNumber,
  id,
  maskIcon
}) => {
  const { assetItem, assetTitle, progressBar, progressValueStyle } = useStyles();

  return (
    <div style={{ backgroundColor: backgroundColor,opacity:id!==1?'0.4':'1' }} className={assetItem}>
      <h2 className={assetTitle}>{title}</h2>
      <p style={{ padding: '0', margin: '0' }}> تعداد واحد : {uniteNumber}</p>
      <p style={{ padding: '0', margin: '0' }}>{inventory}</p>
      <div className={progressBar}>
        <div className={progressValueStyle} style={{ width: `${progressValue}%` }}></div>
      </div>
    </div>
  );
};
