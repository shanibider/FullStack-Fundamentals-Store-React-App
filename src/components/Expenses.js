import ExpenseItem from "./ExpenseItem";
//import 'Expenses.css';
import Card from "../UI/Card";

function Expenses(props) {

    return (
        <div>
        <Card className="expenses">
         
            {props.items.map( (expense )  => <ExpenseItem key={expense.id} title ={expense.title} amount ={expense.amount} date = {expense.date } /> )}

        </Card>
        </div>
    )
}

export default Expenses;