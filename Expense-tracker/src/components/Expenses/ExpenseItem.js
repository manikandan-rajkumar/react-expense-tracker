import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){
    
    //Dynamic data
    //const expenseDate = new Date(2023, 1, 30);
    //const expenseTitle = 'Car Insurance';
    //const expenseAmount = 295.8;

    // usestate to change the title when clicked on it

   // const [title,setTitle] = useState(props.title);

    // Onclick event function
    //const clickHandler = () =>{
    //    setTitle('Updated!');
    //    console.log('Updated');
    //}


    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div> 
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;