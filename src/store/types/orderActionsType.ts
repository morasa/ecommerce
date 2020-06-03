import { Order } from './orderType';

export const CREATEORDER = 'CREATEORDER';

export interface createOrderAction {
    type: typeof CREATEORDER;
    payload: Order
}

export type OderActionTypes = createOrderAction ;