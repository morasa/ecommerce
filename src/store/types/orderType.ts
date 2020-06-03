import { CartItem } from './cartItem';

export interface Order {
    id: string;
    status: string;
    placed_date: string;
    items: CartItem[];
  }