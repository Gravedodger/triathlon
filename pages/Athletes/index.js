import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import styles from '../../styles/Modules/AthletesBlogPage.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {athletes: data}
  }
}

const Index = ({athletes}) => {
  return (
    <>
      <Head>
        <title>УЛТ | Атлети</title>
        <meta name="keywords" content="" />
      </Head>

      <Container>
        <div className={styles.mainContainer}>
          <h1 className={styles.pageTitle}>All Athletes</h1>
          {athletes.map(athlete => (
            <Link href={'/athletes/' + athlete.id} key={athlete.id}>
              <a className={styles.single}>
                <h3>{athlete.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Index;
