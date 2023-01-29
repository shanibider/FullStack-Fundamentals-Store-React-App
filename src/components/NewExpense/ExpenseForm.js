import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enterdTitle, setEnteredTitle] = useState('')
    const [enterdAmount, setEnteredAmount] = useState('')
    const [enterdDate, setEnteredDate] = useState('')

    // if we want only one useState for everybody - the deffrence is that we now set all 3 all the time
    //if we will set object for one - the other will be delete 
    // useState({
    //enterdTitle:'', 
    //enterdAmount:'',
    //enterdDate: ''
    //});

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);

        //setUserInput({
        //...userInput,
        //enterdTitle: event.target.value,
        //});
    };
    const AmountChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    };
    const DateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {

        event.preventDefault(); // becouse we dont want the page to reload
        const expenseData = {    // creating object
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enterdAmount} min="0.01" step="0.01" onChange={AmountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enterdDate} min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
