import useTransactionStyles from "@/pages/transaction/useStyles";
import { FC, ReactNode } from "react";
interface DropDownProps{
    title:string,
    icon:ReactNode
}

export const DropDown:FC<DropDownProps> = ({icon,title}) => {
     const { selectFilter} = useTransactionStyles();
    
  return (
     <div className={selectFilter}>
     <span>{title}</span>
          {icon}
      </div>  )
}
