import React from 'react';
import './SocialIcons.module.css';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PinterestIcon from '@material-ui/icons/Pinterest';

const SocialIcons = () => {
  return (
    <Container fluid>
      <List className="footer__icon--container">
        <ListItem className="footer__icon">
          <FacebookIcon />
        </ListItem>

        <ListItem className="footer__icon">
          <InstagramIcon />
        </ListItem>

        <ListItem className="footer__icon">
          <TwitterIcon />
        </ListItem>

        <ListItem className="footer__icon">
          <MailOutlineIcon />
        </ListItem>

        <ListItem className="footer__icon">
          <PinterestIcon />
        </ListItem>
      </List>
    </Container>
  );
};

export default SocialIcons;
