import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>УЛТ | Головна</title>
        <meta name="keywords" content="тріатлон Україна" />
        <meta charSet="utf-8"/>
        <link rel="icon" href="../public/fav.png"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#002464"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,900&family=Montserrat:wght@300;400;500;700;900&family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Website application for the Ukrainian Triathlon League"
        />
        <link rel="apple-touch-icon" href="../public/fav.png"/>
      </Head>

      <section>
        <h1 className='tempPageTitle'>Головна сторінка</h1>
      </section>

    </>
  );
};

export default Home;
