import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return(
      <h3 className="expenses-list__fallback">
      There is no expense for this year!
    </h3>
    )
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          removeItem={() => props.removeItem(expense.id)}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
