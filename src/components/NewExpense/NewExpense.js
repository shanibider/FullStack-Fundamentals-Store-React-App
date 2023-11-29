import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


// Defines the NewExpense functional component. 
// This component renders the ExpenseForm component, and handles the data entered by the user.
const NewExpense = (props) => {

    // Defines a function saveExpenseDataHandler that takes enteredExpenseData as a parameter, that responsible for handling the submitted expense data.
    // * This function is a handler for saving expense data when the user submits the form in the ExpenseForm component.
    const saveExpenseDataHandler = (enteredExpenseData) => { 

        // creates a new object expenseData by spreading the properties of enteredExpenseData, and adding a unique id generated using Math.random().toString().
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()

        };

        console.log (expenseData );
        
        /*
        Communication between Components:
        in App.js we render 'onAddExpense' function-
           " return (<NewExpense onAddExpense = {addExpenseHandler} />); "
        and here we recieve it as a prop.
        This function is then called when a new expense is submitted, passing the expenseData object as a parameter,
        and responsible for updating the expenses state in the App component.
        */
        props.onAddExpense (expenseData);
    }



// Renders the ExpenseForm component and passes the 'saveExpenseDataHandler' function as a prop named 'onSaveExpenseData' (will use it in 'ExpenseForm' component). 
// This allows the ExpenseForm component to notify the NewExpense component when a new expense is added.
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </div>
};

export default NewExpense;