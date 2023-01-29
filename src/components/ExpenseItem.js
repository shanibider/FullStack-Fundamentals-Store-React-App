
import React , {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {

    const [title , setTitle] = useState(props.title)
   

const clickHandler= () => {
    console.log('clicked!');
   setTitle('Update!');
};
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description "> {title}</div>
            <div className="expense-item__price"> {props.amount}</div>
            <button onClick={clickHandler}> change title </button>
        </Card>
    );
}

export default ExpenseItem;