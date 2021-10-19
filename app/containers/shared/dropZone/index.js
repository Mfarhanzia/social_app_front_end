import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Row, Col } from 'reactstrap';
import './style.scss';
import Dropfile from './img/file.png';
export default function DropZone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path} style={{listStyle: 'none'}}>
      <img src={Dropfile} />
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="dropZoneDesign style01">
      <div {...getRootProps({ className: 'dropzone' })}>
        <div className="dropzonebackground">
          <input {...getInputProps()} />
          <p>Drop file here to upload</p>
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}
