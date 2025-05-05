import { FC } from 'react';
import { AssetsList } from './AssetsList';
import useStyles from './useStyles';

export const AssetItem: FC<AssetsList> = ({
  backgroundColor,
  inventory,
  progressValue,
  title,
  uniteNumber,
  id,
  img,
}) => {
  const { assetItem, assetTitle, progressBar, progressValueStyle } = useStyles();

  return (
    <div
      style={{ backgroundColor: backgroundColor, opacity: id !== 1 ? '0.4' : '1' }}
      className={assetItem}
    >
      <h2 className={assetTitle}>{title}</h2>
      <p style={{ color: '#D9D9D9', padding: '0', margin: '0' }}> تعداد واحد : {uniteNumber}</p>
      <p style={{ color: '#D9D9D9', padding: '0', margin: '0' }}>{inventory}</p>

      <div className={progressBar}>
        <div className={progressValueStyle} style={{ width: `${progressValue}%` }}></div>
      </div>
      <img
        src={img}
        alt=''
        width='120'
        height={105}
        style={{ display: 'flex', marginRight: '50%',marginTop:'20px',position:'relative',bottom:'0',left:'0' }}
      />
    </div>
  );
};
