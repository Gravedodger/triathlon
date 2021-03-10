import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Birdie from '../components/Birdie/Birdie';

const Athletes = () => {
  return (
    <>
      <Head>
        <title>УЛТ | Атлети</title>
        <meta name="keywords" content="" />
      </Head>

      <section>
        <div>
          <h1 className='tempPageTitle'>СТОРІНКА "АТЛЕТИ"</h1>
        </div>
      </section>
      <Container maxWidth={'sm'} className='birdie'/>
      <Container className='birdie' />
      <Container className='birdie'><Birdie/></Container>
      <Container className='birdie' />
      <Container className='birdie' />
    </>
  );
};

export default Athletes;
