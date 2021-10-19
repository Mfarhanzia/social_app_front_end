import React from 'react';
import './style.scss';
import Button from '../button/index';
import Dropdown1 from '../dropdown/index';

export default function transactionFilters() {
  return (
    <div className=" filterstab d-flex">
        <Button className="filterbtn selected" label="All (123)" />
        <Dropdown1 className="filterbtn bglight" title="Target Area (13)" />
        <Dropdown1 className="filterbtn bglight" title="Type of investor" />
        <Button className="filterbtn" label="VIP (2)" />
        <Button className="filterbtn" label="Need Updating (1)" />
        <Button className="filterbtn" label="Active (1)" />
        <Button className="filterbtn" label="In Active (1)" />
        <Dropdown1 className="filterbtn bglight" title="New Buyers (5)" />
    </div>
  );
}
