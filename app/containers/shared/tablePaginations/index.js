import React from 'react';
import './style.scss';

export default function TablePaginations(props) {
  return (
    <div className="table_footer">
      <div className="float-left">
        <div className="enteries_numbers">Showing 1 to 3 of 3 enteries</div>
      </div>
      <div className="float-right">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
