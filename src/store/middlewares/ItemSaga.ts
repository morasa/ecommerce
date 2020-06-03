import { takeEvery, call, put } from "redux-saga/effects";
import { getItemsApi } from "../../api/itemApi";
import { GET_ITEMS } from "../types/itemActionsType";
import { getItemsInProgres, getItemsSuccess, getItemsFailed } from "../actions/itemsActions";

export function* getItemsSaga() {
    yield put(getItemsInProgres());
    try {
        const items = yield call(getItemsApi);
        yield put(getItemsSuccess(items));
    } catch (error) {
        yield put(getItemsFailed(error));
    }
}

export function* WatchItems() {
    yield takeEvery(GET_ITEMS, getItemsSaga)
}