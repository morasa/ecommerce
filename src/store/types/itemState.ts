import { Item } from './itemType';

export interface ItemState {
    loading: boolean;
    items: Item[];
    error: string;
}