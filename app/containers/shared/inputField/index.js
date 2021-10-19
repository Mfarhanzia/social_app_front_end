import React from 'react';
import './style.scss';

export default function InputField(props) {
    const {
      id, type, value,className, placeholder,errorClass,helpertext,error, label, ...rest
    } = props;
  return (
    <div className="custominputfields form__group">
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        className={`form__field ${props.className}`}
        placeholder={props.placeholder}
        {...rest}
      />
      <label htmlFor={props.id} className="form__label">
        {props.label}
      </label>
      <span>
        {props.inputFieldIcon}
      </span>
      {props.error ? <p className={`custom-error ${props.errorClass}`}>{props.helpertext}</p> : null}
    </div>
  );
}
