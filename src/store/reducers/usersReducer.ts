
import { userActionTypes, UPDATE_ADDRESS } from "../types/userActionTypes";
import { UserState } from '../types/userState';

export const initialAddressState: UserState = {
    "addressLineOne": "",
    "addressLineTwo": "",
    "city": "",
    "state": "",
    "country": ""
};

export function usersReducer(state: UserState = initialAddressState, action: userActionTypes): UserState {
    switch (action.type) {
        case UPDATE_ADDRESS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
} 