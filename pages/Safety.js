import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Birdie from '../components/Birdie/Birdie';

const Safety = () => {
  return (
    <>
      <Head>
        <title>УЛТ | Безпека Атлетів</title>
        <meta name="keywords" content="" />
      </Head>

      <section>
        <h1 className='tempPageTitle'>СТОРІНКА "БЕЗПЕКА АТЛЕТІВ"</h1>
      </section>
      <Container maxWidth={'sm'} className='birdie'/>
      <Container className='birdie' />
      <Container className='birdie'><Birdie/></Container>
      <Container className='birdie' />
      <Container className='birdie' />
    </>
  );
};

export default Safety;
