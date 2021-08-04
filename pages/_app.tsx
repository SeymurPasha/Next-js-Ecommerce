/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/Home.css';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { MainProvider } from '../context/Context';
import Layout from '../Components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </MainProvider>

  );
}

export default MyApp;