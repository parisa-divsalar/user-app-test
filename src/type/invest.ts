export interface IInvest {
  id: string;
  date: string;
  orderType: 'buy'|'sell';
  investType: InvestType;
  status: InvestStatus;
  amount: string;
  numberOfUnits: string;
}

export enum OrderType {
  'BUY' = 'BUY',
  'SELL' = 'SELL',
}

export enum InvestType {
  'GOLD' = 'GOLD',
  'HOUSING' = 'HOUSING',
  'BURSE' = 'BURSE',
  'SAVINGS' = 'SAVINGS',
}

export type InvestStatus = 'created' | 'failed' | 'pending' | 'cancelling'|'cancelled'|'done';
