import { CREATEORDER, createOrderAction } from "../types/orderActionsType";
import { OrdersState } from "../types/ordersState";

export const initialBookState: OrdersState = {
    orders: [],
};

export function ordersReducer(state: OrdersState = initialBookState, action: createOrderAction): OrdersState {
    switch (action.type) {
        case CREATEORDER:
            return {
                ...state, orders: [...state.orders, action.payload]
            };
        default:
            return state;
    }
} 