import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Birdie from '../components/Birdie/Birdie';

const AccidentReporting = () => {
  return (
    <>
      <Head>
        <title>УЛТ | Заявити подію</title>
        <meta name="keywords" content="" />
      </Head>

      <section>
        <h1 className='tempPageTitle'>СТОРІНКА "ЗАЯВИТИ ПОДІЮ"</h1>
      </section>
      <Container maxWidth={'sm'} className='birdie'/>
      <Container className='birdie' />
      <Container className='birdie'><Birdie/></Container>
      <Container className='birdie' />
      <Container className='birdie' />

    </>
  );
};

export default AccidentReporting;
