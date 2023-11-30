import React, { useState } from "react";
import './ExpenseForm.css'

// 'ExpenseForm'- functional React component represents a form for entering new expenses.
// handles user input, prevents the default form submission behavior, and notifies the parent component about a new expense when the form is submitted (triggers a callback function provided via props (onSaveExpenseData)). The JSX code renders a form with input fields and a button for adding expenses.
const ExpenseForm = (props) => {

    // 3 'state' variables.
    // each one for the title, amount, and date entered by the user, corresponds to an input field in the form.
    const [enterdTitle, setEnteredTitle] = useState('')
    const [enterdAmount, setEnteredAmount] = useState('')
    const [enterdDate, setEnteredDate] = useState('')

    // if we want only one useState for everybody - the deffrence is that we now set all 3 all the time
    // if we will set object for one - the other will be delete 
    // useState({
    //enterdTitle:'', 
    //enterdAmount:'',
    //enterdDate: ''
    //});


    // Event handlers
    // Event handler for changes in the title input field.
    const titleChangeHandler = (event) => {
        console.log(event.target.value);

        // Update the state variable 'enteredTitle' with the current value of the title input field.
        setEnteredTitle(event.target.value);

        /*
        // Alternative approach using the spread operator to update the entire state object (another way to manage state).
         setUserInput({
         ...userInput,
         enterdTitle: event.target.value,
         });
         */
    };

        // Event handler for changes in the amount input field.
    const AmountChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);   // Update the state variable 'enteredAmount' with the current value of the amount input field.
    };

        // Event handler for changes in the date input field.
    const DateChangeHandler = (event) => {
        console.log(event.target.value);    
        setEnteredDate(event.target.value);     // Update the state variable 'enteredDate' with the current value of the date input field.
    };


    // handling the form submission.
    // prevents the default form submission behavior, creates an expenseData object with the entered data, logs it to the console, and clears the input fields in the form.
    const submitHandler = (event) => {

        event.preventDefault(); // Prevent the page from reloading
        
        // Create an object with the entered title, amount, and date (from useState)
        const expenseData = {    
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
        console.log (expenseData);


        // Pass the expenseData object to the 'onSaveExpenseData prop' function provided by the parent component ('NewExpense').
        // (calls "props.onSaveExpenseData(expenseData)" to notify the parent component about the new expense)= child to parent components communication.
        props.onSaveExpenseData (expenseData);

        //  clears the input fields in the form after the user submits the form.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


// Returns JSX code for rendering a form with input fields and a button for adding expenses.
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
