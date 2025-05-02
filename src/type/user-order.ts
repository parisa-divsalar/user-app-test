export type OrderState = 'created' | 'pending' | 'completed' | 'cancelled';

export type Order = {
  order_id: string;
  asset_id: string;
  asset_isin: string;
  side: 'buy' | 'sell';
  state: 'created' | 'failed' | 'pending' | 'cancelling' | 'cancelled' | 'done';
  final_volume: number | null;
  final_price: number | null;
  available_budget: number;
  available_units: number | null;
  created_at: string;
  created_at_unix: number;
};

export type Meta = {
  page_size: number;
  page_num: number;
  total: number;
};

export type OrderResponse = {
  status: 'success' | 'error';
  status_code: number;
  message: string;
  has_error: boolean;
  meta: Meta;
  body: Order[];
};

export interface CreateOrderData {
  side: 'buy' | 'sell';
  asset_id: string;
  asset_isin: string;
  budget_in_rials?: number;
  volume?: number;
}
