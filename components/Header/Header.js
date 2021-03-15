import React from 'react';
import styles from './Header.module.css'
import TemporaryDrawer from '../Menus/TemporaryDrawer/TemporaryDrawer';
import LanguageSwitch from '../Menus/LanguageSwitch';
import LoginModal from '../Modals/LoginModal';
import Typography from '@material-ui/core/Typography';
import SiteLogo from '../SiteLogo';

const Header = () => {
  return (
    <Typography>
      <header className={styles.header}>
        <div className={styles.row}>
          <SiteLogo />
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Українська Ліга Тріатлону</h1>
          </div>
          <div className={styles.iconsContainer}>
            <div>
              <LanguageSwitch />
            </div>
            <TemporaryDrawer />
          </div>
          <div className={styles.mobileIconsMenu}>
            <TemporaryDrawer />
          </div>
          <div className={styles.mobileIconsUser}>
            <LoginModal />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.bottomIcons}>
            <LoginModal />
          </div>
        </div>
      </header>
    </Typography>
  );
};

export default Header;
