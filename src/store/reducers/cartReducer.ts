import { CartActionTypes, ADDTOCART, CLEARCART } from "../types/cartActionType";

export const initialCartState = {
    items: []
};

export function cartReducer(state = initialCartState, action: CartActionTypes): any {
    switch (action.type) {
        case ADDTOCART:
            return { ...state, items: [...state.items, action.payload] };
        case CLEARCART:
            return { ...state, items: [] }
        default:
            return state;
    }
}