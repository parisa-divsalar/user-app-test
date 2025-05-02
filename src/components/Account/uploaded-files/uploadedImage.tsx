import useStyles from './useStyles';
export const UploadedImage = () => {
  const { uploadedImageContainer, uploadedFileFont, uploadedFileImagesStyle } = useStyles();
  return (
    <div className={uploadedImageContainer}>
      <p className={uploadedFileFont}>تصویر روی کارت</p>
      <img src='/kart2.jpg' alt='image' className={uploadedFileImagesStyle} />
      <p style={{ textAlign: 'center' }} className={uploadedFileFont}>
        بارگذاری مجدد
      </p>
    </div>
  );
};
