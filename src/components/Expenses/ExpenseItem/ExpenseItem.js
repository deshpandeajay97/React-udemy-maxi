import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate/ExpenseDate';
import Card from '../Card';
import React, { useState } from 'react';
const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.item.amount);
  const clickHandler = () => {
    setAmount(100);
  };
  console.log('ExpenseItemEvaluated');
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
