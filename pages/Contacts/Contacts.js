import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Birdie from '../../components/misc/Birdie/Birdie';

const Contacts = () => {
  return (
    <>
      <Head>
        <title>УЛТ | Контакти</title>
        <meta name="keywords" content="" />
      </Head>

      <section>
        <h1 className='tempPageTitle'>СТОРІНКА "КОНТАКТНА ІНФОРМАЦІЯ"</h1>
      </section>
    </>
  );
};

export default Contacts;
