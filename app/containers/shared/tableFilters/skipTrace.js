import React from 'react';
import './style.scss';
import Button from '../button/index';
import Dropdown1 from '../dropdown/index';
import uploadicon from '../../../images/upload.png'; 
// import download from '../../../images/download';

export default function transactionFilters() {
  return (
    <div className="skiptrace filterstab d-flex">
        <Button className="filterbtn selected" label="Single Skip Trace" />
        <Button className="filterbtn" label="Upload File" icon={ <i style={{float:'left'}} className="fas fa-upload"></i>} />
        {/* <Button className="filterbtn" label="Upload File" /> */}
        <Dropdown1 className="filterbtn" icon={uploadicon} title="STATUS" />
    </div>
  );
}