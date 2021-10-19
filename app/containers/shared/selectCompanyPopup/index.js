import React from 'react';
import './style.scss';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import Button from '../button/index';
import companyImage from './img/company_img1.png';
import ArrowButton from '../arrowButton/index';

export default function SelectCompanyPopup(props) {
  return (
    <Card className={`selectCompanyDesign ${props.isShow ? 'show_modal' : ''}`} style={{ marginLeft: '100px' }}>
      <CardHeader>
        <h2>{props.label}</h2>
        <div className="underlineDesign" />
      </CardHeader>
      <CardBody>
        <div className="sellectCompanyData">
          <img src={companyImage} className="" />
          <p>{props.value}</p>
        </div>
      </CardBody>
      <CardFooter className="text-center">
        <Button label="Proceed" handleClick={props.selectDocumentPopup}/>
      </CardFooter>
      <ArrowButton
        icon={<i className="fas fa-times" />}
        handleClick={props.closePopup}
      />
    </Card>
  );
}
