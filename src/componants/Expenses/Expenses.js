import React, { useState } from "react";

import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import Expenseslist from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");


  const filterChangeHandler = (selectedYear) => {
   setFilteredYear(selectedYear);
  };


    const filteredExpenses = props.items.filter((expense) => {
      let exp;
      if (expense.date.getFullYear().toString() === filteredYear){
        exp = expense;
      }
      return exp;
      
    })

   
  


  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        
        <ExpensesChart expenses={filteredExpenses}/>
        
        <Expenseslist items={filteredExpenses}/>

        
      </Card>
    </div>
  );
};

export default Expenses;
