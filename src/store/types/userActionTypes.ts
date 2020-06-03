import { Address } from './addressType';

export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

export interface updateAddressAction {
    type: typeof UPDATE_ADDRESS;
    payload: Address
}

export type userActionTypes = updateAddressAction;