/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'reactstrap';
import messages from './messages';
export default function HomePage(props) {
  const {
    history: { push },
  } = props;
  return (
    <div className="container-fluid">
      <Row className="align-items-center full-height-row">
        <Col lg>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </Col>
      </Row>
    </div>
  );
}
