import { AxiosError, AxiosRequestConfig, AxiosResponse, CanceledError } from 'axios';
import { toast } from 'react-toastify';
import { axiosAgent } from './agent';
import { isBrowser } from '@/hooks/useIsomorphicLayoutEffect';

interface IRequest<B, C> {
  showError?: boolean;
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
  body?: B;
  url: string;
  config?: C;
  params?: Record<string, any>;
}

export interface RequestErrorExceptionType<R = any> {
  success: boolean;
  errorType: string;
  data: AxiosResponse<IResponse<R>, any> | null;
}

export class ResponseError extends Error implements RequestErrorExceptionType {
  success: boolean;
  errorType: string;
  data: AxiosResponse<IResponse<any>, any> | null;

  constructor(error: RequestErrorExceptionType) {
    super(error.errorType);
    this.success = error.success;
    this.data = error.data;
    this.errorType = error.errorType;
  }
}

/**
 * @template T => Final Data (Result)
 * @template C => Request Response (Response)
 * @template B => Request Body (Body)
 */
export const sendRequest = async <T = any, R = any, B = Record<string, any> | string>({
  showError = false,
  method = 'get',
  body,
  url,
  config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    },
  },
  params,
  ...props
}: IRequest<B, AxiosRequestConfig>): Promise<IResult<T>> => {
  let response: AxiosResponse<IResponse<R>>;

  try {
    const configParams: AxiosRequestConfig = {
      ...config,
      ...(params && { params }),
      ...props,
    };

    switch (method) {
      case 'post':
      case 'patch':
      case 'put':
        response = await axiosAgent![method](url, body, configParams);
        break;
      case 'delete':
        response = await axiosAgent!.delete(url, {
          data: body,
          ...configParams,
        });
        break;
      case 'get':
      default:
        response = await axiosAgent!.get(url, configParams);
        break;
    }

    const isSuccess = response.status >= 200 && response.status < 400;
    if (isSuccess) {
      return {
        success: isSuccess,
        errorType: null,
        data: response.data as unknown as T,
        message: response.data.message,
      };
    }
    throw {
      success: isSuccess,
      errorType: 'server',
      data: response as unknown as T,
      message: response.data.message,
    };
  } catch (err: any) {
    console.error(err);
    const error = err as AxiosError<IResponse<R>>;
    const isClient = isBrowser();

    const throwError: RequestErrorExceptionType<R> = {
      success: false,
      errorType: 'client',
      data: error.response || null,
    };

    if (isClient && showError) {
      console.error('Error', error.message, error);

      if (error.response?.data) {
        toast.error(`Error: ${error.response?.data.message || error.response?.data.error}`);
      } else {
        if (!(error instanceof CanceledError)) {
          toast.error(`Error: ${error.message}`);
        }
      }
    }
    throw new ResponseError(throwError);
  }
};
