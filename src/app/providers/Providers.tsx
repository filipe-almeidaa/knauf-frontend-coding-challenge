import StoreProvider from '@/app/providers/StoreProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import React, { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <StoreProvider>{children}</StoreProvider>
    </AppRouterCacheProvider>
  );
}
