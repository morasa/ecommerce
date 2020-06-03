import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { ordersReducer } from './ordersReducer';
import { usersReducer } from './usersReducer'
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    items: itemsReducer,
    cartItems: cartReducer,
    orders: ordersReducer,
    user: usersReducer,
});
