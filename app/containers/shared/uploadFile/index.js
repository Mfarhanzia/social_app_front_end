import React from "react"

export const UploadFile = (props) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="service_uploadfile p-0 pb-2 w-100">
      <div className="file-upload-btn clearfix">
        <div className="file-upload">
          <button 
            type="button" 
            className="file-upload__label service_add_btn "
            onClick={handleClick} htmlFor={props.name}
        >
            {props.text ? props.text : "Upload"}
          </button>
          <input
            hidden
            accept={props.accept ? props.accept : "image/*"}
            id={props.name}
            name={props.name}
            type="file"
            onChange={props.onChange}
            ref={hiddenFileInput}
          />
        </div>
      </div>
    </div>
  )
}

export default UploadFile;
