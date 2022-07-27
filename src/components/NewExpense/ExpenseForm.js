import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [isFormFilling, setIsFormFilling] = useState(false);
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // Avoid first approach as react schedules state updates and in first case threre is a possibility that react might not give latest state screenshots, by using arrow function it will always gives latest snapshot
    // setUserInput({...userInput, enteredTitle: event.target.value})
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const disableForm = () => {
    setIsFormFilling(false);
  };
  const enableForm = () => {
    setIsFormFilling(true);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    console.log(expenseData);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    props.onSaveExpenseData(expenseData);
    disableForm();
  };
  if (!isFormFilling) {
    return <button onClick={enableForm}>Add Expense</button>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label> Label </label>
          <label>{userInput.enteredTitle}</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__controls">
          <label>{userInput.enteredAmount}</label>
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>{userInput.enteredDate}</label>
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit" onClick={disableForm}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
