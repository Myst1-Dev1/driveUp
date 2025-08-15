import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice';

export const makeStore = () =>
  configureStore({
    reducer: { user },
    devTools: process.env.NODE_ENV !== 'production',
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];