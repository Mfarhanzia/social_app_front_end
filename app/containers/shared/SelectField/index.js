import React from 'react';
import './style.scss';
import Select from 'react-dropdown-select';

export default function SelectField(props) {
  return (
    <Select
      className={`selectFieldDesign ${props.className}`}
      options={props.options}
      values={[props.options.find(country => country.value)]}
      //   direction="rtl"
      placeholder={props.placeholder}
      noDataRenderer={() => <p>No data</p>}
      onChange={value => console.log('value', value)}
    />
  );
}
