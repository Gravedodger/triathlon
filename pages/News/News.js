import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Birdie from '../../components/misc/Birdie/Birdie';

const News = () => {
  return (
    <>
      <Head>
        <title>УЛТ | Новини</title>
        <meta name="keywords" content="" />
      </Head>

      <section>
        <div>
          <h1 className='tempPageTitle'>СТОРІНКА "НОВИНИ"</h1>
        </div>
      </section>
    </>
  );
};

export default News;
