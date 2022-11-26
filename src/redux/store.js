import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { transactionsSlice } from './transactions/transactionsSlice';
import { categoriesSlice } from './categories/categoriesSlice';
import getCategoriesMiddleware from './getCategoriesMiggleware';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'xtodo_wallet_app_auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transactionsSlice.reducer,
    categories: categoriesSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    getCategoriesMiddleware,
  ],
});

export const persistor = persistStore(store);
