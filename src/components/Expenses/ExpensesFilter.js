// import { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const [selectedYear, handleSelectedYear] = useState(props.selectedYear);
  const handleFilterChange = (event) => {
    // handleSelectedYear(event.target.value);
    props.changeFilterYear(event.target.value);
    console.log(event.target.value);
  };
  const years = [2022, 2021, 2020, 2019];
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={handleFilterChange}>
          {years.map(year => <option value={year} key={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
