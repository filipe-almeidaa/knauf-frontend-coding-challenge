import StoreProvider from '@/app/providers/StoreProvider';
import theme from '@/app/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import React, { PropsWithChildren } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <StoreProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StoreProvider>
    </AppRouterCacheProvider>
  );
}
