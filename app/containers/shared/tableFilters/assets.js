import React from 'react';
import './style.scss';
import Button from '../button/index';
import Dropdown1 from '../dropdown/index';

export default function transactionFilters() {
  return (
    <div className="transactionFilters filterstab d-flex">
        <Button className="filterbtn selected" label="All (123)" />
        <Dropdown1 className="filterbtn bglight" title="Pending (26)" />
        <Button className="filterbtn" label="Closed (0)" />
        <Button className="filterbtn" label="Status (3)" />
    </div>
  );
}
