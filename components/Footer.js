import React from 'react';
import styles from '../styles/Modules/Footer.module.css'
import UseAnimations from 'react-useanimations';
import facebook from 'react-useanimations/lib/facebook';
import instagram from 'react-useanimations/lib/instagram';
import twitter from 'react-useanimations/lib/twitter';
import linkedin from 'react-useanimations/lib/linkedin';
import youtube from 'react-useanimations/lib/youtube';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContainer}>
        <div className={styles.menuContainer}>
          <ul className={styles.menuBox}>

            <Link href="/"><a>
              <li>Головна</li>
            </a></Link>

            <Link href="/About"><a>
              <li>Про нас</li>
            </a></Link>

            <Link href="/News"><a>
              <li>Новини</li>
            </a></Link>

            <Link href="/Services"><a>
              <li>Послуги Атлетам</li>
            </a></Link>

            <Link href="/Contacts"><a>
              <li>Контакти</li>
            </a></Link>

          </ul>
          <ul className={styles.menuBox}>

            <Link href="/SportsAndRules"><a>
              <li>Види спорту та правила</li>
            </a></Link>

            <Link href="/Athletes"><a>
              <li>Атлети</li>
            </a></Link>

            <Link href="/Health"><a>
              <li>Здоров'я атлетів</li>
            </a></Link>

            <Link href="/Donate"><a>
              <li>Зробити пожертву</li>
            </a></Link>

            <Link href="/Safety"><a>
              <li>Безпека атлетів</li>
            </a></Link>

          </ul>
          <ul className={styles.menuBox}>

            <Link href="/Sponsors"><a>
              <li>Спонсори</li>
            </a></Link>

            <Link href="/Partners"><a>
              <li>Партнери</li>
            </a></Link>

            <Link href="/TrainingCenters"><a>
              <li>Тренувальні центри</li>
            </a></Link>

            <Link href="/PressInfo"><a>
              <li>Для преси</li>
            </a></Link>

            <Link href="/AccidentReporting"><a>
              <li>Заявити подію</li>
            </a></Link>

          </ul>
        </div>

        <div className={styles.mailAndFollowContainer}>
          <div className={styles.sendMailBox}>
            <h3>Отримуйте новини та анонси</h3>
            <div>
              <input type="email" placeholder='someone@example.com'/>
              <button type="submit">Підписатися</button>
            </div>
          </div>

          <div className={styles.followBox}>
            <div className={styles.followIconsBar}>
              <UseAnimations animation={facebook} size={44} strokeColor="#ffffff" color="#ffffff" wrapperStyle={{cursor: "pointer"}} />
              <UseAnimations animation={instagram} size={44} strokeColor="#ffffff" color="#ffffff" wrapperStyle={{cursor: "pointer"}} />
              <UseAnimations animation={linkedin} size={44} strokeColor="#ffffff" color="#ffffff" wrapperStyle={{cursor: "pointer"}} />
              <UseAnimations animation={twitter} size={44} strokeColor="#ffffff" color="#ffffff" wrapperStyle={{cursor: "pointer"}} />
              <UseAnimations animation={youtube} size={44} strokeColor="#ffffff" color="#ffffff" wrapperStyle={{cursor: "pointer"}} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
