import React from 'react';
import '../../../shared/styles/layout.css';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from '@material-ui/core/List';
import Copyright from './components/Copyright';
import Subscription from './components/Subscription';
import SocialIcons from './components/SocialIcons';
import FooterMenu from './components/FooterMenu';

const Footer = () => {
  return (
    <>
      <footer className="site-footer border-top">
        <Container>
          <Row>
            <Col col-lg-6 mb-5 mb-lg-0>
              <Row>
                <Col col-mb-12>
                  <Row>
                    <Col col-md-6 col-lg-4>
                      <List className="list-unstyled footer__menu">
                        <FooterMenu />
                      </List>
                    </Col>
                  </Row>
                </Col>
                <Subscription />
              </Row>
            </Col>
          </Row>
        </Container>
        <SocialIcons />
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
