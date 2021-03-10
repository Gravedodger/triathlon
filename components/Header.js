import React from 'react';
import styles from '../styles/Modules/Header.module.css'
import Image from 'next/image';
import SvgIconsSize from './misc/icons/AccountCircle';
import TemporaryDrawer from './misc/Menus/TemporaryDrawer';
import LanguageSwitch from './misc/Menus/LanguageSwitch';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import {IoLanguageSharp} from 'react-icons/io5';
import LoginModal from './misc/Modals/LoginModal';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <div className={styles.logoContainer}>
          <Image  src="/favicon-t.png" width={200} height={200} />
        </div>
        <div className={styles.titleContainer}>
          <h1>Українська Ліга Тріатлону</h1>
        </div>
        <div className={styles.iconsContainer}>
          <div>
            <LanguageSwitch />
          </div>
          <TemporaryDrawer />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.bottomIcons}>
          <LoginModal />
        </div>
      </div>
    </header>
  )
}

export default Header;
