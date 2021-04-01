import React from 'react';
import Head from 'next/head';
import styles from './NewsPage.module.css';

const NewsPage = () => {
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

export default NewsPage;
