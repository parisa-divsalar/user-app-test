/**
 * @template T => Request body
 * @template R => Request Response
 * @template D => Transformed Data
 */
interface IRequest<T = any, R = any, D = any> {
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
  body?: T;
  config?: R;
  url: string;
  showError?: boolean;
}

interface IResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

interface IResult<T = any> {
  success: boolean;
  errorType: 'server' | 'client' | null;
  data: T | null;
  message?: string;
}

type RequestFunc<T> = Promise<IResult<T>>;

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

type ExtractArgumentTypes<T> = T extends (...args: infer A) => any
  ? {
      [K in keyof A]: A[K] extends (...args: any) => any ? ExtractArgumentTypes<A[K]> : A[K];
    }
  : never;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

type RangeType = {
  min: string;
  max: string;
};
