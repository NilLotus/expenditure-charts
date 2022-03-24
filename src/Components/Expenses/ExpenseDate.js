import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    let longMonth = props.date.toLocaleDateString('en-US', {month: 'long'});
    let day = props.date.toLocaleDateString('en-US', {day: '2-digit'});
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{longMonth}</div>
            <div className='expense-date__year'>{props.date.getFullYear()}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;