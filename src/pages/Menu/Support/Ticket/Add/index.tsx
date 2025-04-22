import { useState } from 'react';
import { CardActionArea, Stack, Typography } from '@mui/material';
import CustomButton from '@/components/UI/CustomButton';
import arrowIcon from '@/assets/images/icon/arrow.svg';
import { useNavigate } from 'react-router-dom';
import { SelectOption } from '@/type/common.ts';
import TicketDrawer from '@/pages/Menu/Support/Ticket/Add/TicketDrawer';
import CustomInput from '@/components/UI/CustomInput';
import { setSnackbar } from '@/store/common/commonSlice.ts';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import useStyles from '@/pages/Menu/Support/Ticket/Add/useStyles.ts';
import { PrivateRoutes } from '@/config/routes.ts';
import AttachSvg from '@/components/UI/Icons/Attach';

const AddTicket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [topicOfTicket, setTopicOfTicket] = useState<SelectOption | undefined>(undefined);
  const [openTicketDrawer, setOpenTicketDrawer] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [file, setFile] = useState<any[]>([]);

  const disabled = !topicOfTicket;

  const onSubmit = () => {
    navigate(PrivateRoutes.ticket);
  };

  const handelChangeFile = (event: any) => {
    const imgFile = event.target.files[0];
    let imgSize = imgFile?.size;
    if (imgSize > 2560000) {
      dispatch(
        setSnackbar({
          openSnackbar: true,
          message: 'حجم تصویر انتخابی از ۲ مگابایت نباید بیشتر باشد',
        }),
      );
    } else if (imgFile) {
      setFile(() => [...file, imgFile]);
    }
  };

  return (
    <Stack className={classes.mainContainer}>
      <Stack className={classes.content}>
        <CardActionArea
          className={classes.cardActionArea}
          onClick={() => setOpenTicketDrawer(true)}
        >
          <Stack direction='row' className={classes.selectContainer}>
            <Typography
              variant='subtitle2'
              color={topicOfTicket ? 'text.primary' : 'text.secondary'}
            >
              {topicOfTicket ? topicOfTicket.name : 'موضوع تیکت'}
            </Typography>
            <img src={arrowIcon} width='16px' alt='' />
          </Stack>
        </CardActionArea>

        <CustomInput
          placeholder='توضیحات'
          value={description}
          multiline
          rows={6}
          maxLength={400}
          onChangeHandler={(value) => setDescription(value)}
        />

        <label htmlFor='uploadFile'>
          <input
            type='file'
            id='uploadFile'
            style={{ display: 'none' }}
            accept='image/png, image/jpeg, image/jpg'
            onChange={(e: any) => handelChangeFile(e)}
          />

          <Stack direction='row' className={classes.addFileContainer}>
            <AttachSvg />
            <Typography variant='caption' color='text.secondary' fontWeight='bold'>
              افزودن فایل
            </Typography>
          </Stack>
        </label>

        <Stack direction='row' className={classes.fileContainer}>
          {file &&
            file.length !== 0 &&
            file.map((f: any) => (
              <Stack
                key={f.id}
                direction='row'
                className={classes.badgeContainer}
                gap={0.5}
                onClick={(event: any) => {
                  event.preventDefault();
                  setFile(file.filter((i: any) => i.name !== f.name));
                }}
              >
                <Typography color='text.primary' variant='overline'>
                  {f.name}
                </Typography>
                <CloseIcon fontSize='small' color='action' />
              </Stack>
            ))}
        </Stack>
      </Stack>

      <Stack className={classes.buttonContainer}>
        <CustomButton
          color='secondary'
          fullWidth
          variant='contained'
          disabled={disabled}
          onClick={onSubmit}
        >
          ارسال تیکت
        </CustomButton>
      </Stack>

      <TicketDrawer
        openTicketDrawer={openTicketDrawer}
        closeDrawer={() => setOpenTicketDrawer(false)}
        setTopicOfTicket={setTopicOfTicket}
      />
    </Stack>
  );
};

export default AddTicket;
