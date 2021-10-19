import React from 'react';
import './style.scss';
import Button from '../button/index';
import { Link } from 'react-router-dom';

export default function TableActions(props) {
  return (
    <div className="clearfix">
      <div className="float-left">
        <div className="total_entries">
          <span>Show</span>
          <div className="d-inline-block">
            <select className="custom-select mx-1">
              <option selected="">100</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <span className="entries_heading">entries</span>
        </div>
      </div>
      <div className="float-right d-flex">
        <form role="search" className="app-search">
          <div className="form-group table_search_bar mb-0">
            <input type="text" className="form-control" placeholder="Search" />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
        {props.filterBtn ? (
          <div className="table_filter_btns mt-md-0" role="group" aria-label="">
            <Button
              type="button"
              className="btn btn-sm table_filter_btn"
              label={<i className="fas fa-filter" />}
              handleClick={props.handlePopup}
            />
            <Button
              type="button"
              className="btn btn-sm table_listing_btn"
              label={<i className="fas fa-list" />}
            />
            <Link to={props.href} className="table_add_btn">
              Add
            </Link>

            {/* <Link
            type="button"
            to=""
            className="btn btn-sm table_add_btn"
            label="Add"
          /> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}
