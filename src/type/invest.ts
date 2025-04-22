export interface IInvest {
  id: string;
  date: string;
  orderType: OrderType;
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

export type InvestStatus = 'WAITING_TO_BUY' | 'WAITING_TO_SELL' | 'SOLD' | 'PURCHASED';
