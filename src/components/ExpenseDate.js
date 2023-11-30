import './ExpenseDate.css'

// 'ExpenseDate component'- responsible for displaying a formatted date based on the provided 'props.date'
function ExpenseDate(props) {

    // The date is broken down into its components (month, day, and year), and each component is displayed within a specific div.
    // Extract the month from the 'date' prop and format it as a long month name (e.g., 'January').
    const month = props.date.toLocaleString('en-US', { month: 'long' });

    // Extract the day from the 'date' prop and format it as a two-digit day (e.g., '01').
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    // Extract the year from the 'date' prop.
    const year = props.date.getFullYear();

    // The component returns a JSX structure, representing a div with the class 'expense-date'.
    return <div className='expense-date'>
        {/* Display the formatted month within a div with the class 'expense-date__month'. */}
        <div className='expense-date__month'> {month} </div>

        {/* Display the year within a div with the class 'expense-date__year'. */}
        <div className='expense-date__year'> {year} </div>

        {/* Display the formatted day within a div with the class 'expense-date__day'. */}
        <div className='expense-date__day'> {day} </div>
    </div>
}

export default ExpenseDate;
