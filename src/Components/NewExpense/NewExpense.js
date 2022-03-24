import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };
  let expenseFormContent;

  if (showForm) {
    expenseFormContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        toggle={toggleForm}
      />
    );
  } else {
    expenseFormContent = <button className='new-expense__button' onClick={toggleForm}>Add New Expense</button>;
  }
  return (
    <Card className="new-expense">
      {expenseFormContent}
    </Card>
  );
};
export default NewExpense;
