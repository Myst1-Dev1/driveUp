'use client';

import { Provider } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { makeStore } from './index';
import { fetchProfile } from './userSlice';
import { fetchFavorite } from './favoriteSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const { data: favorite } = useAppSelector(s => s.favorite);

  const userId = user?.data[0].userId;

  useEffect(() => {
    dispatch(fetchProfile());
  }, [user]);

  useEffect(() => {
    if (userId) dispatch(fetchFavorite(userId));
  }, [user, favorite]);

  return null;
}