import { View, Text } from "react-native";
//component
import ExpensesOutput from "./../components/ExpensesOutput/ExpensesOutput";

//import context

import { ExpensesContext } from "../store/expenses-context";
import { useContext, useEffect } from "react";
//date function
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getEpenses = async () => {
      await fetchExpenses();
    };
    getEpenses();
  }, []);

  const recentExpences = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpences}
      expensesPeriod="Last 7 days"
      fallBackText="no expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
