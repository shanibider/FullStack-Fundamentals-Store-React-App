import React, { useState } from "react";
import './ExpenseForm.css'

// defines a React component named ExpenseForm that represents a form for entering new expenses.
// handles user input, prevents the default form submission behavior, and notifies the parent component about a new expense when the form is submitted. 
const ExpenseForm = (props) => {

    // defines 3 state variables, each one for the title, amount, and date entered by the user, corresponds to an input field in the form.
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

    // handling changes in the title, amount, and date input fields.
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


    // handling the form submission.
    // Defines a submit handler function that prevents the default form submission behavior, creates an expenseData object with the entered data, logs it to the console,
    const submitHandler = (event) => {

        event.preventDefault(); // we dont want the page to reload
        
        const expenseData = {    // creating object
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
        console.log(expenseData);

        // and calls props.onSaveExpenseData(expenseData) to notify the parent component about the new expense.
        props.onSaveExpenseData(expenseData);

        //  clears the input fields in the form after the user submits the form.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


// Returns JSX code for rendering a form.
// The form has three input fields- title, amount, and date.
// The form is submitted to the submitHandler function when the user clicks the "Add expense" button.
    return (
        <form onSubmit={submitHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enterdAmount} min="0.10" step="0.10" onChange={AmountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enterdDate} min="2021-01-01" max="2026-12-31" onChange={DateChangeHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
            {/* "Add expense" button that triggers the form submission */}
                <button type="submit">Add expense</button>
            </div>

        </form>
    );
};

export default ExpenseForm;
