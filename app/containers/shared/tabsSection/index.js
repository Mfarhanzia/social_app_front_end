import React, { useState } from 'react';
import './style.scss';

export default function TabsSection(props) {

  const TabIcon = index => {
    if (index == 0) {
      return <i className={`mdi mdi-home-variant h5`} />;
    } else if (index == 1) {
      return <i className={`mdi mdi-account h5`} />;
    } else {
      return <i className={`mdi mdi-email h5`} />;
    }
  };

  return (
    <ul className="nav nav-pills nav-justified callTabsDesign" role="tablist">
      {props.data.map((tab, index) => {
        return (
          <li
            className="nav-item waves-effect waves-light"
            key={`tab_${tab.label}_${index}`}
          >
            <a
              key={index}
              className={`nav-link ${props.activeTab == index ? 'active' : ''}`}
              data-bs-toggle="tab"
              href={props.href}
              role="tab"
              onClick={()=>tab.handleClick(index)}
            >
              <span className="d-none d-md-block">{tab.label}</span>
              <span className="d-block d-md-none">
                <TabIcon index={index} />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
