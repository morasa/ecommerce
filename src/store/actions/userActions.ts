import { Address } from "../types/addressType";
import { UPDATE_ADDRESS } from "../types/userActionTypes";

export function updateUser(address: Address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

