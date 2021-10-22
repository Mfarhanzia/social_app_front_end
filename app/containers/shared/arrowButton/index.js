import React from 'react';
import './style.scss';
import {Button} from 'reactstrap';

export default function ArrowButton(props) {
  return (
    <>
      <Button className="closeBtn" label={props.icon} handleClick={props.handleClick} />
      <div className="arrowShape" />
    </>
  );
}
