import React from 'react';
import './style.scss';

export default function Textarea(props) {
  return (
    <div className="form-group">
      <textarea
        className={`form-control custom-textarea ${props.className}`}
        id={props.id}
        rows={props.rows}
        placeholder={props.placeholder}
      />
    </div>
  );
}
