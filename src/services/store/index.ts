import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice';
import favorite from './favoriteSlice';

export const makeStore = () =>
  configureStore({
    reducer: { user, favorite },
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];