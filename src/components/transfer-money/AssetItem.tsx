import { FC } from 'react';
import { AssetsList } from './AssetsList';
import useStyles from './useStyles';

export const AssetItem: FC<AssetsList> = ({
  backgroundColor,
  inventory,
  progressValue,
  title,
  uniteNumber,
  maskIcon,
}) => {
  const { assetItem, assetTitle } = useStyles();
  return (
    <div style={{ backgroundColor: backgroundColor }} className={assetItem}>
      <h2 className={assetTitle}>{title}</h2>
      <p style={{ padding: '0', margin: '0' }}> تعداد واحد : {uniteNumber}</p>
      <p style={{ padding: '0', margin: '0' }}>{inventory}</p>
    </div>
  );
};
