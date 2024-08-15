import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Desativar thunk se não estiver usando
      serializableCheck: false, // Opcional: dependendo de sua configuração persistente
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
