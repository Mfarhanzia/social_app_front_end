import React from 'react';
import './style.scss';
import SimpleInputField from '../simpleInputField/index';
import Textarea from '../textarea/index';
import DropZone from '../dropZone/index';
import { Card, Row, Col } from 'reactstrap';
import Button from '../button/index';
import ArrowButton from '../arrowButton/index';

export default function SendEmailPopup(props) {

  return (
    <Card className={`emailSendDesign ${props.isShow ? 'show_modal' : ''}`}>
      <h2>SEND EMAIL</h2>
      <div className="underlineDesign" />
      <Row>
        <Col xl="12">
          <SimpleInputField placeholder="Email Subject" />
        </Col>
        <Col xl="12" className="mt-3">
          <Textarea rows="4" placeholder="Email Content" />
        </Col>
        <Col xl="12" className="mt-3">
          <DropZone />
        </Col>
        <Col xl="12" className="emailSectionFooter">
          <Button label="Cancel" />
          <Button label="Send" className="sendBtn" />
        </Col>
      </Row>
      <ArrowButton
        icon={<i className="fas fa-times" />}
        handleClick={props.closePopup}
      />
    </Card>
  );
}
