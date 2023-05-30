export interface Order {
  order_id: number;
  order_number: string;
  quantity: number;
  total: number;
  order_status: string;
  payment_status: string;
  created_at: string;
}
