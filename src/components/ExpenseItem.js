import React , {useState} from 'react'; // React hook used for adding state to functional components.
// components imported from other files.
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

// React component named 'ExpenseItem' that represents an individual expense item.

// ExpenseItem uses state to manage the title of the expense item and includes a button that, when clicked, updates the title. The component is styled using the Card component and additional styles from the 'ExpenseItem.css' file.
function ExpenseItem(props) {

    // declare a state variable title and a function setTitle to update the title. The initial state is set to the value of props.title passed to the component.
    const [title , setTitle] = useState(props.title)
   
// function that logs a message to the console when the button is clicked and updates the title state to 'Update!'.
const clickHandler= () => {
    console.log('clicked!');
   setTitle('Update!');
};

// Renders a Card component with the class 'expense-item', which likely provides styling for the expense item.
// Renders an ExpenseDate component, passing the date prop.    
// Renders a div element displaying the expense item's title using the title state.
// Renders a div element displaying the amount of the expense item using the props.amount.
// Renders a button with an onClick event that triggers the clickHandler function when clicked.
return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description "> {title}</div>
            <div className="expense-item__price"> {props.amount}</div>
            <button onClick={clickHandler}> Change title </button>
        </Card>
    );
}

export default ExpenseItem;