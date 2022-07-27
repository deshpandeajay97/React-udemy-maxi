import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem item={expense} key={expense.id} />
      ))}
    </ul>
  );
};
export default ExpensesList;
