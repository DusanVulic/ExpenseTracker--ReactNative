import { View, Text } from "react-native";
//component
import ExpensesOutput from "./../components/ExpensesOutput/ExpensesOutput";

//import context

import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
//date function
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpences = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpences} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
