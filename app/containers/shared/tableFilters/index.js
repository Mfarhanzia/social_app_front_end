import React from 'react';
import './style.scss';
import Button from '../button/index';
import Dropdown1 from '../dropdown/index';

export default function TableFilters() {
  return (
    <div className="filterstab d-flex">
        <Button className="filterbtn selected" label="All (123)" />
        <Button className="filterbtn" label="News (13)" />
        <Button className="filterbtn" label="Call Attempts (3)" />
        <Button className="filterbtn" label="Offer Made (3)" />
        <Dropdown1 className="filterbtn bglight" title="Lead Status (3)" />
        <Dropdown1 className="filterbtn bglight" title="Your Lead (3)" />
        <Dropdown1 className="filterbtn bglight" title="Deals (3)" />
    </div>
  );
}
