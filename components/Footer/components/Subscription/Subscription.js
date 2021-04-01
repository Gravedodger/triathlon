import React from 'react';
import styles from './Subscription.module.css';
import Col from 'react-bootstrap/Col';

const Subscription = () => {
  return (
    <Col className="block-7">
      <form action="#" method="post">
        <label htmlFor="email_subscribe" className="footer-heading">
          Отримуйте останні новини та аналітику:
        </label>
        <div className="form-group">
          <input
            type="email"
            className="form-control py-4"
            id="email_subscribe"
            placeholder="someone@email.com"
          />
          <input
            type="submit"
            className="btn btn-subscribe btn-sm btn-secondary"
            value="Надіслати"
          />
        </div>
      </form>
    </Col>
  );
};

export default Subscription;
