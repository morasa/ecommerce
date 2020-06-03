import { ItemState } from '../types/itemState';
import { ItemsActionTypes, GET_ITEM_INPROGRESS, GET_ITEM_SUCCESS, GET_ITEM_FAILED } from "../types/itemActionsType";

export const initialItemState: ItemState = {
    loading: false,
    items: [],
    error: ''
};

export function itemsReducer(state: ItemState = initialItemState, action: ItemsActionTypes): ItemState {
    switch (action.type) {
        case GET_ITEM_INPROGRESS:
            return {
                ...state, loading: true
            };
        case GET_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, ...action.payload]
            };
        case GET_ITEM_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}