import store from '@/store/store';
import { ErrorsType } from '@/type/common.ts';

const ErrorMessageHandler = (serverErrorCode: null) => {
  const { errors } = store.getState().common;

  if (!serverErrorCode) return 'خطا در برقراری ارتباط';
  const errorItem = errors?.find((item: ErrorsType) => item.code === serverErrorCode);
  return errorItem?.message || 'خطا در برقراری ارتباط';
};

export default ErrorMessageHandler;
