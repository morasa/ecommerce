import { CartItem } from "../types/cartItem";
import { ADDTOCART, CLEARCART } from "../types/cartActionType";

export function addToCart(book: CartItem) {
    return {
        type: ADDTOCART,
        payload: book
    }
}

export function clearCart() {
    return {
        type: CLEARCART
    }
}


