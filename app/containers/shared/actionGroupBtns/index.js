import React from 'react';
import './style.scss'; 

export default function actionGroupBtns() {
  return (
    <div className=" quick_action_btns mt-4 mt-md-0" role="group" aria-label="Basic example">
        <button type="button" className="btn  call_btn">
          <i className="fas fa-phone-alt"></i>
        </button>
        <button type="button" className="btn  comment_btn">
          <i className="fas fa-comment-dots"></i>
        </button>
        <button type="button" className="btn  mail_btn">
          <i className="fas fa-envelope"></i>
        </button> 
    </div>
  );
}
