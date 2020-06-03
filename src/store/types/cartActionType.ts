import { CartItem } from './cartItem';

export const ADDTOCART = 'ADDTOCART'
export const CLEARCART = 'CLEARCART'

export interface addToCartAction {
    type: typeof ADDTOCART;
    payload: CartItem
}

export interface clearCartAction {
    type: typeof CLEARCART;
}

export type CartActionTypes = addToCartAction | clearCartAction;