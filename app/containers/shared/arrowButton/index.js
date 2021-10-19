import React from 'react';
import './style.scss';
import Button from '../button/index';

export default function ArrowButton(props) {
  return (
    <>
      <Button className="closeBtn" label={props.icon} handleClick={props.handleClick} />
      <div className="arrowShape" />
    </>
  );
}
