import React from 'react';
import './style.scss';
import { Row, Col, CardBody } from 'reactstrap';
import Card from '@material-ui/core/Card';
import Button from '../../shared/button/index';
import { Link } from 'react-router-dom';

export default function TopHeader(props) {
  return (
    <Card className="topBarCardDesign">
      <Row>
        <Col xl="6" className="d-flex">
          <div className="user_first_letter">
            <h2>{props.firstCharacter}</h2>
          </div>
          <div className="user_info">
            <h3>{props.name}</h3>
            <h4>Lead Manager</h4>
          </div>
        </Col>
        <Col xl="6" className="header_btn">
          <Button label="Save" />
          <Link to={props.back} className="link_design">Back</Link>
        </Col>
      </Row>
    </Card>
  );
}
