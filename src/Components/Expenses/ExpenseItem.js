import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__actions">
            <div className="expense-item__price">${props.amount}</div>
            <button className="expense-item__remove" 
            onClick={props.removeItem}
            >
              delete
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
