import { CardActionArea, Stack, Typography } from '@mui/material';
import { MenuListItemType } from '@/type/common.ts';
import { SupportListItems } from '@/pages/Menu/Support/data.tsx';
import useStyles from '@/pages/Menu/Support/useStyles.ts';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/config/routes.ts';
import ArrowSvg from '@/components/UI/Icons/Arrow';

const Support = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onClickMenuItem = (code: string) => {
    switch (code) {
      case 'FAQ':
        navigate(PrivateRoutes.faq);
        break;
      case 'TICKET':
        navigate(PrivateRoutes.ticket);
        break;
      default:
        break;
    }
  };

  return (
    <Stack className={classes.mainContainer}>
      {SupportListItems.map((menuItem: MenuListItemType) => (
        <CardActionArea
          className={classes.cardActionArea}
          key={menuItem.id}
          onClick={() => onClickMenuItem(menuItem.code)}
        >
          <Stack
            direction='row'
            className={classes.menuItem}
            sx={{ borderBottom: '1px solid #DCDFE4' }}
          >
            <Stack direction='row'>
              {menuItem.icon && menuItem.icon}
              <Typography color='text.primary' mr={1} variant='subtitle2' fontWeight='bold'>
                {menuItem.title}
              </Typography>
            </Stack>

            <ArrowSvg />
          </Stack>
        </CardActionArea>
      ))}
    </Stack>
  );
};

export default Support;
