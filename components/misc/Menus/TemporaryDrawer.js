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
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp'
import Link from 'next/Link'

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
      <List className={styles.list}>
        <ListItem>
          <Link href={'/'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Головна</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link href={'/About'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Про нас</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link href={'/News'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Новини</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'/SportsAndRules'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Види спорту та правила</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'/TrainingCenters'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Тренувальні центри</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'/Athletes'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Атлети</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'/Services'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Послуги атлетам</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
        </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'/Safety'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Безпека атлетів</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'/Donate'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Пожертви пректу</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'/Sponsors'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Спонсори</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'Partners'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Партнери</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href={'PressInfo'}><a className={styles.listItem}>
            <ListItemText className={styles.listText}>Для Преси</ListItemText>
            <ChevronRightSharpIcon className={styles.icnBlue} />
          </a></Link>
        </ListItem>
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
