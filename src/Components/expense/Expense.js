import React, { useState, useEffect } from 'react'
import ExpenseItem from './expense_item/ExpenseItem'
import './Expense.css'
import FilterExpenses from './filter_expenses/FilterExpenses'

function Expense(props) {




  const [listedExpenses, setListedExpenses] = useState([])
  
  useEffect(()=>{
    setListedExpenses(props.expenses)
  },[props])

  const filterExpenses = (value)=>{
    if (value){
      setListedExpenses((prevState)=>(
        prevState.filter((expense)=> expense.date.getFullYear() == value)
      ))
    }
    else{
      setListedExpenses(props.expenses)
    }
  }

  return (
    <div className='container expense-items-container'>
      < FilterExpenses filter = {filterExpenses} />
      {listedExpenses.length > 0 ? 
        listedExpenses.map((expense, index) => (
          <ExpenseItem
          key = {index}
          title = {expense.title}
          date = {expense.date}
          amount = {expense.amount} />
        ))
       :
      <div className='text-center'><h2 className='no_content'>No Content</h2></div>
       }

      </div>
  )
}

export default Expense