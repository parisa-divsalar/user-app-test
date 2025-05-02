import { UploadedImage } from '@/components/Account/uploaded-files/uploadedImage';
import useStyles from './useStyles';

const UploadedFile = () => {
  const { uploadFilesPage, uploadedFileFont, uploadedFileSubmitButton } = useStyles();
  return (
    <div className={uploadFilesPage}>
      <p className={uploadedFileFont}>تصویر پشت و روی کارت ملی خود را بارگذاری کنید</p>
      <UploadedImage />
      <UploadedImage />
      <button className={uploadedFileSubmitButton}>ادامه مراحل افتتاح حساب</button>
    </div>
  );
};

export default UploadedFile;
