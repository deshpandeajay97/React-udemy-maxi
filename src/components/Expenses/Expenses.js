import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./Expenses.css";
const Expenses = (props) => {
  const [selectedYear, handleSelectedYear] = useState("2020");
  const handleChangeFilterYear = (year) => {
    debugger;
    handleSelectedYear(year);
    console.log(year, "Expenses");
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  return (
    <div>
      {/* Here changeFilterYear and selectedYear combination gives two way binding. this is called as controlled component where parent component completely controls child component property. */}
      <ExpensesFilter
        changeFilterYear={handleChangeFilterYear}
        selectedYear={selectedYear}
      />
      <Card className="expenses">
        <span>{selectedYear}</span>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          filteredExpenses={filteredExpenses}
        />
      </Card>
    </div>
  );
};
export default Expenses;
