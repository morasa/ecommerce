import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './reducers/rootReducer';
import rootSaga from './middlewares/rootSaga';

const configureStore = () => {
    const persistConfig = { key: 'root', storage }
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const sagaMiddleWare = createSagaMiddleware();
    const middlewares = [sagaMiddleWare];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        persistedReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    sagaMiddleWare.run(rootSaga);

    const persistor = persistStore(store);
    return { store, persistor };
}

export default configureStore
