import './Card.css';

// Creating a functional and reusable Card component that takes props as a parameter

// In React, components are reusable and self-contained pieces of code that can have their own state and properties.
// props allow you to pass data from a parent component to a child component.
function Card(props) {
    // Linking the default class 'card' with any additional classes passed through props
    // creates a variable named classes by concatenating the string 'card' with any additional classes passed through the props object.
    //This is a common pattern to allow users of your component to customize its styling by providing additional class names.    
    const classes = 'card' + props.className;

    //return defines what my component renders.
   // returns a div element with the class determined by the classes variable and renders any child components.
   // The props.children part is a way to render any child components that are passed to the Card component.
   // this allows you to nest components inside each other. 
   return <div className={classes}> {props.children} </div>
}

// Exporting the Card component as the default export
export default Card;






/*
PROPS -
In React, "props" is a special keyword that stands for "properties." It is an object that contains all the attributes you pass to a component when you use it in JSX. When you define a component and use it like an HTML tag, you can pass data to that component as attributes.

In the context of `ExpenseItem` component:
function ExpenseItem(props) {
}

Here, `props` is the parameter of the `ExpenseItem` function.
It's an object that contains all the properties passed to this component.
For example, if you use this component somewhere in your application like this:
<ExpenseItem date="2023-01-01" title="Groceries" amount={50.00} />

In this case, `props` inside the `ExpenseItem` component would be an object:
{
  date: "2023-01-01",
  title: "Groceries",
  amount: 50.00
}

So, when you access `props.date`, `props.title`, or `props.amount` within the `ExpenseItem` component, you're accessing the values passed to the component when it was used.
Props allow you to pass dynamic data to your components, making them reusable and flexible.
*/