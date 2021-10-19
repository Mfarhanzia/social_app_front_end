import React, { Component, useState } from 'react';
import Select, { components } from 'react-select';

import './dropdown.scss';

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      // transform: 'scaleY(1)',
    };
  },
};
const Dropdown = props => {
  const [isActive, setActive] = useState(false);
  const handleToggle = e => {
    console.log('====', e);
    setActive(!isActive);
  };
  return (
    <Select
      className={`selecttab ${isActive ? 'app' : ''}`}
      // defaultValue={props.dropdownOptions[0]}
      options={props.dropdownOptions}
      onMenuOpen={handleToggle}
      isSearchable={false}
      onChange={
        props.handleClick
      }
    />
  );
};

export default Dropdown;
