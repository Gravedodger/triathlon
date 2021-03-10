import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import styles from '../../../styles/Modules/TemporaryDrawer.module.css';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import * as pageLinks from '../../../shared/Links/PageLinks.js';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    let pageLinks = [];
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        pageLinks.map((title, href) => (
        <ListItem button href={pageLinks.href}>
          <ListItemText primary={pageLinks.title} />
          <ChevronRightSharpIcon />
        </ListItem>
        ))
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuSharpIcon style={{ fontSize: 40 }} className={styles.icnWhite}
                         onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </MenuSharpIcon>
          <Drawer anchor={anchor} open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
