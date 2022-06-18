import { View, Text } from "react-native";
//component
import ExpensesOutput from "./../components/ExpensesOutput/ExpensesOutput";

//import context

import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallBackText="no registered expenses found"
    />
  );
};

export default AllExpenses;
