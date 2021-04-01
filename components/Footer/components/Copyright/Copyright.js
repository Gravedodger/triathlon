import React from 'react';
import styles from './Copyright.module.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Copyright = () => {
  return (
    <Container className={styles.copyright__container}>
      <Typography variant="p" className={styles.copyright__text}>
        Copyright &copy; Українська Ліга Тріатлону, 2021 р.
      </Typography>
    </Container>
  );
};

export default Copyright;
