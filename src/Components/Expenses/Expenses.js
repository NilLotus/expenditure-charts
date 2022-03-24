import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} 
      removeItem={props.removeItem}
      />
    </Card>
  );
};

export default Expenses;
