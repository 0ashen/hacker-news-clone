import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Common } from '../styles/common';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../libs/store/store';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Common />
            <Component {...pageProps} />
         </ThemeProvider>
      </Provider>
   );
}

export default MyApp;
