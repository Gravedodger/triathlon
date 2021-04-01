import React from 'react';
import classes from './FooterMenu.module.css';
import { ListGroup } from 'react-bootstrap';

const linksFirst = [
  {
    to: '/',
    label: 'Головна',
  },
  {
    to: '/about',
    label: 'Про нас',
  },
  {
    to: '/news',
    label: 'Новини',
  },
  {
    to: '/athletes',
    label: 'Атлети',
  },
  {
    to: '/clubs',
    label: 'Клуби',
  },
];

const linksSecond = [
  {
    to: '/contacts',
    label: 'Контакти',
  },
  {
    to: '/sports',
    label: 'Види спорту',
  },
  {
    to: '/health-safety',
    label: 'Безпека та здоров`я',
  },
  {
    to: '/Services',
    label: 'Послуги',
  },
  {
    to: '/accident-report',
    label: 'Повідомити подію',
  },
];

const linksThird = [
  {
    to: '/partners',
    label: 'Партнери',
  },
  {
    to: '/sponsors',
    label: 'Спонсори',
  },
  {
    to: '/press-info',
    label: 'Для преси',
  },
  {
    to: '/donate',
    label: 'Зробити пожертву',
  },
];

const FooterMenu = () => {
  const { footerMenu, item, link } = classes;

  const listItems1 = linksFirst.map(({ to, label }) => (
    <li className={item} key={label}>
      <a href={to} className={link}>
        {label}
      </a>
    </li>
  ));

  const listItems2 = linksSecond.map(({ to, label }) => (
    <li className={item} key={label}>
      <a href={to} className={link}>
        {label}
      </a>
    </li>
  ));

  const listItems3 = linksThird.map(({ to, label }) => (
    <li className={item} key={label}>
      <a href={to} className={link}>
        {label}
      </a>
    </li>
  ));

  return (
    <ListGroup className="footerMenu__group">
      <ul className={footerMenu}>{listItems1}</ul>
      <ul className={footerMenu}>{listItems2}</ul>
      <ul className={footerMenu}>{listItems3}</ul>
    </ListGroup>
  );
};

export default FooterMenu;
