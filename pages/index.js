import React from 'react';
import Head from 'next/head';
import Birdie from '../components/Birdie';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <>
      <Head>
        <title>УЛТ | Головна</title>
        <meta name="keywords" content="тріатлон Україна" />
      </Head>

      <section>
        <h1 className='tempPageTitle'>Головна сторінка</h1>
      </section>
      <Container maxWidth={'sm'} className='birdie'/>
      <Container className='birdie' />
      <Container className='birdie'><Birdie/></Container>
      <Container className='birdie' />
      <Container className='birdie' />

    </>
  );
};

export default Home;
