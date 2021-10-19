import React from 'react';
import './style.scss';
import GroupBtns from '../actionGroupBtns/index';

export default function Table(props) {
  return (
    <div className="xforce_table">
      <div className="table-responsive">
        <table className="table table-sm m-0">
          <thead>
            <tr>
              {props.dataCounter ? (
                <th>
                  <span>#</span>
                </th>
              ) : null}
              {props.headData.map((tab, index) => (
                <th key={`head-${index}`}>
                  <span>{tab}</span>
                </th>
              ))}
              {props.quickActions ? (
                <th>
                  <span>Quick Actions</span>
                </th>
              ) : null}
              {props.actionsDropBtn ? (
                <th>
                  <span>Actions</span>
                </th>
              ) : null}
              <th />
            </tr>
          </thead>
          <tbody>
            {props.data.map((tab, index) => (
              <tr>
                {props.tableCheckbox ? (
                  <td>
                    <span>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                    </span>
                  </td>
                ) : null}
                {props.dataCounter ? <td>{index + 1}</td> : null}
                {Object.keys(tab).map(key => (
                  <td>{tab[key]}</td>
                ))}
                {props.quickActions ? (
                  <>
                    <td>
                      <GroupBtns />
                    </td>
                  </>
                ) : null}

                {props.actionsDropBtn ? (
                  <>
                    <td className="action_drop_btn">
                      <button type="button" className="btn btn-link">
                        <i className="fas fa-ellipsis-v" />
                      </button>
                    </td>
                  </>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
