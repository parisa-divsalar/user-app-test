import { UserIcon } from '@/components/UI/Icons/upload-document/UserIcon';
import useStyles from './useStyles';
import { FC } from 'react';

interface UploadDocumentCardProps {
  title: string;
}

const UploadDocumentCard: FC<UploadDocumentCardProps> = ({ title }) => {
  const { uploadDocumentCard, uploadDocumentCardIcon } = useStyles();
  return (
    <div className={uploadDocumentCard}>
      <span className={uploadDocumentCardIcon}>
        <UserIcon />
      </span>
      <p>{title}</p>
    </div>
  );
};

export default UploadDocumentCard;
