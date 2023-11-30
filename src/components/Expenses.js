import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

// 'Expenses component'- responsible for rendering a list of expense items.
// It utilizes the Card component for styling and iterates over an array of expense items, rendering an ExpenseItem component for each item in the list.
// The individual expense items are passed as props to the ExpenseItem component, making it a flexible and reusable piece of the UI.


// Defines a functional React component
function Expenses(props) {

    // Renders JSX code wrapped in a div.
    return (
        <div>
        {/* Utilizes the Card component with the class 'expenses' to provide styling for the container.*/}
        <Card className="expenses">
         
         {/* Uses the map function on props.items to iterate through an array of expense items (props.items).
         For each item, it renders an ExpenseItem component with the following props: key, title, amount, and date.
         The key prop is essential for React to efficiently update and re-render components.*/}
            {props.items.map( (expense ) => <ExpenseItem key={expense.id} title ={expense.title} amount ={expense.amount} date = {expense.date } /> )}

        </Card>
        </div>
    )
}

export default Expenses;