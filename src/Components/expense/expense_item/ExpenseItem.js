import React from 'react';
import './ExpenseItem.css';
function ExpenseItem(props) {
  return (
      <div className="row expense-item m-3">
        <div className="col-md-2 expense-date">{props.date.toDateString()}</div>
        <div className="col-md-8">{props.title}</div>
        <div className="col-md-2">${props.amount}</div>
      </div>
  )
}

export default ExpenseItem