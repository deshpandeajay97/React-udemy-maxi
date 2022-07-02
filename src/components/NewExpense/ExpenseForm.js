import './ExpenseForm.css';
const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log('Log');
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label> Label </label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label> Amount </label>
          <input type="number" min="0.01" step="0.01" onChange />
        </div>
        <div className="new-expense__controls">
          <label> Date </label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange />
        </div>
      </div>
      <div className="new-expense_action">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
