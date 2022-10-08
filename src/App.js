import { useState } from 'react';
import Expense from './Components/expense/Expense';
import NewExpense from './Components/expense/new_expense/NewExpense';
const DUMMY_EXPENSES = [
  {id: 1,
  title: 'Bike',
  date: new Date(2018, 11, 24),
  amount: 100},
  {id: 2,
  title: 'Grocery',
  date: new Date(2019, 10, 22),
  amount: 50},
  {id: 3,
  title: 'Rent',
  date: new Date(2020, 11, 2),
  amount: 200}
]
function App() {

  const [savedExpenses, setSavedExpenses] = useState(DUMMY_EXPENSES)

  const addNewExpense = (newExpense)=>{
    setSavedExpenses((savedExpenses)=>{
      return [newExpense, ...savedExpenses]
    })
  }
  return (
    <div className="container expense-items-container">
      <NewExpense addNewExpense = {addNewExpense} />
      <Expense expenses = {savedExpenses} addNewExpense = {addNewExpense} />
    </div>
  );
}

export default App;
