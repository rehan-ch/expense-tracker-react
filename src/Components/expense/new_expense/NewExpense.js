import React, { useState } from 'react'

function NewExpense(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
  const onSubmitHandler = (event, )=>{
    event.preventDefault();
    const newExpense = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.addNewExpense(newExpense)
    clearFormInput();
    setIsEditing(false)
  }
  const clearFormInput = ()=>{
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const editingHandler = ()=>{
    setIsEditing(true);
  }
  return (
    <div className='text-center'>
      {!isEditing && (<button className='text-center btn btn-primary' onClick={()=> editingHandler()}>Add Expense</button>)}
      {isEditing && (
      <form className='m-3 p-5' onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title" value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="amount">Amount</label>
            <input type="number" className="form-control" id="amount" placeholder="Amount" value={enteredAmount} onChange={amountChangeHandler}  />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" placeholder="date" value={enteredDate} onChange={dateChangeHandler}  />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>

      </form>)}
    </div>
  )
}

export default NewExpense