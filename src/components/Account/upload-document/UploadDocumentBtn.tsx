import { FC, ReactNode } from "react";
import useStyles from "./useStyles"


interface UploadDocumentBtnProps{
    icon:ReactNode
}


const UploadDocumentBtn:FC<UploadDocumentBtnProps> = ({icon}) => {
    const {uploadDocumentBtn}=useStyles();
  return (
    <button className={uploadDocumentBtn}>{icon}</button>
  )
}

export default UploadDocumentBtn


