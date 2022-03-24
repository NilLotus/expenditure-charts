import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import './App.css';
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
      id: 'e0',
      title: 'Toilet paper',
      amount :94.32,
      date: new Date(2020, 1, 12)
  },
  {
      id: 'e1',
      title: 'Tissue',
      amount :21.3,
      date: new Date(2020, 1, 12)
  },
  {
      id: 'e2',
      title: 'TV',
      amount :436.90,
      date: new Date(2021, 8, 10)
  },
  {
      id: 'e3',
      title: 'Car Insurance',
      amount :254.77,
      date: new Date(2020, 9, 7)
  },
  {
      id: 'e4',
      title: 'Bicycle',
      amount :1100.00,
      date: new Date(2019, 4, 22)
  },
]

const App = () => {
    const[expenses, setExpenses]= useState(DUMMY_EXPENSES)
    const addExpenseHandler=(expense) =>{
      setExpenses(prevExpenses => ([expense, ...prevExpenses]))
    }
    const removeItemHandler = (key) => {
      let remainArray = [...expenses]
      let index = remainArray.findIndex(expens => expens.id === key);
      remainArray.splice(index, 1);
      setExpenses(remainArray)
    }
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} 
      removeItem={removeItemHandler}
      />
    </div>
  );
}

export default App;
