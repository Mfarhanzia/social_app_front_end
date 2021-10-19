import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Row, Col } from 'reactstrap';
import './style.scss';
import Dropfile from './img/uploadfile.png';

export default function DropZone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li className=" dropfile" key={file.path} style={{listStyle: 'none'}}>
      <Row>
        <Col xl="2" lg="2" md="2" sm="2"  xs="2" >
          <img  height="40" src={Dropfile} />
        </Col>
        <Col xl="9" lg="9" md="9" sm="9" xs="9">
          
            <span className="filename">{file.path}</span><br />
            <span className="filesize">{file.size} bytes</span>
            <span>
            <div className="hitPercent">
                <div style={{width: '100%', float:'right'}} className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70"
                        aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
                    </div>
                </div>
            </div>
            </span>
        </Col>
      </Row>
    </li>
  ));

  return (
    <div className="dropZoneDesign style02">
      <div {...getRootProps({ className: 'dropzone' })}>
        <div className="dropzonebackground">
          <input {...getInputProps()} />
          <p>Drop file here to upload</p>
        </div>
      </div>
      <aside>
        <ul className="style02">{files}</ul>
      </aside>
      <Row className="justify-content-center text-center addFilesDesign">
        <Col xl="2" className="dropZone1">
          <img src={Dropfile} />
        </Col>
        <Col xl="2">
          <img src={Dropfile} />
        </Col>
        <Col xl="2" className="dropZone2">
          <img src={Dropfile} />
        </Col>
      </Row>
    </div>
  );
}
