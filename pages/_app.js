import React from 'react';
import '../styles/css/globals.css';
import Layout from '../components/Layout/Layout';
import '../components/misc/Birdie/Birdie.css';
import '../shared/Links/PageLinks.js';

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
