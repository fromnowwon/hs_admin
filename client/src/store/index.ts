/* eslint-disable import/extensions */
import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IRootReducer, rootReducer } from './rootReducer';

const dev = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(dev ? [logger] : []),
  devTools: dev,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): ThunkDispatch<IRootReducer, null, AnyAction> => useDispatch<AppDispatch>();
export const persistor = persistStore(store);
export default store;
