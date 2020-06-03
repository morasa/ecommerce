import { Order } from "../types/orderType";
import { CREATEORDER } from "../types/orderActionsType";

export function createOrder(order: Order) {
    return {
        type: CREATEORDER,
        payload: order
    }
}


