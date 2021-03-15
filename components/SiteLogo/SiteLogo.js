import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Modules/SiteLogo.module.css';

const SiteLogo = () => {
  return (
    <div className={styles.siteLogo}>
      <div className={styles.siteLogoAt360}>
        <Image src={'/triathlon-blue.png'} className={styles.siteLogoAt360} alt='main-logo'
               width={110} height={70} style={'color: #ffffff'}/>
      </div>
      <div className={styles.siteLogoAt600}>
        <Image src={'/triathlon-blue.png'} alt='main-logo'
               width={70} height={70} style={'color: #ffffff'} />
      </div>
      <div className={styles.siteLogoAt800}>
        <Image src={'/triathlon-blue.png'} alt='main-logo'
               width={100} height={100}/>
      </div>
      <div className={styles.siteLogoAt1000}>
        <Image src={'/triathlon-blue.png'} alt='main-logo'
               width={150} height={150}/>
      </div>
      <div className={styles.siteLogoAt1200}>
        <Image src={'/triathlon-blue.png'} alt='main-logo'
               width={160} height={160}/>
      </div>
      <div className={styles.siteLogoAt1500}>
        <Image src={'/triathlon-blue.png'} alt='main-logo'
               width={200} height={200}/>
      </div>
    </div>
  );
};

export default SiteLogo;
