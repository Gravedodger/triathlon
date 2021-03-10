import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {IoLanguageSharp} from 'react-icons/io5';
import styles from '../../../styles/Modules/Header.module.css';
import Link from 'next';

export default function LanguageSwitch() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IoLanguageSharp aria-controls="switch-language" aria-haspopup="true"
                       style={{ fontSize: 40 }} className={styles.icnWhite}
                       onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Українська</MenuItem>
        <MenuItem onClick={handleClose}>Русский</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
      </Menu>
    </div>
  );
}
