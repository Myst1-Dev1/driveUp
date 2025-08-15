'use client';

import { Provider } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { makeStore } from './index';
import { fetchProfile } from './userSlice';

const store = makeStore();

export default function Providers({ children }: { children: ReactNode }) {
  // Busca o perfil ao montar (se tiver token no cookie, o axios manda o Bearer)
  useEffect(() => {
    store.dispatch(fetchProfile());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}