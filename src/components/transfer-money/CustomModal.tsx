import useStyles from '@/pages/transaction/useStyles';
import { FC, ReactNode } from 'react';

interface ChangeOriginModalModal {
  children: ReactNode;
  onClick: () => void;
}

export const CustomModal: FC<ChangeOriginModalModal> = ({ children, onClick }) => {
  const { filterTransactionModelContainer, filterTransactionModel, lineButton } = useStyles();
  return (
    <div className={filterTransactionModelContainer} onClick={onClick}>
      <div className={filterTransactionModel} onClick={(event) => event.stopPropagation()}>
        <span className={lineButton}></span>
        {children}
      </div>
    </div>
  );
};
