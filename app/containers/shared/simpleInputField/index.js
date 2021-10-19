import React from 'react';
import './style.scss';

export default function SimpleInputField(props) {
  const {
    id,
    type,
    value,
    className,
    placeholder,
    errorClass,
    ...rest
  } = props;
  return (
    <input className="simpleinputfield"
      id={props.id}
      type={props.type}
      value={props.value}
      className={`form-control chat-input ${props.className}`}
      placeholder={props.placeholder}
      {...rest}
    />
  );
}
