import { all } from 'redux-saga/effects'
import { WatchItems } from './ItemSaga'

export default function* rootSaga() {
  yield all([
    WatchItems()
  ])
} 