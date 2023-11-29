import React, {useState} from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";

// this React application initializes a list of expenses with dummy data, allows users to add new expenses through the NewExpense component,
// and displays the list of expenses using the Expenses component. The state is managed using the useState hook,
// and the addExpenseHandler function is used to update the state when a new expense is added.


// holds an array of dummy expense data. Each expense object has properties like id, title, amount, and date.
  const DUMMY_EXPENSE = [
    {
      id : 'e1',
      title: 'Toilet Paper',
      amount: 94,
      date: new Date(2023, 11, 20),
    },
    { id : 'e2' , title: 'New TV', amount: 799.49, date: new Date(2023, 2, 21) },
    { id: 'e3' , title: 'Car ipad', amount: 2999, date: new Date(2023, 2, 28) },
    { id: 'e4' , title: 'New Desk', amount: 450, date: new Date(2023, 5, 12) },
  ];


  // App Component:
  const App = () => {
    // The state variable expenses holds an array of expenses, and setExpense is a function to update this state.
    const [expenses , setExpense ] = useState (DUMMY_EXPENSE);    

    // a function that takes an expense parameter, and responsible for updating the expenses state by adding a new expense.
  const addExpenseHandler = (expense) => { 
    console.log ('im in APP.js');
    console.log (expense);

    // Updating State with setExpense:
    // takes the previous state (prevExpense) and returns a new array that includes the new expense at the beginning.
    // *This is a common pattern to update state arrays without directly mutating them.
    setExpense ( (prevExpense ) => {
      return [expense , ...prevExpense];

    });
  };


// Renders JSX code 

// Renders the NewExpense component and passes the 'addExpenseHandler' function as a prop named 'onAddExpense'. This allows the NewExpense component to notify the App component when a new expense is added.
// In the NewExpense component, i would use the 'onAddExpense' prop to notify the parent (App) component when a new expense is added. This is typically done by calling the onAddExpense function with the new expense data.

// Renders the Expenses component, passing the expenses state as  as a prop named 'items'.  This allows the Expenses component to access and display the list of expenses.

  return <div>
    <h2> This is my store!😊</h2>
    {/* Passing addExpenseHandler to NewExpense Component */}
    <NewExpense onAddExpense = { addExpenseHandler} />
    <Expenses items={expenses} />
  </div>
}

export default App;









/* Passing addExpenseHandler to NewExpense Component:

return (<NewExpense onAddExpense={addExpenseHandler} />)

And inn the NewExpense component, i would use the onAddExpense prop to notify the parent (App) component when a new expense is added. 
For example, in the NewExpense component:

const NewExpense = (props) => {
    ... 
    props.onAddExpense (enteredExpenseData);
  };
};


*/