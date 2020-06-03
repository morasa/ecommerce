import { GET_ITEMS, GET_ITEM_INPROGRESS, GET_ITEM_FAILED, GET_ITEM_SUCCESS } from "../types/itemActionsType"
import { Item } from "../types/itemType";

export function getItems() {
    return {
        type: GET_ITEMS
    }
}

export function getItemsInProgres() {
    return {
        type: GET_ITEM_INPROGRESS
    }
}

export function getItemsSuccess(books: Array<Item>) {
    return {
        type: GET_ITEM_SUCCESS,
        payload: books
    }
}

export function getItemsFailed(error: string) {
    return {
        type: GET_ITEM_FAILED,
        payload: error
    }
}
