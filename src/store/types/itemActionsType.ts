import { Item } from './itemType';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM_INPROGRESS = 'GET_ITEM_INPROGRESS';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILED = 'GET_ITEM_FAILED';

export interface GetItemsAction {
    type: typeof GET_ITEMS;
}

export interface GetItemInProgressAction {
    type: typeof GET_ITEM_INPROGRESS;
}

export interface GetItemSuccessAction {
    type: typeof GET_ITEM_SUCCESS;
    payload: Item[]
}

export interface GetItemFailedAction {
    type: typeof GET_ITEM_FAILED;
    payload: string
}

export type ItemsActionTypes = GetItemsAction
    | GetItemInProgressAction | GetItemSuccessAction | GetItemFailedAction;