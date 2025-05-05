import useTransactionStyles from '@/pages/transaction/useStyles';
import { FC, ReactNode } from 'react';
import {Typography} from "@mui/material";
interface DropDownProps {
  title: string;
  icon: ReactNode;
}

export const DropDown: FC<DropDownProps> = ({ icon, title }) => {
  const { selectFilter } = useTransactionStyles();

  return (
    <div className={selectFilter}>
      <Typography>{title}</Typography>
      {icon}
    </div>
  );
};
