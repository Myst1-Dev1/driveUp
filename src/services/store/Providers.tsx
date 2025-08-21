'use client';

import { Provider } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { makeStore } from './index';
import { fetchProfile } from './userSlice';
import { fetchFavorite } from './favoriteSlice';
import { useAppDispatch, useAppSelector } from './hooks';

const store = makeStore();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <StartupEffects />
      {children}
    </Provider>
  );
}

function StartupEffects() {
  const dispatch = useAppDispatch();
  const { data: user } = useAppSelector(s => s.user);

  const userId = user?.data[0].userId;

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userId) dispatch(fetchFavorite(userId));
  }, [dispatch, userId]);

  return null;
}