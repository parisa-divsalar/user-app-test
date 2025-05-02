import UploadDocumentCard from '@/components/Account/upload-document/UploadDocumentCard';
import useStyles from './useStyles';

import UploadDocumentBtn from '@/components/Account/upload-document/UploadDocumentBtn';
import { TimesIcon } from '@/components/UI/Icons/upload-document/TimesIcon';
import { SparkIcon } from '@/components/UI/Icons/upload-document/SparkIcon';

const UploadDocument = () => {
  const { uploadDocumentPage, uploadSection, uploadDocumentBtns } = useStyles();
  const firstImageUploaded = false;

  return (
    <div className={uploadDocumentPage}>
      <div className={uploadDocumentBtns}>
        <UploadDocumentBtn icon={<TimesIcon />} />
        <UploadDocumentBtn icon={<SparkIcon />} />
      </div>
      <div className={uploadSection}>
        {firstImageUploaded ? (
          <UploadDocumentCard title='جلو ی کارت ملی خود را روبه‌روی دوربین قرار دهید.' />
        ) : (
          <UploadDocumentCard title='پشت کارت ملی خود را روبه‌روی دوربین قرار دهید.' />
        )}
      </div>
    </div>
  );
};

export default UploadDocument;
