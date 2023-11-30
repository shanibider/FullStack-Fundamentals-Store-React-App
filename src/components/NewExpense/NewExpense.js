import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


// Defines the NewExpense functional component. 
// This component renders the ExpenseForm component, and handles the data entered by the user.
const NewExpense = (props) => {

    // saveExpenseDataHandler function- will be passed as a prop to the ExpenseForm component.
    // takes enteredExpenseData as a parameter, that responsible for handling the submitted expense data.
    // (handler for saving expense data when the user submits the form in the ExpenseForm component).
    const saveExpenseDataHandler = (enteredExpenseData) => { 

        // creates a new object expenseData by spreading the properties of enteredExpenseData, and adding  a new property- unique id generated using Math.random().toString().
        // Commonly used in scenarios where you want to create a new object based on an existing one with some additions. 
        const expenseData ={
            //  This is spread operator, which copies all the properties of the enteredExpenseData object into the new expenseData object. It's a concise way of creating a shallow copy of an object.
            ...enteredExpenseData,
            id: Math.random().toString()

        };
        console.log (expenseData);
        
        /*
        Communication between 'App' abd `NewExpense` Components:
        in App Component we render 'onAddExpense', equal to addExpenseHandler function (that update the array)-
           " return (<NewExpense onAddExpense = {addExpenseHandler} />); "
        and here we recieve it as a prop.
        This function called when a new expense is submitted, passing the expenseData object as a parameter,
        and responsible for updating the expenses state in the App component.
        */
        props.onAddExpense (expenseData);
    }



// Renders the ExpenseForm component and passes the 'saveExpenseDataHandler' function as a prop named 'onSaveExpenseData' (will use it in 'ExpenseForm' component). 
// This allows the ExpenseForm component to notify the NewExpense component when a new expense is added.

// includes the 'ExpenseForm component' as a child and passes the saveExpenseDataHandler function to it as a 'prop named onSaveExpenseData'.

return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </div>
};

export default NewExpense;