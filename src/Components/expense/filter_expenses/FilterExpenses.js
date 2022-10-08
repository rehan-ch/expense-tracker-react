import React from 'react'

function FilterExpenses(props) {
  const onSelectChangeHandler = (event) =>{
    props.filter(event.target.value);
  }
  return (

    <div className='m-3'>
      <div className="form-group col-md-6">
        <label htmlFor="filter">Filter</label>
        <select name="year" id="filter" className='form-select' onChange={onSelectChangeHandler}>
        <option value="">All Expenses</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}

export default FilterExpenses