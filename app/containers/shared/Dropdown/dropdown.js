import React, { Component, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Select ,{ components }from 'react-select';

import './dropdown.scss';
const options = [
  { value: 'Lead Status', label: 'Lead Status' }
]
const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      // transform: 'scaleY(1)',
    };
  },
};
const Dropdown = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = (e) => {
      console.log('====',e)
      setActive(!isActive);  
    };
    return(

      <Select className={`selecttab ${isActive ? 'app' : ''}`} 
      // defaultValue={propTypes.title[0]}
      options={propTypes.title} 
      onMenuOpen={handleToggle}
      isSearchable={false}
      />
    )
  };

export default Dropdown;
