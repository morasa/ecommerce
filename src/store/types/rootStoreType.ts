import { ItemState } from "./itemState";
import { CartState } from "./cartState";
import { OrdersState } from "./ordersState";
import { UserState } from "./userState";

export interface RootState {
    items: ItemState;
    cartItems:CartState;
    orders:OrdersState;
    user:UserState;
}